import React from "react";

import RandomImage from "@/components/RandomImage";
import { FaAngleDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero min-h-screen w-screen relative flex flex-col justify-center items-center overflow-hidden">
      <RandomImage classes="img1" />
      <RandomImage classes="img2" />
      <RandomImage classes="img3" />
      <RandomImage classes="img4" />

      <span className="text-3xl md:text-4xl italic w-fit pb-3 font-bold">
        <span className="text-[#480440]">Data AOS Library</span> Clone
      </span>
      <span className="text-xl md:text-2xl text-center w-fit">
        - Animate on Scroll Library
      </span>

      <p className="text-xl text-center absolute bottom-20">
        <div>Scroll Down</div>
        <div className="bounce flex justify-center text-red">
          <FaAngleDown />
        </div>
      </p>
    </div>
  );
};

export default Hero;
