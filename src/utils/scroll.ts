export interface MuseumScrollConfig {
  duration: number;
  wheelMultiplier: number;
  touchMultiplier: number;
  anchorOffsetPx: number;
}

export const MUSEUM_SCROLL_CONFIG: MuseumScrollConfig = {
  duration: 1.35,
  wheelMultiplier: 0.88,
  touchMultiplier: 1.4,
  anchorOffsetPx: -72,
};

/**
 * Exponential ease-out curve tuned for a unhurried, museum-stroll scroll feel.
 */
export function museumScrollEasing(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  if (clamped === 0) return 0;
  if (clamped === 1) return 1;
  return Math.min(1, 1.001 - Math.pow(2, -10 * clamped));
}
