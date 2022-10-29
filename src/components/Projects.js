import React, { useState } from "react";
import SectionTitle from "./SectionTitle.js";
import { useSelector } from "react-redux";

const Project = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <div id="projects" className="h-screen p-5 lg:px-40 snap-center">
      <SectionTitle title="Projects" />
      <div className="flex flex-col items-center h-[80vh] justify-center space-y-10 md:px-10 lg:flex-row">
        <div className="flex flex-row items-center w-full space-x-5 lg:space-x-0 lg:flex-col lg:items-start lg:overflow-hidden lg:border-l-2 lg:border-tertiary  ">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              key={project._id}
              className="cursor-pointer "
            >
              <h2
                className={`p-2 lg:py-5 lg:px-10 lg:text-xl md:text-2xl  ${
                  selectedItemIndex === index
                    ? "text-tertiary font-semibold bg-[#072a24] border-t-2 lg:border-l-4 lg:border-t-0 border-tertiary text-center "
                    : " text-white"
                }`}
              >
                Project {index + 1}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-3 lg:space-y-5">
          <h1 className="text-white font-semibold text-3xl md:text-5xl lg:text-4xl">
            {projects[selectedItemIndex].title}
          </h1>
          <img
            className="lg:w-1/2 border-2 border-tertiary"
            src={projects[selectedItemIndex].image}
            alt={projects[selectedItemIndex].title}
          />
          <div className="flex flex-wrap space-x-2">
            {projects[selectedItemIndex].techStack.map((technology) => (
              <img src={technology} className="w-10" alt="" />
            ))}
          </div>

          <p className="text-tertiary text-md md:text-xl lg:text-lg ">
            {projects[selectedItemIndex].description}
          </p>

          <button className="py-3 px-5 border-2 border-tertiary text-white w-1/4">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
