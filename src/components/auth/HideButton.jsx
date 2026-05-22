import eyeIcon from "../../assets/eye-icon.png";

const HideButton = () => {
  return (
    <>
      <button
        type="button"
        className="absolute right-4 top-[43%] -translate-y-1/2"
      >
        <img src={eyeIcon} alt="Tampilkan kata sandi" className="h-5 w-5" />
      </button>
    </>
  );
};

export default HideButton;
