const ButtonPrimary = (props) => {
  return (
    <button className="h-11 w-full rounded-[24px] bg-[#E7E3FC3B] text-[14px] font-[600] sm:h-13 sm:text-[16px]">
      {props.text}
    </button>
  );
};

export default ButtonPrimary;
