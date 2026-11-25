import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { VU_CAO_POEMS, PoemWork } from './data/poems';
import { ExhibitionStage } from './components/ExhibitionStage';
import { DustParticlesOverlay } from './components/DustParticlesOverlay';
import { ScrollReveal } from './components/ScrollReveal';
import { useLenisScroll } from './hooks/useLenisScroll';

const HERO_PLATE_SRC =
  '/src/assets/images/vietnam_poetry_exhibition_hero_1795590147240.jpg';

export default function App() {
  const [activePoem, setActivePoem] = useState<PoemWork | null>(null);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  useLenisScroll(activePoem !== null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0B0A09] text-[#F5EFE4]">
        {/* Subtle global ambient dust overlay across the entire exhibition */}
        <DustParticlesOverlay variant="ambient" testId="global-dust-overlay" />

        {/* Top Navigation Bar (without Đọc Núi Đôi button) */}
        <header className="sticky top-0 z-30 border-b border-[#B8923A]/20 bg-[#0B0A09]/92 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-8 px-5 py-4 sm:px-8">
            <a
              href="#gioi-thieu"
              className="font-display text-2xl font-semibold tracking-[0.12em] text-[#F5EFE4] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              VŨ CAO
            </a>

            <nav
              aria-label="Điều hướng triển lãm"
              className="flex items-center gap-5 sm:gap-7 font-ui text-xs tracking-[0.12em] text-[#C9BA9E]"
            >
              <a
                href="#gioi-thieu"
                className="transition-colors hover:text-[#F5EFE4] whitespace-nowrap shrink-0"
              >
                Triển lãm
              </a>
              <a
                href="#tu-trung-bay"
                className="transition-colors hover:text-[#F5EFE4] whitespace-nowrap shrink-0"
              >
                Tủ tác phẩm
              </a>
              <a
                href="#tac-gia"
                className="transition-colors hover:text-[#F5EFE4] whitespace-nowrap shrink-0"
              >
                Tiểu sử
              </a>
            </nav>
          </div>
        </header>

        <main>
          {/* Contemporary Vietnamese Exhibition Hero */}
          <section
            id="gioi-thieu"
            className="border-b border-[#B8923A]/20 bg-[radial-gradient(ellipse_75%_65%_at_70%_20%,rgba(184,146,58,0.08),transparent_70%)]"
          >
            <ScrollReveal immediate>
              <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-stretch gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-16">
              <div className="flex flex-col justify-center lg:col-span-6">
                <p className="font-ui text-xs tracking-[0.18em] text-[#B8923A]">
                  Không Gian Trưng Bày · 1922 — 2007
                </p>

                <h1
                  className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#F5EFE4] sm:text-5xl lg:text-[3.4rem]"
                  style={{ textWrap: 'balance' }}
                >
                  Tuyển Tập Thơ Vũ Cao
                </h1>

                <p className="mt-5 max-w-xl font-poem text-base leading-[1.8] text-[#D7CCB8] sm:text-lg">
                  Chín bài thơ tuyển chọn được lưu giữ trang trọng trong tủ kính nhung đen và ánh đồng cổ — nơi ký ức chiến khu, tình quê hương và giọng thơ mộc mạc sâu lắng cất lời dưới ánh đèn rọi.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-6 font-ui text-xs text-[#B8923A]">
                  <a
                    href="#tu-trung-bay"
                    className="inline-flex min-h-[44px] items-center rounded-md border border-[#D4AF37]/80 bg-[#D4AF37] px-6 py-2.5 font-semibold tracking-[0.08em] text-[#0B0A09] transition-colors hover:bg-[#E6C86E] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFE4]"
                  >
                    Khám phá 9 tác phẩm
                  </a>
                </div>
              </div>

              {/* Vietnamese Heritage Exhibition Plate with subtle lit dust motes */}
              <div className="lg:col-span-6">
                <div className="relative h-full min-h-[260px] overflow-hidden border border-[#B8923A]/35 bg-[#141210] p-2.5">
                  {!heroImgFailed ? (
                    <div className="relative h-full w-full overflow-hidden">
                      <img
                        src={HERO_PLATE_SRC}
                        alt="Không gian trưng bày tập thơ Việt Nam hiện đại dưới ánh đèn bảo tàng"
                        referrerPolicy="no-referrer"
                        onError={() => setHeroImgFailed(true)}
                        className="h-full w-full object-cover lg:min-h-[340px]"
                      />
                      <DustParticlesOverlay
                        variant="subtle"
                        testId="hero-dust-overlay"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0A09]/72 via-transparent to-[#0B0A09]/20"
                      />
                      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between font-poem text-xs italic text-[#EAE0CC]/90">
                        <span>Không gian trưng bày thơ Vũ Cao</span>
                        <span className="tabular-nums">Tủ I — IX</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[300px] flex-col items-center justify-center bg-gradient-to-br from-[#191613] to-[#0B0A09] p-8 text-center">
                      <p className="font-display text-2xl italic text-[#D4AF37]">
                        Tuyển Tập Thơ Vũ Cao
                      </p>
                      <p className="mt-2 font-poem text-sm text-[#C9BA9E]">
                        Chín tác phẩm tiêu biểu tuyển chọn
                      </p>
                    </div>
                  )}
                </div>
              </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Main 4-Column Vitrine Grid + Spotlight Stage */}
          <ExhibitionStage
            poems={VU_CAO_POEMS}
            activePoem={activePoem}
            onSelectPoem={setActivePoem}
            onClosePoem={() => setActivePoem(null)}
          />

          {/* Curatorial Biography Section */}
          <section
            id="tac-gia"
            className="border-t border-[#B8923A]/20 bg-[#100E0C]"
          >
            <ScrollReveal>
              <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:py-16">
                <div className="lg:col-span-4">
                  <p className="font-ui text-xs tracking-[0.16em] text-[#B8923A]">
                    Thông Tin Tác Giả
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-semibold text-[#F5EFE4]">
                    Nhà thơ Vũ Cao
                  </h2>
                  <p className="mt-2 font-poem text-sm italic text-[#C9BA9E]/85 tabular-nums">
                    Vũ Hữu Chỉnh · 1922 — 2007
                  </p>
                </div>

                <div className="space-y-4 font-poem text-base leading-[1.85] text-[#D7CCB8] lg:col-span-8">
                  <p>
                    Vũ Cao tên thật là Vũ Hữu Chỉnh, sinh năm 1922 tại xã Liên Minh, huyện Vụ Bản, tỉnh Nam Định. Trưởng thành trong những năm tháng kháng chiến trường kỳ, ông từng là phóng viên, biên tập viên rồi giữ cương vị Tổng biên tập tạp chí Văn nghệ Quân đội.
                  </p>
                  <p>
                    Giọng thơ Vũ Cao dung dị mà sâu thẳm, hòa quyện tình cảm riêng tư thủy chung với tình yêu đất nước qua hai cuộc kháng chiến. Những bài thơ như <em>Núi Đôi</em>, <em>Đèo Trúc</em>, <em>Ngày xưa</em> hay <em>Ngang dốc núi</em> đã để lại dấu ấn bền lâu trong thơ ca Việt Nam hiện đại và mang về cho ông Giải thưởng Nhà nước về Văn học Nghệ thuật năm 2001.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        {/* Quiet Archival Footer */}
        <footer
          id="luu-tru"
          className="border-t border-[#B8923A]/20 bg-[#0B0A09] px-5 py-8 sm:px-8"
        >
          <ScrollReveal>
            <div className="mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="font-display text-base tracking-[0.06em] text-[#EAE0CC]">
                Vũ Cao · Không Gian Trưng Bày Thơ
              </p>
              <p className="font-ui text-xs text-[#9E907B]">
                Lưu giữ 9 tác phẩm tiêu biểu · Ấn bản đọc trực tuyến
              </p>
            </div>
            <p className="mx-auto mt-5 max-w-[1220px] text-center font-ui text-[11px] tracking-[0.08em] text-[#7D715E]">
              Made by Minh
            </p>
          </ScrollReveal>
        </footer>
      </div>
    </MotionConfig>
  );
}
