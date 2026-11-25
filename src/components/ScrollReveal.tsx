import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  immediate?: boolean;
  delay?: number;
  amount?: number | 'some' | 'all';
}

/**
 * Smooth museum-stroll fade-in / fade-out container when scrolling into and out of view.
 * Animates only GPU-composited properties (opacity, transform).
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  immediate = false,
  delay = 0,
  amount = 0.1,
}) => {
  return (
    <motion.div
      initial={immediate ? { opacity: 1, y: 0 } : { opacity: 0.08, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
