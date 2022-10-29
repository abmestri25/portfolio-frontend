import React from "react";
import { useSelector } from "react-redux";

const Intro = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const {
    welcomeText,
    firstName,
    middleName,
    lastName,
    caption,
    description,
    image,
  } = intro;
  return (
    <div
      id="intro"
      className="h-screen flex flex-col-reverse justify-center items-center lg:flex-row lg:px-40 "
    >
      <div className="p-5 md:p-16 flex flex-col space-y-3 md:space-y-5 ">
        <h1 className="text-white text-2xl md:text-4xl">{welcomeText}</h1>
        <h1 className=" text-[#3b82f6] font-semibold text-3xl md:text-6xl">
          <span className="text-secondary">{firstName}</span>{" "}
          <span className="text-white">{middleName}</span>{" "}
          <span className="text-tertiary">{lastName}</span>
        </h1>
        <h1 className=" text-white text-2xl md:text-5xl">{caption}</h1>
        <p className="text-tertiary text-md md:text-xl ">{description}</p>
        <button className=" border-2 border-tertiary p-2 text-white w-1/2  md:text-xl md:p-4 lg:w-1/3 ">
          My Resume
        </button>
      </div>

      <img className=" w-1/2 md:w-2/4 lg:w-1/3" src={image} alt="" />
    </div>
  );
};

export default Intro;
