const AuthHeader = (props) => {
  return (
    <div className="mt-6 text-center sm:mt-8 md:mt-10">
      <h1 className="font-['Lato'] text-[26px] font-bold text-white sm:text-[30px] md:text-[32px]">
        {props.title}
      </h1>
      <p className="font-['Lato'] text-[14px] font-[400] text-white sm:text-[16px]">
        {props.subtitle}
      </p>
    </div>
  );
};

export default AuthHeader;
