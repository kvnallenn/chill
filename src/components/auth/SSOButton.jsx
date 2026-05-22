import googleIcon from "../../assets/29911481.png";

const SSOButton = (props) => {
  return (
    <button className="flex h-11 w-full items-center justify-center gap-3 rounded-[24px] border-1 border-[#44454c] text-[14px] font-[600] sm:h-13 sm:gap-4 sm:text-[16px]">
      <img src={googleIcon} alt="Google Icon" className="h-[18px] w-[18px]" />
      <span>{props.text}</span>
    </button>
  );
};

export default SSOButton;
