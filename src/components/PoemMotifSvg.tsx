import React from 'react';
import { PoemMotif } from '../data/poems';

interface PoemMotifSvgProps {
  motif: PoemMotif;
  className?: string;
}

export const PoemMotifSvg: React.FC<PoemMotifSvgProps> = ({
  motif,
  className = 'w-14 h-14',
}) => {
  const strokeProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.15,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      {/* Subtle archival medallion frame */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeOpacity="0.35"
        fill="none"
      />
      <circle
        cx="32"
        cy="32"
        r="24.5"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeDasharray="1.5 2.5"
        strokeOpacity="0.4"
        fill="none"
      />

      {motif === 'kapok-river' && (
        <g {...strokeProps}>
          {/* Rising sun & kapok tree silhouette over river waves */}
          <path d="M22 22a10 10 0 0 1 20 0" strokeOpacity="0.7" />
          <path d="M32 42V22" />
          <path d="M32 28c-4-2-7-2-10 0" />
          <path d="M32 26c4-2 7-2 10 0" />
          <path d="M16 44c5-2 11-2 16 0s11 2 16 0" />
          <path d="M20 49c4-1.5 8-1.5 12 0s8 1.5 12 0" strokeOpacity="0.65" />
        </g>
      )}

      {motif === 'rain-eaves' && (
        <g {...strokeProps}>
          {/* Rustic thatched eaves & diagonal rain lines */}
          <path d="M16 32L32 20l16 12" />
          <path d="M22 32v14h20V32" strokeOpacity="0.75" />
          <path d="M20 18l-3 5M28 15l-3 5M39 16l-3 5M46 21l-3 5" strokeOpacity="0.7" />
          <path d="M18 46h28" />
        </g>
      )}

      {motif === 'bamboo-pass' && (
        <g {...strokeProps}>
          {/* Mountain pass above clouds & slender bamboo */}
          <path d="M14 42l12-16 8 9 7-11 9 18" />
          <path d="M18 46c4-2 8-2 12 0s8 2 12 0 6-1 8 0" strokeOpacity="0.7" />
          <path d="M32 16v28" strokeOpacity="0.5" />
          <path d="M32 24c3-2 5-1 6-3" strokeOpacity="0.8" />
        </g>
      )}

      {motif === 'purple-slope' && (
        <g {...strokeProps}>
          {/* Hillside trail & delicate blossom */}
          <path d="M14 45c8-8 14-18 18-24 4 8 10 15 18 24" />
          <circle cx="32" cy="24" r="3" />
          <path d="M32 18v3M32 27v3M26 24h3M35 24h3" strokeOpacity="0.75" />
          <path d="M22 45c6-5 12-7 20-9" strokeOpacity="0.65" />
        </g>
      )}

      {motif === 'silk-lute' && (
        <g {...strokeProps}>
          {/* Classical moon lute (Đàn nguyệt) & drifting smoke */}
          <circle cx="32" cy="37" r="9" />
          <path d="M32 28V15" />
          <path d="M29 17h6" />
          <path d="M30 28v18M34 28v18" strokeOpacity="0.55" />
          <path d="M22 21c2-2 3-5 1-7" strokeOpacity="0.55" />
        </g>
      )}

      {motif === 'night-bridge' && (
        <g {...strokeProps}>
          {/* Arched river bridge & crescent moon */}
          <path d="M14 38c6-9 30-9 36 0" />
          <path d="M14 38h36" />
          <path d="M23 35v8M32 33.5v9.5M41 35v8" strokeOpacity="0.75" />
          <path d="M16 45c6-1.5 10-1.5 16 0s10 1.5 16 0" strokeOpacity="0.6" />
          <path d="M43 18a5 5 0 1 0 5 6 4 4 0 0 1-5-6Z" />
        </g>
      )}

      {motif === 'twin-peaks' && (
        <g {...strokeProps}>
          {/* Twin peaks of Núi Đôi & star above */}
          <path d="M13 44l13-18 6 8 6-10 13 20" />
          <path d="M19 44c8-2 18-2 26 0" strokeOpacity="0.65" />
          <path d="M32 14v5M29.5 16.5h5" />
          <path d="M26 36l-3 8M38 36l3 8" strokeOpacity="0.45" />
        </g>
      )}

      {motif === 'liuzhou-train' && (
        <g {...strokeProps}>
          {/* Karst peaks & winding railway track */}
          <path d="M15 34c3-8 7-12 10-6 3-10 8-12 12-2 3-7 7-5 12 8" strokeOpacity="0.75" />
          <path d="M16 46c7-6 13-8 16-8s9 2 16 8" />
          <path d="M21 43c5-3 9-4 11-4s6 1 11 4" strokeOpacity="0.6" />
          <path d="M27 38h10" />
        </g>
      )}

      {motif === 'temple-bell' && (
        <g {...strokeProps}>
          {/* Ancient bronze pagoda bell & sound ripples */}
          <path d="M25 22h14" />
          <path d="M32 17v5" />
          <path d="M26 22c0 8-3 14-5 17h22c-2-3-5-9-5-17" />
          <circle cx="32" cy="41.5" r="2" />
          <path d="M18 30c-2 2-2 5 0 7M46 30c2 2 2 5 0 7" strokeOpacity="0.6" />
        </g>
      )}
    </svg>
  );
};
