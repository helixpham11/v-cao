export type PageTurnKind = 'open' | 'close';

export interface PageTurnAudioProfile {
  durationSec: number;
  liftDurationSec: number;
  sweepStartFreqHz: number;
  sweepEndFreqHz: number;
  settleTimeSec: number;
  peakGain: number;
  panStart: number;
  panEnd: number;
}

export function getPageTurnProfile(kind: PageTurnKind): PageTurnAudioProfile {
  if (kind === 'open') {
    return {
      durationSec: 0.44,
      liftDurationSec: 0.065,
      sweepStartFreqHz: 920,
      sweepEndFreqHz: 2350,
      settleTimeSec: 0.29,
      peakGain: 0.56,
      panStart: -0.22,
      panEnd: 0.22,
    };
  }
  return {
    durationSec: 0.36,
    liftDurationSec: 0.055,
    sweepStartFreqHz: 2050,
    sweepEndFreqHz: 820,
    settleTimeSec: 0.23,
    peakGain: 0.48,
    panStart: 0.22,
    panEnd: -0.22,
  };
}

let sharedAudioContext: AudioContext | null = null;

function getOrCreateAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AudioCtx) return null;
  if (!sharedAudioContext) {
    sharedAudioContext = new AudioCtx();
  }
  return sharedAudioContext;
}

function createTexturedNoiseBuffer(
  ctx: AudioContext,
  durationSec: number,
  jitterDepth: number
): AudioBuffer {
  const sampleCount = Math.max(1, Math.floor(ctx.sampleRate * durationSec));
  const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  let b0 = 0;
  let b1 = 0;
  let b2 = 0;
  let smoothMod = 1;

  for (let i = 0; i < sampleCount; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99765 * b0 + white * 0.099046;
    b1 = 0.963 * b1 + white * 0.2965164;
    b2 = 0.57 * b2 + white * 1.0526913;
    const pink = (b0 + b1 + b2 + white * 0.1848) * 0.36;

    // Subtle organic fiber micro-modulation so paper rustle sounds textured
    if (i % 64 === 0) {
      smoothMod = 1 - jitterDepth * 0.5 + Math.random() * jitterDepth;
    }

    data[i] = Math.max(-1, Math.min(1, pink * smoothMod));
  }
  return buffer;
}

