import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center space-x-2 py-5 md:px-10 lg:px-10 lg:space-x-10 lg:py-10">
      <div className=" text-white text-3xl w-full md:text-4xl lg:text-5xl">{title}</div>
      <div
        className={`${
          title === "Experiences" ? "w-full" : "w-full"
        }  bg-tertiary h-[1px] md:h-[2px] lg:h-[2px]`}
      ></div>
    </div>
  );
};

export default SectionTitle;
