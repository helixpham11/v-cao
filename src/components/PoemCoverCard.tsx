import React from 'react';
import { motion } from 'motion/react';
import { PoemWork } from '../data/poems';
import { PoemMotifSvg } from './PoemMotifSvg';

interface PoemCoverCardProps {
  poem: PoemWork;
  onSelect?: (poem: PoemWork) => void;
  layoutId?: string;
  isActiveStage?: boolean;
  isHidden?: boolean;
  tabIndex?: number;
}

export const PoemCoverCard: React.FC<PoemCoverCardProps> = ({
  poem,
  onSelect,
  layoutId,
  isActiveStage = false,
  isHidden = false,
  tabIndex = 0,
}) => {
  const cardContent = (
    <div
      className={`velvet-plaque relative flex h-full w-full flex-col justify-between overflow-hidden border transition-all duration-300 ${
        isActiveStage
          ? 'border-[#D4AF37]/75 shadow-[0_28px_70px_-15px_rgba(212,175,55,0.28),0_0_45px_rgba(244,214,138,0.12)]'
          : 'border-[#B8923A]/35 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)] group-hover:-translate-y-1 group-hover:border-[#D4AF37]/70 group-hover:shadow-[0_24px_50px_-16px_rgba(212,175,55,0.2)]'
      } p-4 sm:p-5`}
    >
      {/* Subtle overhead glass vitrine sheen */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          isActiveStage
            ? 'opacity-100 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,rgba(244,214,138,0.16),transparent_70%)]'
            : 'opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,rgba(212,175,55,0.12),transparent_70%)]'
        }`}
      />

      {/* Inner double brass hairline frame */}
      <div className="pointer-events-none absolute inset-2.5 border border-[#B8923A]/25" />

      {/* Four classical corner filigree marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#D4AF37]/70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2.5 top-2.5 h-2.5 w-2.5 border-r border-t border-[#D4AF37]/70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2.5 left-2.5 h-2.5 w-2.5 border-b border-l border-[#D4AF37]/70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#D4AF37]/70"
      />

      {/* Top archival numbering row */}
      <div className="relative z-10 flex items-baseline justify-between px-2 pt-1.5 text-[#D4AF37]">
        <span className="font-display text-lg font-medium tracking-[0.14em] tabular-nums">
          {poem.romanNumeral}
        </span>
        <span className="font-ui text-[11px] font-medium tracking-[0.16em] text-[#B8923A]/85 tabular-nums">
          {poem.editionCode}
        </span>
      </div>

      {/* Center gold-foil crest & literary title */}
      <div className="relative z-10 my-auto flex flex-col items-center px-2 py-4 text-center">
        <PoemMotifSvg
          motif={poem.motif}
          className={`mb-4 transition-transform duration-500 ${
            isActiveStage
              ? 'h-16 w-16 text-[#E6C86E]'
              : 'h-14 w-14 text-[#D4AF37]/85 group-hover:scale-105 group-hover:text-[#E6C86E]'
          }`}
        />

        <div className="mb-2.5 h-px w-10 bg-gradient-to-r from-transparent via-[#B8923A]/70 to-transparent" />

        <h3
          className="font-display text-[1.5rem] leading-[1.18] font-semibold tracking-[0.015em] text-[#F5EFE4] sm:text-[1.75rem]"
          style={{ textWrap: 'balance' }}
        >
          {poem.title}
        </h3>

        <p className="mt-1.5 font-poem text-xs italic tracking-wide text-[#C9BA9E]/80">
          Vũ Cao
        </p>
      </div>

      {/* Bottom compact unboxed label */}
      <div className="relative z-10 border-t border-[#B8923A]/20 px-1 pt-2.5 pb-1 text-center">
        <p className="truncate font-ui text-[10.5px] tracking-[0.04em] text-[#B8923A] sm:text-[11px] sm:tracking-[0.06em]">
          {poem.subtitleLabel}
        </p>
      </div>
    </div>
  );

  const silkyLayoutTransition = {
    layout: {
      type: 'spring' as const,
      stiffness: 185,
      damping: 26,
      mass: 0.92,
    },
  };

  if (isActiveStage || !onSelect) {
    return (
      <motion.div
        layoutId={layoutId}
        transition={silkyLayoutTransition}
        style={{ willChange: 'transform, opacity' }}
        className="aspect-[3/4] w-full max-w-[300px] sm:max-w-[320px] mx-auto select-none"
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      layoutId={layoutId}
      transition={silkyLayoutTransition}
      style={{ willChange: 'transform, opacity' }}
      className="aspect-[3/4] w-full"
    >
      <button
        type="button"
        onClick={() => onSelect(poem)}
        tabIndex={isHidden ? -1 : tabIndex}
        aria-label={`Mở tác phẩm ${poem.title} (${poem.editionCode})`}
        className="group relative block h-full w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0A09]"
      >
        {cardContent}
      </button>
    </motion.div>
  );
};
