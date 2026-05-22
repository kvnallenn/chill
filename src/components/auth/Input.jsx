const Input = (props) => {
  return (
    <input
      type={props.type}
      className="mb-4 mt-2 h-11 w-full rounded-[24px] border-1 border-[#505057] px-4 text-[14px] text-white placeholder:text-[#C1C2C4] focus:text-white sm:h-13 sm:text-[16px]"
      placeholder={props.placeholder}
      name={props.name}
    />
  );
};

export default Input;
