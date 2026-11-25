import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { PoemWork } from '../data/poems';
import {
  FONT_SIZE_OPTIONS,
  FONT_SIZE_ORDER,
  FontSizeKey,
  SlideDirection,
} from '../utils/exhibition';

interface ReadingFolioProps {
  poem: PoemWork;
  fontSize: FontSizeKey;
  onChangeFontSize: (size: FontSizeKey) => void;
  onClose: () => void;
  slideDirection: SlideDirection;
}

export const ReadingFolio: React.FC<ReadingFolioProps> = ({
  poem,
  fontSize,
  onChangeFontSize,
  onClose,
  slideDirection,
}) => {
  const fontPreset = FONT_SIZE_OPTIONS[fontSize];
  const initialX = slideDirection === 'left' ? 42 : -42;

  return (
    <motion.article
      initial={{ opacity: 0, x: initialX, scale: 0.985 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: initialX * 0.55, scale: 0.985 }}
      transition={{ duration: 0.56, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform, opacity' }}
      aria-labelledby={`folio-title-${poem.id}`}
      className="archival-ivory-paper relative flex max-h-[78vh] w-full flex-col overflow-hidden border border-[#B8923A]/55 text-[#1C1814] shadow-[0_32px_90px_-12px_rgba(0,0,0,0.88),0_0_50px_rgba(212,175,55,0.12)]"
    >
      {/* Subtle inner page rule */}
      <div className="pointer-events-none absolute inset-2.5 border border-[#B8923A]/25" />

      {/* Top reading bar: metadata + font size controls + Thoát button */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#B8923A]/30 px-5 py-3.5 sm:px-8 sm:py-4">
        <div className="flex flex-wrap items-center gap-2 font-ui text-xs text-[#6B5A42] tabular-nums">
          <span className="font-medium text-[#8B6A24]">
            Tác phẩm {poem.romanNumeral}
          </span>
          <span aria-hidden="true">·</span>
          <span>{poem.year}</span>
          <span aria-hidden="true">·</span>
          <span>{poem.genre}</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Font size segmented selector */}
          <div
            role="group"
            aria-label="Điều chỉnh cỡ chữ"
            className="flex items-center gap-1 rounded-md border border-[#B8923A]/35 bg-[#EAE0CC]/75 p-0.5"
          >
            {FONT_SIZE_ORDER.map((sizeKey) => {
              const option = FONT_SIZE_OPTIONS[sizeKey];
              const active = fontSize === sizeKey;
              return (
                <button
                  key={sizeKey}
                  type="button"
                  onClick={() => onChangeFontSize(sizeKey)}
                  aria-pressed={active}
                  className={`min-h-[36px] min-w-[44px] cursor-pointer rounded-sm px-2.5 py-1 font-ui text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6A24] ${
                    active
                      ? 'bg-[#141210] text-[#F5EFE4]'
                      : 'text-[#4F4334] hover:bg-[#141210]/10 hover:text-[#141210]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* Prominent Thoát button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Thoát trang đọc"
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-md border border-[#B8923A]/70 bg-[#141210] px-4 py-2 font-ui text-xs font-semibold tracking-wider text-[#F5EFE4] transition-colors hover:bg-[#24201B] hover:border-[#D4AF37] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <X className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
            <span>Thoát</span>
          </button>
        </div>
      </div>

      {/* Scrollable poetry sheet */}
      <div
        data-lenis-prevent
        className="folio-scroll relative z-10 overflow-y-auto px-6 py-7 sm:px-12 sm:py-10"
      >
        <div className="mx-auto max-w-[56ch]">
          {/* Poem Title Header */}
          <header className="mb-8 text-center">
            <p className="font-poem text-xs italic tracking-[0.14em] text-[#7D6433]">
              {poem.isExcerpt ? 'Trích đoạn tiêu biểu' : 'Nguyên tác toàn văn'}
            </p>
            <h2
              id={`folio-title-${poem.id}`}
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#141210] sm:text-4xl lg:text-[2.65rem]"
              style={{ textWrap: 'balance' }}
            >
              {poem.title}
            </h2>
            <p className="mt-1.5 font-poem text-sm italic text-[#5B4D3C]">
              Nhà thơ Vũ Cao
            </p>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#B8923A]/75 to-transparent" />
          </header>

          {/* Poem Stanzas with smooth fade-out / fade-in on font size change */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={fontSize}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.17, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className={`font-poem ${fontPreset.poemTextClass} ${fontPreset.lineSpacingClass} space-y-6 text-[#1E1A15]`}
              data-testid="poem-verses-container"
            >
              {poem.stanzas.map((stanza, sIndex) => (
                <div key={sIndex} className="space-y-1">
                  {stanza.map((line, lIndex) => (
                    <p key={lIndex} className="tracking-[0.005em]">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Editorial archival note */}
          <footer className="mt-10 border-t border-[#B8923A]/30 pt-5 text-left">
            <p className="font-poem text-xs leading-relaxed italic text-[#5E503F]">
              Ghi chú lưu trữ: {poem.editorialNote}
            </p>
          </footer>
        </div>
      </div>
    </motion.article>
  );
};
