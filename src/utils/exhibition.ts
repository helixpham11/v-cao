export type SlideDirection = 'left' | 'right';
export type FontSizeKey = 'sm' | 'md' | 'lg';

export interface PoemGridPosition {
  row: number;
  column: number;
  slideDirection: SlideDirection;
}

export interface FontSizeOption {
  key: FontSizeKey;
  label: string;
  shortLabel: string;
  poemTextClass: string;
  lineSpacingClass: string;
}

export const FONT_SIZE_OPTIONS: Record<FontSizeKey, FontSizeOption> = {
  sm: {
    key: 'sm',
    label: 'Nhỏ',
    shortLabel: 'A-',
    poemTextClass: 'text-[16px] sm:text-[17px]',
    lineSpacingClass: 'leading-[1.8]',
  },
  md: {
    key: 'md',
    label: 'Vừa',
    shortLabel: 'A',
    poemTextClass: 'text-[18px] sm:text-[20px]',
    lineSpacingClass: 'leading-[1.85]',
  },
  lg: {
    key: 'lg',
    label: 'Lớn',
    shortLabel: 'A+',
    poemTextClass: 'text-[21px] sm:text-[23px]',
    lineSpacingClass: 'leading-[1.9]',
  },
};

export const FONT_SIZE_ORDER: FontSizeKey[] = ['sm', 'md', 'lg'];

/**
 * Determines the row/column coordinates and slide direction when selecting a poem.
 * In a 4-column desktop row (indices 0, 1, 2, 3):
 * - Columns 0 & 1 (two left slots): cover slides left, reading sheet opens on the right.
 * - Columns 2 & 3 (two right slots): cover slides right, reading sheet opens on the left.
 */
export function getPoemGridPosition(
  index: number,
  columns: 1 | 2 | 4 = 4
): PoemGridPosition {
  const safeIndex = Math.max(0, Math.floor(index));
  const row = Math.floor(safeIndex / columns);
  const column = safeIndex % columns;

  if (columns === 4) {
    return {
      row,
      column,
      slideDirection: column <= 1 ? 'left' : 'right',
    };
  }

  if (columns === 2) {
    return {
      row,
      column,
      slideDirection: column === 0 ? 'left' : 'right',
    };
  }

  return {
    row,
    column: 0,
    slideDirection: 'left',
  };
}

export function getViewportColumns(width: number): 1 | 2 | 4 {
  if (width >= 1024) {
    return 4;
  }
  if (width >= 640) {
    return 2;
  }
  return 1;
}
