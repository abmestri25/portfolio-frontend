import React from "react";
import SectionTitle from "./SectionTitle.js";
import { useSelector } from "react-redux";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const {
    name,
    email,
    gender,
    marital_status,
    address,
    instagram,
    facebook,
    whatsapp,
    twitter,
    mobile,
    birth_year,
    image,
  } = contact;

  return (
    <div id="contact" className="h-screen p-5 lg:px-40 relative">
      <SectionTitle title="Say Hello" />

      <div className="flex flex-col-reverse items-center justify-between space-y-5 lg:flex-row md:px-10 lg:px-40 ">
        <div>
          <h1 className="text-white text-xl ">{"{"}</h1>
          <div className="lg:ml-36 ml-6 py-3 space-y-1">
            <h1 className="text-white text-xl">
              Name : <span className="text-tertiary">{name} </span>{" "}
            </h1>
            <h1 className="text-white text-xl">
              Email : <span className="text-tertiary">{email} </span>{" "}
            </h1>
            <h1 className="text-white text-xl">
              Gender : <span className="text-tertiary">{gender} </span>{" "}
            </h1>
            <h1 className="text-white text-xl">
              Age :{" "}
              <span className="text-tertiary">
                {new Date().getFullYear() - birth_year}
              </span>{" "}
            </h1>
            <h1 className="text-white text-xl">
              Mobile : <span className="text-tertiary">{mobile} </span>{" "}
            </h1>
            <h1 className="text-white text-xl">
              Address : <span className="text-tertiary">{address} </span>{" "}
            </h1>
            <h1 className="text-white text-xl">
              Marital Status :
              <span className="text-tertiary"> {marital_status} </span>{" "}
            </h1>
          </div>
          <h1 className="text-white text-xl">{"}"}</h1>
        </div>
        <img src={image} alt="" className="w-56 md:w-2/4 lg:w-1/3" />
      </div>
      <div className="absolute bottom-10 left-10 right-10  lg:bottom-10 lg:left-40 lg:right-40 flex flex-col items-center justify-center space-y-5">
        <div className="border-2 border-t-[1px] w-full md:w-3/4 border-tertiary"></div>
        <h1 className="text-tertiary font-normal md:text-2xl ">
          Designed and Developed by
        </h1>
        <h1 className="text-white font-normal md:text-2xl">
          Abhishek Sanjay Mestri
        </h1>
        <div className="flex flex-row items-center gap-5">
          <div className="border-t-2 w-[30px] border-tertiary"></div>
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

          <div className="border-t-2 w-[30px] border-tertiary"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
