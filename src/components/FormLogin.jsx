import bgLogin from "../assets/bg-login.jpg";
import Logo from "../assets/logo.png";
import AuthHeader from "./auth/AuthHeader";
import SSOButton from "./auth/SSOButton";
import ButtonPrimary from "./auth/ButtonPrimary";
import Input from "./auth/Input";
import HideButton from "./auth/HideButton";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <div
      className="min-h-dvh bg-cover bg-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 lg:px-16"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="flex min-h-[calc(100dvh-48px)] items-center justify-center sm:min-h-[calc(100dvh-64px)]">
        <div className="w-full max-w-[529px] bg-[#181A1CD6] px-5 py-7 sm:px-8 sm:py-9 md:px-10 md:py-10">
          <div className="flex justify-center">
            <img
              src={Logo}
              className="h-auto w-[116px] sm:w-[145px] md:w-[163px]"
              alt="Logo Chill"
            />
          </div>
          <AuthHeader title="Masuk" subtitle="Selamat datang kembali!" />
          <div className="mt-6 sm:mt-8">
            <label
              htmlFor="username"
              className="text-[16px] font-[500] text-white sm:text-[18px]"
            >
              Username
            </label>
            <Input
              type="text"
              placeholder="Masukkan username"
              name="username"
            />

            <label
              htmlFor="password"
              className="text-[16px] font-[500] text-white sm:text-[18px]"
            >
              Kata Sandi
            </label>
            <div className="relative">
              <Input
                type="password"
                placeholder="Masukkan password"
                name="password"
              />
              <HideButton />
            </div>
            <div className="text-[12px] flex gap-2 sm:text-[14px] text-[#C1C2C4] justify-between">
              <span>
                Belum punya akun?{" "}
                <span className="text-white font-bold"><Link to="/register">Daftar</Link></span>
              </span>
              <span className="text-white text-end">Lupa kata sandi?</span>
            </div>
            <div className="mt-8 flex flex-col gap-1 text-center text-white sm:mt-10">
              <ButtonPrimary text="Masuk" />
              <span className="text-[14px] text-[#9D9EA1]">Atau</span>
              <SSOButton text="Masuk dengan Google" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
