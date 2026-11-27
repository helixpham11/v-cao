import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { VU_CAO_POEMS, PoemWork } from './data/poems';
import { ExhibitionStage } from './components/ExhibitionStage';
import { DustParticlesOverlay } from './components/DustParticlesOverlay';
import { ScrollReveal } from './components/ScrollReveal';
import { useLenisScroll } from './hooks/useLenisScroll';

const HERO_PLATE_SRC =
  '/src/assets/images/vietnam_poetry_exhibition_hero_1795590147240.jpg';

const BIOGRAPHY_SECTIONS = [
  {
    heading: 'Con người & xuất thân',
    body: 'Tên thật là Vũ Hữu Chỉnh (1922–2007), quê gốc Liên Minh, Vụ Bản, Nam Định, sinh trong gia đình nho học giàu truyền thống văn chương và là anh ruột của các nhà văn Vũ Tú Nam, Vũ Ngọc Bình.',
  },
  {
    heading: 'Hành trình người cầm bút gắn với chiến trường & báo chí văn nghệ',
    body: 'Nhập ngũ năm 1946, làm báo Chiến sĩ ở Liên khu IV, phóng viên Vệ quốc quân, Quân đội nhân dân, sau đó gắn bó lâu dài với Tạp chí Văn nghệ Quân đội (từ biên tập viên đến Chủ nhiệm/Tổng Biên tập với quân hàm Đại tá), rồi làm Giám đốc Nhà xuất bản Hà Nội, Phó Chủ tịch Hội Văn học nghệ thuật Hà Nội và Chủ tịch Hội đồng thơ Hội Nhà văn Việt Nam.',
  },
  {
    heading: 'Dấu ấn “Núi Đôi” & sự hòa quyện giữa riêng – chung',
    body: 'Nổi tiếng bậc nhất với bài thơ Núi Đôi (1955) lấy cảm hứng từ câu chuyện có thật đầy xúc động và bi tráng về nữ du kích Trần Thị Bắc và người đồng đội/người yêu; mất mát, chia ly trong thơ ông không bi lụy mà lắng đọng, thiết tha, nâng tình yêu đôi lứa hòa vào tình yêu quê hương, đất nước.',
  },
  {
    heading: 'Giọng điệu & phong cách nghệ thuật',
    body: 'Giản dị, chân thành, mộc mạc mà sâu sắc; đi từ hiện thực đời sống và những trang phóng sự/ký sự chiến trường giàu hơi thở thực tế tới chất trữ tình đằm thắm.',
  },
  {
    heading: 'Mảng văn xuôi song hành',
    body: 'Ngoài thơ (như Núi Đôi, Sớm nay, Đèo trúc), ông còn viết truyện ngắn, tiểu thuyết và bút ký chiến tranh như Truyện một người bị bắt, Những người cùng làng, Em bé bên bờ sông Lai Vu, Anh em anh chàng Lược, Từ một trận địa — góp phần khắc họa trọn vẹn chân dung một nhà văn chiến sĩ.',
  },
  {
    heading: 'Ghi nhận',
    body: 'Được tặng Giải thưởng Nhà nước về Văn học nghệ thuật năm 2001.',
  },
];

