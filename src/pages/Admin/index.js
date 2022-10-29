import React, { useEffect } from "react";
import Header from "./Header";
import { Tabs } from "antd";
import Intro from "./Intro";
import About from "./About";
import { useSelector } from "react-redux";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/admin-login";
    }
  }, [token]);
  return (
    <div>
      <Header />
      <div className="lg:px-40 px-5 py-5">
        <div className="flex justify-end gap-3">
          <a href="/">
            <button className="bg-tertiary text-white p-2">View Site</button>
          </a>
          <button onClick={handleLogout} className="bg-primary text-white p-2">
            Logout
          </button>
        </div>
        {portfolioData && (
          <Tabs size="large" defaultActiveKey="1">
            <Tabs.TabPane tab="Intro" key="1">
              <Intro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="About" key="2">
              <About />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Experiences" key="3">
              <Experiences />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Projects" key="4">
              <Projects />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contact" key="5">
              <Contact />
            </Tabs.TabPane>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default Admin;
