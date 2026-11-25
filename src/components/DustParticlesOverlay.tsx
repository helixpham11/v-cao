import React from 'react';

interface DustParticle {
  id: number;
  leftPct: number;
  topPct: number;
  sizePx: number;
  opacity: number;
  durationSec: number;
  delaySec: number;
  driftVariant: 'a' | 'b';
}

const SPOTLIGHT_PARTICLES: DustParticle[] = [
  { id: 1, leftPct: 24, topPct: 16, sizePx: 2.2, opacity: 0.42, durationSec: 13, delaySec: -2, driftVariant: 'a' },
  { id: 2, leftPct: 32, topPct: 28, sizePx: 1.6, opacity: 0.3, durationSec: 17, delaySec: -6, driftVariant: 'b' },
  { id: 3, leftPct: 41, topPct: 12, sizePx: 2.5, opacity: 0.48, durationSec: 14, delaySec: -1, driftVariant: 'a' },
  { id: 4, leftPct: 48, topPct: 22, sizePx: 1.8, opacity: 0.36, durationSec: 19, delaySec: -9, driftVariant: 'b' },
  { id: 5, leftPct: 53, topPct: 10, sizePx: 2.0, opacity: 0.44, durationSec: 15, delaySec: -4, driftVariant: 'a' },
  { id: 6, leftPct: 58, topPct: 35, sizePx: 1.5, opacity: 0.28, durationSec: 18, delaySec: -11, driftVariant: 'b' },
  { id: 7, leftPct: 64, topPct: 18, sizePx: 2.4, opacity: 0.4, durationSec: 12, delaySec: -3, driftVariant: 'a' },
  { id: 8, leftPct: 72, topPct: 26, sizePx: 1.7, opacity: 0.34, durationSec: 16, delaySec: -7, driftVariant: 'b' },
  { id: 9, leftPct: 19, topPct: 42, sizePx: 2.0, opacity: 0.38, durationSec: 15, delaySec: -5, driftVariant: 'a' },
  { id: 10, leftPct: 29, topPct: 56, sizePx: 2.6, opacity: 0.45, durationSec: 14, delaySec: -8, driftVariant: 'b' },
  { id: 11, leftPct: 36, topPct: 48, sizePx: 1.5, opacity: 0.25, durationSec: 20, delaySec: -12, driftVariant: 'a' },
  { id: 12, leftPct: 45, topPct: 64, sizePx: 2.2, opacity: 0.35, durationSec: 16, delaySec: -2, driftVariant: 'b' },
  { id: 13, leftPct: 55, topPct: 52, sizePx: 1.9, opacity: 0.32, durationSec: 18, delaySec: -10, driftVariant: 'a' },
  { id: 14, leftPct: 62, topPct: 44, sizePx: 2.4, opacity: 0.42, durationSec: 13, delaySec: -6, driftVariant: 'b' },
  { id: 15, leftPct: 69, topPct: 58, sizePx: 1.6, opacity: 0.3, durationSec: 17, delaySec: -3, driftVariant: 'a' },
  { id: 16, leftPct: 78, topPct: 39, sizePx: 2.1, opacity: 0.36, durationSec: 15, delaySec: -9, driftVariant: 'b' },
  { id: 17, leftPct: 21, topPct: 71, sizePx: 1.8, opacity: 0.32, durationSec: 18, delaySec: -4, driftVariant: 'a' },
  { id: 18, leftPct: 34, topPct: 78, sizePx: 2.3, opacity: 0.36, durationSec: 14, delaySec: -7, driftVariant: 'b' },
  { id: 19, leftPct: 49, topPct: 82, sizePx: 1.6, opacity: 0.28, durationSec: 19, delaySec: -11, driftVariant: 'a' },
  { id: 20, leftPct: 66, topPct: 74, sizePx: 2.2, opacity: 0.38, durationSec: 15, delaySec: -1, driftVariant: 'b' },
  { id: 21, leftPct: 76, topPct: 67, sizePx: 1.7, opacity: 0.3, durationSec: 17, delaySec: -8, driftVariant: 'a' },
  { id: 22, leftPct: 43, topPct: 34, sizePx: 2.7, opacity: 0.46, durationSec: 12, delaySec: -5, driftVariant: 'b' },
  { id: 23, leftPct: 51, topPct: 29, sizePx: 1.5, opacity: 0.3, durationSec: 21, delaySec: -13, driftVariant: 'a' },
  { id: 24, leftPct: 26, topPct: 38, sizePx: 2.1, opacity: 0.4, durationSec: 16, delaySec: -6, driftVariant: 'b' },
  { id: 25, leftPct: 74, topPct: 49, sizePx: 2.3, opacity: 0.38, durationSec: 14, delaySec: -2, driftVariant: 'a' },
  { id: 26, leftPct: 39, topPct: 19, sizePx: 1.8, opacity: 0.42, durationSec: 17, delaySec: -9, driftVariant: 'b' },
];

