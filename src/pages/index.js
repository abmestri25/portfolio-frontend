import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Intro from "../components/Intro";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import Socials from "../components/Socials";
import Loader from "../components/Loader";
import RightSideLine from "../components/RightSideLine";
import { useSelector } from "react-redux";

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div className="bg-primary ">
      {portfolioData ? (
        <>
          <Intro portfolioData={portfolioData} />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Socials />
          <RightSideLine />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
