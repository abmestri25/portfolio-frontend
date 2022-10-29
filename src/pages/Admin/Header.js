import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-primary py-5 px-40">
      <div className="text-4xl text-secondary">
        A<span className="uppercase text-[25px]">bhishek</span>{" "}
      </div>
      <div className="text-4xl text-white">
        S<span className="uppercase text-[25px]">anjay</span>
      </div>
      <div className="text-4xl text-tertiary">
        M<span className="uppercase text-[25px]">estri</span>
      </div>
    </div>
  );
};

export default Header;
