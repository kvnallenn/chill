import HeroBanner from "../assets/banner1.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-[360px] overflow-hidden bg-cover bg-center text-white sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px]"
      style={{ backgroundImage: `url(${HeroBanner})` }}
      aria-label="Duty After School"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#181A1C]/95 via-[#181A1C]/55 to-[#181A1C]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-[#181A1C]/35 to-transparent" />

      <div className="relative z-10 flex min-h-[360px] flex-col justify-end px-5 pb-8 pt-24 sm:min-h-[420px] sm:px-8 sm:pb-10 md:min-h-[500px] md:px-10 lg:min-h-[560px] lg:px-12 lg:pb-14">
        <div className="max-w-[620px]">
          <h1 className="text-[28px] font-bold leading-tight sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Duty After School
          </h1>
          <p className="mt-3 max-w-[560px] text-[12px] leading-relaxed text-white sm:text-[14px] md:text-[16px]">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">
            <button
              type="button"
              className="rounded-full bg-[#0F1E93] px-5 py-2 text-[12px] font-bold text-white sm:px-6 sm:text-[14px]"
            >
              Mulai
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-[#22282A]/90 px-4 py-2 text-[12px] font-bold text-white sm:px-5 sm:text-[14px]"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 10v6m0-9h.01"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              Selengkapnya
            </button>
            <span className="rounded-full border border-white/40 px-2.5 py-1.5 text-[12px] text-white sm:px-3 sm:text-[14px]">
              18+
            </span>
          </div>
        </div>

        <button
          type="button"
          aria-label="Matikan suara"
          className="absolute bottom-8 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white sm:bottom-10 sm:right-8 md:h-11 md:w-11 lg:bottom-14 lg:right-12"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
          >
            <path
              d="M4 9v6h4l5 4V5L8 9H4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="m18 9 3 3m0-3-3 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
