import React from "react";
import CardAbout from "./component/CardAbout";
import ComponentTransition from "@/common/component/element/ComponentTransition";
const About = () => {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-black bg-text bg-clip-text  text-transparent font-bold">
            About Us
          </h1>

        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
          Discover how WNCH Hub revolutionizes towing and roadside assistance through innovative, cloud-based technology.
        </p>
      </div>
      <CardAbout />
    </ComponentTransition>
  );
};

export default About;