function scheduleRealisticPageTurn(
  ctx: AudioContext,
  profile: PageTurnAudioProfile
) {
  const now = ctx.currentTime + 0.005;

  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(1.0, now);

  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.setValueAtTime(-14, now);
  compressor.knee.setValueAtTime(18, now);
  compressor.ratio.setValueAtTime(3.5, now);

  if (typeof ctx.createStereoPanner === 'function') {
    const panner = ctx.createStereoPanner();
    panner.pan.setValueAtTime(profile.panStart, now);
    panner.pan.linearRampToValueAtTime(
      profile.panEnd,
      now + profile.durationSec * 0.9
    );
    masterGain.connect(panner);
    panner.connect(compressor);
  } else {
    masterGain.connect(compressor);
  }
  compressor.connect(ctx.destination);

  // Layer 1: Crisp initial finger-edge paper lift (0 -> liftDurationSec)
  const liftSrc = ctx.createBufferSource();
  liftSrc.buffer = createTexturedNoiseBuffer(
    ctx,
    profile.liftDurationSec + 0.03,
    0.45
  );
  const liftFilter = ctx.createBiquadFilter();
  liftFilter.type = 'bandpass';
  liftFilter.frequency.setValueAtTime(3100, now);
  liftFilter.Q.value = 1.4;

  const liftGain = ctx.createGain();
  liftGain.gain.setValueAtTime(0.0001, now);
  liftGain.gain.linearRampToValueAtTime(profile.peakGain * 0.42, now + 0.012);
  liftGain.gain.exponentialRampToValueAtTime(
    0.0001,
    now + profile.liftDurationSec
  );

  liftSrc.connect(liftFilter);
  liftFilter.connect(liftGain);
  liftGain.connect(masterGain);
  liftSrc.start(now);
  liftSrc.stop(now + profile.liftDurationSec + 0.02);

  // Layer 2: Main arched paper glide through air
  const sweepStart = now + profile.liftDurationSec * 0.45;
  const sweepDur = profile.durationSec - profile.liftDurationSec * 0.45;
  const sweepSrc = ctx.createBufferSource();
  sweepSrc.buffer = createTexturedNoiseBuffer(ctx, sweepDur, 0.3);

  const sweepBandpass = ctx.createBiquadFilter();
  sweepBandpass.type = 'bandpass';
  sweepBandpass.Q.value = 0.85;
  sweepBandpass.frequency.setValueAtTime(profile.sweepStartFreqHz, sweepStart);
  sweepBandpass.frequency.exponentialRampToValueAtTime(
    profile.sweepEndFreqHz,
    now + profile.settleTimeSec
  );

  const warmthFilter = ctx.createBiquadFilter();
  warmthFilter.type = 'lowpass';
  warmthFilter.frequency.setValueAtTime(4400, sweepStart);

  const sweepGain = ctx.createGain();
  sweepGain.gain.setValueAtTime(0.0001, sweepStart);
  sweepGain.gain.linearRampToValueAtTime(
    profile.peakGain * 0.72,
    sweepStart + 0.045
  );
  sweepGain.gain.linearRampToValueAtTime(
    profile.peakGain * 0.48,
    sweepStart + sweepDur * 0.48
  );
  sweepGain.gain.linearRampToValueAtTime(
    profile.peakGain * 0.85,
    now + profile.settleTimeSec
  );
  sweepGain.gain.exponentialRampToValueAtTime(
    0.0001,
    now + profile.durationSec
  );

  sweepSrc.connect(sweepBandpass);
  sweepBandpass.connect(warmthFilter);
  warmthFilter.connect(sweepGain);
  sweepGain.connect(masterGain);
  sweepSrc.start(sweepStart);
  sweepSrc.stop(sweepStart + sweepDur);

  // Layer 3: Soft, warm paper-on-paper settle brush at the end
  const settleStart = now + profile.settleTimeSec - 0.02;
  const settleDur = 0.11;
  const settleSrc = ctx.createBufferSource();
  settleSrc.buffer = createTexturedNoiseBuffer(ctx, settleDur, 0.25);

  const settleFilter = ctx.createBiquadFilter();
  settleFilter.type = 'lowpass';
  settleFilter.frequency.setValueAtTime(860, settleStart);

  const settleGain = ctx.createGain();
  settleGain.gain.setValueAtTime(0.0001, settleStart);
  settleGain.gain.linearRampToValueAtTime(
    profile.peakGain * 0.55,
    settleStart + 0.025
  );
  settleGain.gain.exponentialRampToValueAtTime(0.0001, settleStart + settleDur);

  settleSrc.connect(settleFilter);
  settleFilter.connect(settleGain);
  settleGain.connect(masterGain);
  settleSrc.start(settleStart);
  settleSrc.stop(settleStart + settleDur);
}

/**
 * Plays a refined, realistic 3-stage vintage paper page-turn sound effect
 * (finger-edge lift -> airy paper arc -> soft paper settle).
 */
export function playPageTurnSound(kind: PageTurnKind): boolean {
  try {
    const ctx = getOrCreateAudioContext();
    if (!ctx) return false;
    const profile = getPageTurnProfile(kind);

    if (ctx.state === 'suspended') {
      ctx
        .resume()
        .then(() => {
          scheduleRealisticPageTurn(ctx, profile);
        })
        .catch(() => {});
    } else {
      scheduleRealisticPageTurn(ctx, profile);
    }
    return true;
  } catch {
    return false;
  }
}