const AMBIENT_WEB_PARTICLES: DustParticle[] = [
  { id: 101, leftPct: 7, topPct: 14, sizePx: 2.4, opacity: 0.24, durationSec: 18, delaySec: -3, driftVariant: 'a' },
  { id: 102, leftPct: 15, topPct: 38, sizePx: 2.0, opacity: 0.2, durationSec: 22, delaySec: -9, driftVariant: 'b' },
  { id: 103, leftPct: 22, topPct: 68, sizePx: 2.8, opacity: 0.22, durationSec: 20, delaySec: -5, driftVariant: 'a' },
  { id: 104, leftPct: 31, topPct: 24, sizePx: 1.8, opacity: 0.18, durationSec: 24, delaySec: -12, driftVariant: 'b' },
  { id: 105, leftPct: 38, topPct: 55, sizePx: 2.5, opacity: 0.23, durationSec: 19, delaySec: -2, driftVariant: 'a' },
  { id: 106, leftPct: 46, topPct: 83, sizePx: 2.2, opacity: 0.2, durationSec: 21, delaySec: -7, driftVariant: 'b' },
  { id: 107, leftPct: 54, topPct: 19, sizePx: 2.6, opacity: 0.24, durationSec: 17, delaySec: -10, driftVariant: 'a' },
  { id: 108, leftPct: 61, topPct: 47, sizePx: 1.9, opacity: 0.18, durationSec: 23, delaySec: -4, driftVariant: 'b' },
  { id: 109, leftPct: 68, topPct: 76, sizePx: 2.7, opacity: 0.22, durationSec: 19, delaySec: -14, driftVariant: 'a' },
  { id: 110, leftPct: 75, topPct: 31, sizePx: 2.1, opacity: 0.21, durationSec: 21, delaySec: -6, driftVariant: 'b' },
  { id: 111, leftPct: 84, topPct: 62, sizePx: 2.5, opacity: 0.24, durationSec: 18, delaySec: -1, driftVariant: 'a' },
  { id: 112, leftPct: 91, topPct: 22, sizePx: 2.0, opacity: 0.19, durationSec: 25, delaySec: -11, driftVariant: 'b' },
  { id: 113, leftPct: 12, topPct: 86, sizePx: 2.2, opacity: 0.2, durationSec: 20, delaySec: -8, driftVariant: 'a' },
  { id: 114, leftPct: 44, topPct: 11, sizePx: 2.4, opacity: 0.22, durationSec: 18, delaySec: -15, driftVariant: 'b' },
  { id: 115, leftPct: 79, topPct: 88, sizePx: 2.1, opacity: 0.18, durationSec: 22, delaySec: -5, driftVariant: 'a' },
  { id: 116, leftPct: 93, topPct: 79, sizePx: 2.3, opacity: 0.2, durationSec: 19, delaySec: -9, driftVariant: 'b' },
  { id: 117, leftPct: 27, topPct: 46, sizePx: 1.9, opacity: 0.19, durationSec: 24, delaySec: -3, driftVariant: 'a' },
  { id: 118, leftPct: 64, topPct: 14, sizePx: 2.4, opacity: 0.21, durationSec: 20, delaySec: -13, driftVariant: 'b' },
];

interface DustParticlesOverlayProps {
  variant?: 'spotlight' | 'subtle' | 'ambient';
  testId?: string;
  className?: string;
}

export const DustParticlesOverlay: React.FC<DustParticlesOverlayProps> = ({
  variant = 'spotlight',
  testId,
  className = '',
}) => {
  const particles =
    variant === 'spotlight'
      ? SPOTLIGHT_PARTICLES
      : variant === 'ambient'
        ? AMBIENT_WEB_PARTICLES
        : SPOTLIGHT_PARTICLES.slice(0, 14);

  const isAmbient = variant === 'ambient';

  return (
    <div
      aria-hidden="true"
      data-testid={testId}
      className={`pointer-events-none overflow-hidden ${
        isAmbient ? 'fixed inset-0 z-20' : 'absolute inset-0'
      } ${className}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full ${
            p.driftVariant === 'a' ? 'dust-mote-a' : 'dust-mote-b'
          } ${isAmbient ? 'blur-[0.6px]' : ''}`}
          style={{
            left: `${p.leftPct}%`,
            top: `${p.topPct}%`,
            width: `${p.sizePx}px`,
            height: `${p.sizePx}px`,
            opacity: variant === 'spotlight' ? p.opacity : p.opacity * 0.78,
            background: isAmbient
              ? 'radial-gradient(circle, rgba(247,225,168,0.75) 0%, rgba(212,175,55,0.25) 60%, transparent 100%)'
              : 'radial-gradient(circle, rgba(252,235,186,0.95) 0%, rgba(212,175,55,0.45) 55%, transparent 100%)',
            boxShadow: isAmbient
              ? '0 0 8px rgba(212,175,55,0.22)'
              : '0 0 6px rgba(244,214,138,0.35)',
            animationDuration: `${p.durationSec}s`,
            animationDelay: `${p.delaySec}s`,
          }}
        />
      ))}
    </div>
  );
};
