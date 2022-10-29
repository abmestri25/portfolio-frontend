import React from "react";
import SectionTitle from "./SectionTitle.js";
import { useSelector } from "react-redux";

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { description1, description2, skills, hero_img } = about;

  return (
    <div id="about" className="h-screen p-5 lg:px-40">
      <SectionTitle title="About" />
      <div className="flex flex-col items-center lg:flex-row lg:space-x-20 md:px-10 md:mt-20">
        <div className="lg:w-3/4 md:w-1/3 w-2/3 ">
          <img
            src={hero_img}
            alt=""
            className="p-2 border-2 rounded-full lg:w-3/4 lg:h-3/4 w-56 h-56  border-tertiary md:rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col space-y-3 mt-5 md:mt-10">
          <p className="text-center text-tertiary md:text-lg lg:text-left lg:text-lg">
            {description1}
          </p>
          <p className="text-center text-tertiary md:text-1xl lg:text-left lg:text-lg">
            {description2}
          </p>
        </div>
      </div>
      {/* skills */}
      <div className="flex flex-col space-y-3">
        <h2 className=" text-white text-center py-3 md:py-10 md:text-2xl lg:text-xl">
          Here are few technologies I've been working with recently
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {skills.map((skill, i) => (
            <img
              key={i}
              alt="skill"
              src={skill}
              className="w-10 p-1 md:w-24 lg:w-20"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
