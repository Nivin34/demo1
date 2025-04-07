import React from "react";
import landingGif from "../assets/landingGif.mp4";
import landingGif1 from "../assets/landingGif1.mp4";

import Bg from "../assets/landingBg.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <section
        className="w-full min-h-[600px] xl:h-[700px] relative z-[32] lg:mt-[14.23px] mr-0 mb-0 bg-cover bg-no-repeat lg:bg-[image:url(../assets/landingBg.png)] overflow-hidden"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <h1 className="flex w-full px-4  lg:px-0  lg:w-[500px] xl:w-[620px] lg:h-[50.25%] justify-start items-center font-['Inter'] text-[24px] xl:text-[36px] font-bold lg:font-extrabold leading-[1.4] lg:leading-[60px] text-white tracking-[-1.5px] relative lg:absolute py-6 lg:py-0 lg:top-0  lg:left-10 xl:left-36 text-left z-[16]">
          Supercharge Your Business with a Centralized, All-in-One CRM Solution
        </h1>

        <div className=" hidden lg:block w-full h-[300px] md:h-[200px] lg:w-[550px] lg:h-[600px] xl:w-[720px] xl:h-[700px]   xl:mt-0  bg-cover bg-no-repeat relative lg:absolute  lg:left-[550px] xl:left-[800px] z-[32]">
          <video
            className="w-full h-full object-cover"
            src={landingGif}
            autoPlay
            muted
            loop
          />
        </div>
        <div className="lg:hidden w-full h-[300px] md:h-[400px] lg:w-[720px] lg:h-[700px] opacity-85 bg-cover bg-no-repeat relative lg:absolute  md:left-[50px] lg:left-[800px] z-[32]">
          <video
            className="w-full h-full object-fill px-12 "
            src={landingGif1}
            autoPlay
            muted
            loop
          />
        </div>

        <p className="flex w-full px-4  lg:px-0 lg:w-[500px] xl:w-[652px] py-6 lg:h-[14.52%] justify-start items-center font-['Inter'] text-[18px] xl:text-[22px] font-semibold leading-[1.6] lg:leading-[60px] text-[#e3e7fa] tracking-[-1px] lg:tracking-[-1.5px] relative lg:absolute lg:top-[45.16%] lg:left-10 xl:left-36 text-left z-[17]">
          Empower your team to manage customer relationships, automate tasks,
          and analyze data from a single platform boosting efficiency and
          driving growth.
        </p>

        <div className="flex w-full px-4 md:px-0  sm:justify-center lg:justify-start relative lg:absolute lg:bottom-[95px] lg:left-[40px] xl:left-[150px] gap-4 z-[19] py-6 lg:py-0">
          <div className="flex  sm:flex-row gap-4 pt-4 w-full md:w-auto">
            <Link
              to="#"
              className="w-full md:w-auto bg-blue-500 text-white sm:py-3 sm:px-6 rounded-lg font-medium flex items-center justify-center transition-all hover:bg-blue-600"
            >
              Start Free Trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="#"
              className="w-full md:w-auto text-black py-2 sm:py-3 hover:bg-blue-900 hover:text-white sm:px-6 rounded-lg font-medium border border-black transition-all text-center"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
