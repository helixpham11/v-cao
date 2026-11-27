import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PoemWork } from '../data/poems';
import {
  FontSizeKey,
  getPoemGridPosition,
  getViewportColumns,
} from '../utils/exhibition';
import { playPageTurnSound } from '../utils/sound';
import { DustParticlesOverlay } from './DustParticlesOverlay';
import { PoemCoverCard } from './PoemCoverCard';
import { ReadingFolio } from './ReadingFolio';
import { ScrollReveal } from './ScrollReveal';

interface ExhibitionStageProps {
  poems: PoemWork[];
  activePoem: PoemWork | null;
  onSelectPoem: (poem: PoemWork) => void;
  onClosePoem: () => void;
}

export const ExhibitionStage: React.FC<ExhibitionStageProps> = ({
  poems,
  activePoem,
  onSelectPoem,
  onClosePoem,
}) => {
  const [fontSize, setFontSize] = useState<FontSizeKey>('md');
  const [columns, setColumns] = useState<1 | 2 | 4>(() =>
    typeof window !== 'undefined' ? getViewportColumns(window.innerWidth) : 4
  );

  // Track responsive columns to compute directional slide accurately
  useEffect(() => {
    const handleResize = () => {
      setColumns(getViewportColumns(window.innerWidth));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenPoem = (poem: PoemWork) => {
    playPageTurnSound('open');
    onSelectPoem(poem);
  };

  const handleCloseWithSound = () => {
    playPageTurnSound('close');
    onClosePoem();
  };

  // Escape key closes reading folio cleanly with page-close sound
  useEffect(() => {
    if (!activePoem) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        playPageTurnSound('close');
        onClosePoem();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePoem, onClosePoem]);

  // Lock background scroll while spotlight showcase is open
  useEffect(() => {
    if (!activePoem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activePoem]);

  const activePosition = activePoem
    ? getPoemGridPosition(activePoem.index, columns)
    : null;
  const slideDirection = activePosition?.slideDirection ?? 'left';

  return (
    <section
      id="tu-trung-bay"
      aria-label="Tủ trưng bày 9 tác phẩm của nhà thơ Vũ Cao"
      className="relative mx-auto max-w-[1220px] px-5 py-14 sm:px-8 lg:py-20"
    >
      {/* Section Heading */}
      <ScrollReveal>
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#D4AF37]/20 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-ui text-xs tracking-[0.18em] text-[#E2C15A]">
              Bộ Sưu Tập Tuyển Chọn · I — IX
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#F7F2E8] sm:text-4xl">
              Tủ Kính Trưng Bày Tác Phẩm
            </h2>
          </div>
          <p className="max-w-md font-poem text-sm italic text-[#DDD2BE]/90 sm:text-right">
            Chạm vào một ấn bản để bật luồng đèn rọi, khép mờ khung cảnh xung quanh và mở trang đọc.
          </p>
        </div>
      </ScrollReveal>

      {/* 4-Column Vitrine Grid on large screens */}
      <ScrollReveal delay={0.05} amount={0.03}>
        <div
          data-testid="vitrine-grid"
          aria-hidden={activePoem !== null}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
        >
        {poems.map((poem) => {
          const isSelected = activePoem?.id === poem.id;
          const isOtherDimmed = activePoem !== null && !isSelected;

          return (
            <motion.div
              key={poem.id}
              animate={{
                opacity: isOtherDimmed ? 0 : 1,
                scale: isOtherDimmed ? 0.96 : 1,
              }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className={`relative rounded-none border border-[#D4AF37]/20 bg-[#211E1B]/85 p-3.5 transition-colors duration-300 hover:border-[#D4AF37]/45 ${
                activePoem !== null ? 'pointer-events-none' : ''
              }`}
            >
              {/* Subtle recessed vitrine top light bar */}
              <div
                aria-hidden="true"
                className="mx-auto mb-2.5 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#B8923A]/40 to-transparent"
              />

              {/* When active, keep grid slot footprint intact while layoutId cover transitions into spotlight */}
              {isSelected ? (
                <div className="aspect-[3/4] w-full opacity-0" aria-hidden="true" />
              ) : (
                <PoemCoverCard
                  poem={poem}
                  onSelect={handleOpenPoem}
                  layoutId={`poem-cover-${poem.id}`}
                  isHidden={activePoem !== null}
                />
              )}
            </motion.div>
          );
        })}
        </div>
      </ScrollReveal>

      {/* Cinematic Spotlight Stage Overlay */}
      <AnimatePresence>
        {activePoem && (
          <motion.div
            key="spotlight-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`Đang trưng bày tác phẩm ${activePoem.title}`}
            data-testid="spotlight-stage"
            data-slide-direction={slideDirection}
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'opacity' }}
            className="fixed inset-0 z-50 flex overflow-y-auto bg-[#080706]/[0.985] px-4 py-6 sm:px-8 sm:py-10"
          >
            {/* Ambient Center Museum Spotlight Wash */}
            <motion.div
              aria-hidden="true"
              data-testid="spotlight-beam"
              initial={{ opacity: 0, scaleY: 0.9 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0.92 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="spotlight-beam pointer-events-none fixed inset-x-0 top-0 h-[85vh] origin-top"
            />

            {/* Directional Overhead Spotlight Aimed at Slid Cover */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className={`spotlight-cover-cone pointer-events-none fixed top-0 hidden h-[80vh] w-[520px] lg:block ${
                slideDirection === 'left'
                  ? 'left-[max(2rem,calc(50%-560px))]'
                  : 'right-[max(2rem,calc(50%-560px))]'
              }`}
            />

            {/* Floating Dust Particles drifting slowly through spotlight beams */}
            <DustParticlesOverlay
              variant="spotlight"
              testId="dust-particles-overlay"
            />

            {/* Top physical lamp canopy */}
            <div
              aria-hidden="true"
              className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#2A2319] via-[#D4AF37]/85 to-[#2A2319]" />
              <div className="h-2.5 w-24 rounded-b-full bg-[#F4D68A]/70 blur-[7px]" />
            </div>

            {/* Warm golden floor reflection pool */}
            <div
              aria-hidden="true"
              className="spotlight-floor-pool pointer-events-none fixed inset-x-0 bottom-0 h-56"
            />

            {/* Main Directional Split Stage */}
            <div className="relative z-10 m-auto w-full max-w-[1160px] py-2">
              <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-10">
                {/* Selected Cover: Slides Left when col is 0 or 1, Slides Right when col is 2 or 3 */}
                <div
                  data-testid="spotlight-cover-slot"
                  className={`flex flex-col items-center ${
                    slideDirection === 'left'
                      ? 'lg:col-span-4 lg:order-1'
                      : 'lg:col-span-4 lg:order-2'
                  }`}
                >
                  <div className="relative w-full max-w-[185px] sm:max-w-[235px] lg:max-w-[300px]">
                    {/* Local accent halo directly behind spotlighted cover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[#D4AF37]/12 blur-2xl"
                    />
                    <PoemCoverCard
                      poem={activePoem}
                      layoutId={`poem-cover-${activePoem.id}`}
                      isActiveStage
                    />
                  </div>
                  <p className="mt-3 hidden font-ui text-[11px] tracking-[0.14em] text-[#B8923A]/85 lg:block">
                    {slideDirection === 'left'
                      ? 'Bìa tác phẩm · Cánh trái'
                      : 'Bìa tác phẩm · Cánh phải'}
                  </p>
                </div>

                {/* Ivory Reading Folio: Opens opposite the slid cover */}
                <div
                  data-testid="spotlight-folio-slot"
                  className={
                    slideDirection === 'left'
                      ? 'lg:col-span-8 lg:order-2'
                      : 'lg:col-span-8 lg:order-1'
                  }
                >
                  <ReadingFolio
                    poem={activePoem}
                    fontSize={fontSize}
                    onChangeFontSize={setFontSize}
                    onClose={handleCloseWithSound}
                    slideDirection={slideDirection}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
