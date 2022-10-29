import React, { useState } from "react";
import SectionTitle from "./SectionTitle.js";
import { useSelector } from "react-redux";

const Experience = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div className="h-screen p-5 lg:px-40 ">
      <SectionTitle title="Experiences" />
      <div className="flex flex-col items-center h-[80vh] justify-center space-y-10 md:px-10 lg:flex-row">
        <div className="flex flex-row items-center w-full space-x-5 lg:space-x-0 lg:flex-col lg:items-start lg:overflow-hidden lg:border-l-2 lg:border-tertiary  ">
          {experiences.map((exp, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              key={index}
              className="cursor-pointer "
            >
              <h2
                className={`p-2 lg:py-5 lg:px-5 lg:text-xl md:text-2xl  ${
                  selectedItemIndex === index
                    ? "text-tertiary font-semibold bg-[#072a24] border-t-2 lg:border-l-4 lg:border-t-0 border-tertiary text-center "
                    : " text-white"
                }`}
              >
                {exp.period}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-3 lg:space-y-5">
          <div className="flex items-center">
            <img className="w-6 mr-2" src="/images/position.png" alt="" />

            <h1 className="text-secondary font-semibold text-3xl md:text-4xl lg:text-4xl m-0">
              {experiences[selectedItemIndex].title}
            </h1>
          </div>
          <div className="flex items-center">
            <img className="w-6 mr-2" src="/images/organization.png" alt="" />

            <h1 className="text-white text-2xl  md:text-3xl lg:text-3xl m-0 ">
              {experiences[selectedItemIndex].company}
            </h1>
          </div>
          <p className="text-tertiary text-md md:text-xl lg:text-lg ">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
