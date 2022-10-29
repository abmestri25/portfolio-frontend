import React from "react";
import { useSelector } from "react-redux";

const Socials = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const { instagram, facebook, whatsapp, twitter } = contact;
  return (
    <div className="fixed md:bottom-10 lg:left-10 md:left-5">
      <div className="flex flex-col items-center gap-5">
        <div className="border-l-2 h-[350px] border-tertiary"></div>
        <a href={instagram}>
          <img src="/images/instagram.png" className="w-5" alt="" />
        </a>
        <a href={facebook}>
          <img src="/images/facebook.png" className="w-5" alt="" />
        </a>
        <a href={twitter}>
          <img src="/images/twitter.png" className="w-5" alt="" />
        </a>
        <a href={whatsapp}>
          <img src="/images/whatsapp.png" className="w-5" alt="" />
        </a>
        <div className="border-l-2 h-[350px] border-tertiary"></div>
      </div>
    </div>
  );
};

export default Socials;
