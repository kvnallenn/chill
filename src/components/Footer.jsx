import Logo from "../assets/logo.png";

const Footer = () => {
  const genres = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller",
  ];

  const helpLinks = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

  return (
    <footer className="border-t border-[#2f3337] bg-[#181a1c] px-5 py-8 text-white sm:px-8 md:px-10 lg:px-12 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 md:flex-row md:items-center md:justify-between lg:gap-16">
        <div className="shrink-0">
          <img
            src={Logo}
            alt="Logo Chill"
            className="h-auto w-[96px] sm:w-[116px] md:w-[128px]"
          />
          <p className="mt-4 text-[12px] text-[#C1C2C4] sm:text-[14px]">
            @2023 Chill All Rights Reserved.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-[1fr_auto] md:max-w-[720px] lg:max-w-[780px]">
          <div>
            <h2 className="text-[14px] font-bold sm:text-[16px]">Genre</h2>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] text-[#C1C2C4] sm:grid-cols-3 sm:text-[14px] md:grid-cols-4 md:gap-x-9">
              {genres.map((genre) => (
                <a href="#" key={genre} className="leading-snug">
                  {genre}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[14px] font-bold sm:text-[16px]">Bantuan</h2>
            <div className="mt-3 flex flex-col gap-3 text-[12px] text-[#C1C2C4] sm:text-[14px]">
              {helpLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
