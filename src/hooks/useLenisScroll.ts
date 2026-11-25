import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { MUSEUM_SCROLL_CONFIG, museumScrollEasing } from '../utils/scroll';

export function useLenisScroll(isOverlayOpen: boolean) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: MUSEUM_SCROLL_CONFIG.duration,
      easing: museumScrollEasing,
      smoothWheel: true,
      wheelMultiplier: MUSEUM_SCROLL_CONFIG.wheelMultiplier,
      touchMultiplier: MUSEUM_SCROLL_CONFIG.touchMultiplier,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    // Smooth museum-walk glide for in-page anchor navigation links
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const destination = document.querySelector(href) as HTMLElement | null;
      if (!destination) return;

      event.preventDefault();
      lenis.scrollTo(destination, {
        offset: MUSEUM_SCROLL_CONFIG.anchorOffsetPx,
        duration: MUSEUM_SCROLL_CONFIG.duration,
      });
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause background smooth scroll when the spotlight reading folio is open
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (isOverlayOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isOverlayOpen]);
}