export default function App() {
  const [activePoem, setActivePoem] = useState<PoemWork | null>(null);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  useLenisScroll(activePoem !== null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="museum-gradient-canvas relative min-h-screen text-[#F7F2E8]">
        {/* Subtle global ambient dust overlay across the entire exhibition */}
        <DustParticlesOverlay variant="ambient" testId="global-dust-overlay" />

        {/* Top Navigation Bar (without Triển lãm button) */}
        <header className="sticky top-0 z-30 border-b border-[#D4AF37]/20 bg-[#2E2B29]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-8 px-5 py-4 sm:px-8">
            <a
              href="#tac-gia"
              className="font-display text-2xl font-semibold tracking-[0.12em] text-[#F7F2E8] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              VŨ CAO
            </a>

            <nav
              aria-label="Điều hướng triển lãm"
              className="flex items-center gap-6 sm:gap-8 font-ui text-xs tracking-[0.12em] text-[#DDD2BE]"
            >
              <a
                href="#tac-gia"
                className="transition-colors hover:text-[#F7F2E8] whitespace-nowrap shrink-0"
              >
                Tiểu sử
              </a>
              <a
                href="#tu-trung-bay"
                className="transition-colors hover:text-[#F7F2E8] whitespace-nowrap shrink-0"
              >
                Tủ tác phẩm
              </a>
            </nav>
          </div>
        </header>

        <main>
          {/* TOP: Curatorial Biography Section */}
          <section
            id="tac-gia"
            aria-labelledby="biography-heading"
            className="border-b border-[#D4AF37]/18"
          >
            <ScrollReveal immediate>
              <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="lg:col-span-4">
                  <p className="font-ui text-xs tracking-[0.18em] text-[#E2C15A]">
                    Tiểu Sử · 1922 — 2007
                  </p>
                  <h1
                    id="biography-heading"
                    className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-[#F7F2E8] sm:text-5xl"
                    style={{ textWrap: 'balance' }}
                  >
                    Nhà thơ Vũ Cao
                  </h1>
                  <p className="mt-2.5 font-poem text-base italic text-[#DDD2BE] tabular-nums">
                    Vũ Hữu Chỉnh · Nhà văn chiến sĩ
                  </p>
                  <div className="mt-6 border-t border-[#D4AF37]/20 pt-5 space-y-2 font-poem text-sm leading-relaxed text-[#D8CDB9]">
                    <p>Quê quán: Liên Minh, Vụ Bản, Nam Định</p>
                    <p>Quân hàm Đại tá · Tổng Biên tập Văn nghệ Quân đội</p>
                    <p className="text-[#E6C86E]">
                      Giải thưởng Nhà nước về Văn học nghệ thuật (2001)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:gap-x-10 lg:gap-y-7">
                  {BIOGRAPHY_SECTIONS.map((item) => (
                    <div
                      key={item.heading}
                      className="border-t border-[#D4AF37]/20 pt-4"
                    >
                      <h2 className="font-display text-xl font-semibold leading-snug text-[#F4D986]">
                        {item.heading}
                      </h2>
                      <p className="mt-2 font-poem text-[15px] leading-[1.78] text-[#EAE1D0]">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* MIDDLE: Contemporary Vietnamese Exhibition Showcase */}
          <section
            id="gioi-thieu"
            aria-labelledby="exhibition-heading"
            className="border-b border-[#D4AF37]/18 bg-[radial-gradient(ellipse_78%_70%_at_72%_45%,rgba(244,214,138,0.11),transparent_72%)]"
          >
            <ScrollReveal>
              <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-stretch gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="flex flex-col justify-center lg:col-span-6">
                  <p className="font-ui text-xs tracking-[0.18em] text-[#E2C15A]">
                    Không Gian Trưng Bày · 1922 — 2007
                  </p>

                  <h2
                    id="exhibition-heading"
                    className="mt-4 font-display text-3xl font-semibold leading-[1.14] tracking-tight text-[#F7F2E8] sm:text-4xl lg:text-[2.9rem]"
                    style={{ textWrap: 'balance' }}
                  >
                    Tuyển tập 9 bài thơ tiêu biểu của Vũ Cao
                  </h2>

                  <p className="mt-5 max-w-xl font-poem text-base leading-[1.8] text-[#E4DAC8] sm:text-lg">
                    Chín bài thơ tuyển chọn được lưu giữ trang trọng trong tủ kính nhung và ánh đồng cổ — nơi ký ức chiến khu, tình quê hương và giọng thơ mộc mạc sâu lắng cất lời dưới ánh đèn rọi.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-6 font-ui text-xs">
                    <a
                      href="#tu-trung-bay"
                      className="inline-flex min-h-[44px] items-center rounded-md border border-[#E6C86E]/85 bg-[#D4AF37] px-6 py-2.5 font-semibold tracking-[0.08em] text-[#141210] transition-colors hover:bg-[#E6C86E] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F2E8]"
                    >
                      Khám phá 9 tác phẩm
                    </a>
                  </div>
                </div>

                {/* Brighter lit Vietnamese Heritage Exhibition Plate (without Tủ I — IX) */}
                <div className="lg:col-span-6">
                  <div className="relative h-full min-h-[260px] overflow-hidden border border-[#D4AF37]/40 bg-[#262320] p-2.5 shadow-[0_24px_60px_-20px_rgba(212,175,55,0.2)]">
                    {!heroImgFailed ? (
                      <div className="relative h-full w-full overflow-hidden">
                        <img
                          src={HERO_PLATE_SRC}
                          alt="Không gian trưng bày tập thơ Việt Nam hiện đại dưới ánh đèn bảo tàng"
                          referrerPolicy="no-referrer"
                          onError={() => setHeroImgFailed(true)}
                          className="h-full w-full object-cover brightness-[1.16] contrast-[1.03] saturate-[1.06] lg:min-h-[340px]"
                        />
                        {/* Brighter warm overhead exhibition lamp glow */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_62%_at_50%_10%,rgba(255,236,184,0.24),rgba(212,175,55,0.09)_46%,transparent_78%)]"
                        />
                        <DustParticlesOverlay
                          variant="subtle"
                          testId="hero-dust-overlay"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#191714]/55 via-transparent to-transparent"
                        />
                        <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-start font-poem text-xs italic text-[#F5EFE4]/95">
                          <span>Không gian trưng bày thơ Vũ Cao</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full min-h-[300px] flex-col items-center justify-center bg-gradient-to-br from-[#2B2824] to-[#1D1B18] p-8 text-center">
                        <p className="font-display text-2xl italic text-[#E6C86E]">
                          Tuyển tập 9 bài thơ tiêu biểu của Vũ Cao
                        </p>
                        <p className="mt-2 font-poem text-sm text-[#DDD2BE]">
                          Chín tác phẩm tiêu biểu tuyển chọn
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* BOTTOM: 4-Column Vitrine Grid + Spotlight Stage */}
          <ExhibitionStage
            poems={VU_CAO_POEMS}
            activePoem={activePoem}
            onSelectPoem={setActivePoem}
            onClosePoem={() => setActivePoem(null)}
          />
        </main>

        {/* Quiet Archival Footer seamlessly resting on the bottom of the vertical gradient */}
        <footer
          id="luu-tru"
          className="border-t border-[#D4AF37]/18 px-5 py-8 sm:px-8"
        >
          <ScrollReveal>
            <div className="mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="font-display text-base tracking-[0.06em] text-[#EAE0CC]">
                Vũ Cao · Không Gian Trưng Bày Thơ
              </p>
              <p className="font-ui text-xs text-[#B5A994]">
                Lưu giữ 9 tác phẩm tiêu biểu · Ấn bản đọc trực tuyến
              </p>
            </div>
            <p className="mx-auto mt-5 max-w-[1220px] text-center font-ui text-[11px] tracking-[0.08em] text-[#968A76]">
              Made by Minh
            </p>
          </ScrollReveal>
        </footer>
      </div>
    </MotionConfig>
  );
}
