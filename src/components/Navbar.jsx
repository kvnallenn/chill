import Logo from "../assets/logo.png";

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
    <>
      <div className="bg-[#181a1c] px-[80px] py-[25px] flex items-center gap-[50px] text-white">
        <div>
          <img src={Logo} alt="Logo Chill" />
        </div>
        {dataLink.map((item, index) => {
          return (
            <div key={index}>
              <a href="#">{item.title}</a>
            </div>
          );
        })}
        <div className="ms-auto">hehe</div>
      </div>
    </>
  );
};

export default Navbar;
