import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FONT_SIZE_OPTIONS,
  FONT_SIZE_ORDER,
  getPoemGridPosition,
  getViewportColumns,
} from './exhibition';
import { VU_CAO_POEMS } from '../data/poems';

test('4-column row placement assigns left slide to positions 0 & 1 and right slide to positions 2 & 3', () => {
  // Row 1: Buổi sớm (0), Chuyện dân gian (1), Đèo Trúc (2), Ngang dốc núi (3)
  assert.deepEqual(getPoemGridPosition(0, 4), {
    row: 0,
    column: 0,
    slideDirection: 'left',
  });
  assert.deepEqual(getPoemGridPosition(1, 4), {
    row: 0,
    column: 1,
    slideDirection: 'left',
  });
  assert.deepEqual(getPoemGridPosition(2, 4), {
    row: 0,
    column: 2,
    slideDirection: 'right',
  });
  assert.deepEqual(getPoemGridPosition(3, 4), {
    row: 0,
    column: 3,
    slideDirection: 'right',
  });

  // Row 2: Ngày xưa (4), Người gác cầu (5), Núi Đôi (6), Thơ của Bác (7)
  assert.equal(getPoemGridPosition(4, 4).slideDirection, 'left');
  assert.equal(getPoemGridPosition(5, 4).slideDirection, 'left');
  assert.equal(getPoemGridPosition(6, 4).slideDirection, 'right');
  assert.equal(getPoemGridPosition(7, 4).slideDirection, 'right');

  // Row 3: Tiếng chuông (8) -> column 0 -> left
  assert.deepEqual(getPoemGridPosition(8, 4), {
    row: 2,
    column: 0,
    slideDirection: 'left',
  });
});

test('2-column tablet layout alternates left and right per row', () => {
  assert.equal(getPoemGridPosition(0, 2).slideDirection, 'left');
  assert.equal(getPoemGridPosition(1, 2).slideDirection, 'right');
  assert.equal(getPoemGridPosition(6, 2).slideDirection, 'left');
  assert.equal(getPoemGridPosition(7, 2).slideDirection, 'right');
});

test('viewport breakpoints map cleanly to 4, 2, or 1 columns', () => {
  assert.equal(getViewportColumns(1440), 4);
  assert.equal(getViewportColumns(1024), 4);
  assert.equal(getViewportColumns(768), 2);
  assert.equal(getViewportColumns(390), 1);
});

test('exhibition catalog contains all 9 required Vu Cao works in exact order', () => {
  assert.equal(VU_CAO_POEMS.length, 9);
  assert.deepEqual(
    VU_CAO_POEMS.map((p) => p.title),
    [
      'Ngày xưa',
      'Núi Đôi',
      'Buổi sớm',
      'Chuyện dân gian',
      'Đèo Trúc',
      'Ngang dốc núi',
      'Người gác cầu',
      'Thơ của Bác',
      'Tiếng chuông',
    ]
  );

  for (const [idx, poem] of VU_CAO_POEMS.entries()) {
    assert.equal(poem.index, idx);
    assert.ok(poem.stanzas.length > 0, `${poem.title} should have stanzas`);
    assert.ok(poem.romanNumeral.length > 0);
  }
});

test('font size options expose Nhỏ / Vừa / Lớn presets', () => {
  assert.deepEqual(FONT_SIZE_ORDER, ['sm', 'md', 'lg']);
  assert.equal(FONT_SIZE_OPTIONS.sm.label, 'Nhỏ');
  assert.equal(FONT_SIZE_OPTIONS.md.label, 'Vừa');
  assert.equal(FONT_SIZE_OPTIONS.lg.label, 'Lớn');
});

test('page-turn audio profiles provide realistic 3-stage parameters for open and close', async () => {
  const { getPageTurnProfile } = await import('./sound');
  const openProfile = getPageTurnProfile('open');
  const closeProfile = getPageTurnProfile('close');
  assert.ok(openProfile.durationSec > 0.3 && openProfile.durationSec <= 0.6);
  assert.ok(closeProfile.durationSec > 0.25 && closeProfile.durationSec <= 0.6);
  assert.ok(openProfile.sweepEndFreqHz > openProfile.sweepStartFreqHz);
  assert.ok(closeProfile.sweepEndFreqHz < closeProfile.sweepStartFreqHz);
  assert.ok(openProfile.settleTimeSec > openProfile.liftDurationSec);
  assert.ok(openProfile.peakGain >= 0.25 && openProfile.peakGain <= 0.45);
});

test('museum scroll easing is bounded [0, 1] and monotonically increasing', async () => {
  const { MUSEUM_SCROLL_CONFIG, museumScrollEasing } = await import('./scroll');
  assert.ok(MUSEUM_SCROLL_CONFIG.duration > 1);
  assert.equal(museumScrollEasing(0), 0);
  assert.equal(museumScrollEasing(1), 1);
  assert.ok(museumScrollEasing(0.25) < museumScrollEasing(0.5));
  assert.ok(museumScrollEasing(0.5) < museumScrollEasing(0.75));
});
