import bgLogin from "../assets/bg-login.jpg";
import Logo from "../assets/logo.png";
import eyeIcon from "../assets/eye-icon.png";
import googleIcon from "../assets/29911481.png";

const FormLogin = () => {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen p-40"
        style={{ backgroundImage: `url(${bgLogin})` }}
      >
        <div className="bg-[#181A1CD6] w-full max-w-[529px] min-h-[663px] mx-auto px-10 py-10">
          <div className="justify-items-center">
            <img src={Logo} width={163} height={44} alt="Login Background" />
          </div>
          <div className="justify-items-center mt-10">
            <h1 className="font-['Lato'] font-bold text-[#FFFFFF] text-[32px] ">
              Masuk
            </h1>
            <h1 className="font-['Lato'] font-[400] text-[#FFFFFF] text-[16px] ">
              Selamat datang kembali!
            </h1>
          </div>
          <div className="mt-8">
            <label
              htmlFor="username"
              className="text-white font-[500] text-[18px]"
            >
              Username
            </label>
            <input
              type="text"
              className="w-full h-13 border-1 border-[#505057] rounded-[24px] mt-2 mb-4 px-4 placeholder:text-[#C1C2C4] focus:text-white text-white"
              placeholder="Masukkan username"
              name="username"
            />
            <label
              htmlFor="password"
              className="text-white font-[500] text-[18px]"
            >
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full h-13 border-1 border-[#505057] rounded-[24px] mt-2 mb-4 px-4 placeholder:text-[#C1C2C4] focus:text-white text-white"
                placeholder="Masukkan password"
                name="password"
              />
              <button
                type="button"
                className="absolute right-4 top-[45%] -translate-y-1/2"
              >
                <img src={eyeIcon} />
              </button>
            </div>
            <div className="flex justify-between text-[16px] text-[#C1C2C4]">
              <span>
                Belum punya akun?{" "}
                <span className="text-white font-bold">Daftar</span>
              </span>
              <span className="text-white">Lupa kata sandi?</span>
            </div>
            <div className="flex flex-col text-white text-center mt-10 gap-1">
              <button className="w-full h-13 bg-[#E7E3FC3B] rounded-[24px] font-[600] text-[16px]">
                Masuk
              </button>
              <span className="text-[14px] text-[#9D9EA1]">Atau</span>
              <button className="w-full h-13 rounded-[24px] font-[600] text-[16px] border-1 border-[#44454c] flex items-center justify-center gap-4">
                <img src={googleIcon} alt="Google Icon" width={18} height={18} /> Masuk dengan Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
