import React from "react";
import heroVid from "../Assets/hello3.jpg";
import "../index.css";

const Hero = () => {
  // top-[90px]
  return (
    <>
      <div className="w-full h-[80vh]" id="hero">
        <img
          className="object-cover h-full w-full  absolute -z-10 rounded-xl shadow-lg shadow-emerald-100"
          src={heroVid}
          alt="mody"
        />
        <div className="w-full h-[98%] flex justify-center items-center flex-col text-white  px-4 text-center">
          <h1 className="py-2 text-4xl">Welcome to Mody University</h1>
          <div>
            <a
              href="https://zcal.co/vinodpurohit/CounsellingSession
                " target="_blank"rel="noreferrer"
            >
              <button className="m-2">book a Counciling Session</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
