import Logo from "../assets/logo.png";
import VectorLogo from "../assets/Vector.png";
import profileImage from "../assets/Ellipse 395.png";

const Navbar = () => {
  const dataLink = [
    {
      title: "Series",
    },
    {
      title: "Film",
    },
    {
      title: "Daftar Saya",
    },
  ];

  return (
    <nav className="flex items-center gap-5 bg-[#181a1c] px-4 py-4 text-white sm:gap-5 sm:px-6 md:gap-8 md:px-10 lg:gap-[50px] lg:px-[80px] lg:py-[25px]">
      <a href="#" aria-label="Chill" className="shrink-0">
        <img
          src={VectorLogo}
          alt="Logo Chill"
          className="h-auto w-[20px] sm:w-[24px] md:w-[28px] lg:hidden"
        />
        <img
          src={Logo}
          alt="Logo Chill"
          className="hidden h-auto lg:block lg:w-auto"
        />
      </a>

      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5 md:gap-8 lg:gap-[50px]">
        {dataLink.map((item, index) => {
          return (
            <a
              href="#"
              key={index}
              className="whitespace-nowrap text-[10px] font-[500] text-white sm:text-[12px] md:text-[16px] lg:text-[18px]"
            >
              {item.title}
            </a>
          );
        })}
      </div>

      <div className="group relative ms-auto shrink-0">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full outline-none sm:gap-3 md:gap-4"
          aria-label="Menu profil"
        >
          <img
            src={profileImage}
            alt="Profil saya"
            className="h-[20px] w-[20px] rounded-full sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="invisible absolute right-0 top-[calc(100%+16px)] z-20 w-[220px] rounded-b-sm bg-[#181a1c] py-4 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 sm:w-[260px] sm:py-5">
          <a
            href="#"
            className="flex items-center gap-4 px-5 py-2 text-[16px] font-[500] text-[#3254FF] sm:gap-5 sm:px-6 sm:text-[22px]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 shrink-0 sm:h-8 sm:w-8"
              fill="currentColor"
            >
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-9 9a9 9 0 0 1 18 0v1H3v-1Z" />
            </svg>
            Profil Saya
          </a>
          <a
            href="#"
            className="flex items-center gap-4 px-5 py-2 text-[16px] font-[500] text-white sm:gap-5 sm:px-6 sm:text-[22px]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 shrink-0 sm:h-8 sm:w-8"
              fill="currentColor"
            >
              <path d="m12 2.5 2.8 6 6.5.8-4.8 4.5 1.2 6.4L12 17l-5.7 3.2 1.2-6.4-4.8-4.5 6.5-.8L12 2.5Z" />
            </svg>
            Ubah Premium
          </a>
          <a
            href="#"
            className="flex items-center gap-4 px-5 py-2 text-[16px] font-[500] text-white sm:gap-5 sm:px-6 sm:text-[22px]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 shrink-0 sm:h-8 sm:w-8"
              fill="none"
            >
              <path
                d="M14 7V5H4v14h10v-2M10 12h10m0 0-4-4m4 4-4 4"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Keluar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
