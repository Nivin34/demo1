import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InterfaceVideo from "../assets/InterfaceVideo2.mp4";
import Interfaceimage1 from "../assets/Interfaceimage1.png";
import Interfaceimage2 from "../assets/Interfaceimage2.png";
import Interfaceimage3 from "../assets/Interfaceimage3.png";

import DataImage1 from "../assets/Dataimage-3.png";
import DataImage2 from "../assets/Dataimage-2.png";
import DataImage3 from "../assets/Dataimage-1.png";
import DataVideo1 from "../assets/DataVideo1.mp4";

import Quotesimage1 from "../assets/Quotesimage1.png";
import Quotesimage2 from "../assets/Quotesimage2.png";
import video1 from "../assets/QuotesVideo1.mp4";

import salesTeamImage from "../assets/salesTeamImage.png";
import salesTeamVideo from "../assets/salesTeamVideo1.mp4";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ScrollSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      id={id}
      className="scroll-section"
    >
      {children}
    </motion.section>
  );
};

export default function Features() {
  return (
    <div className="container mx-auto" id="features">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full font-['Inter'] text-[20px] font-bold leading-[40px] relative text-center whitespace-nowrap mt-12 lg:mt-24 z-[34] mr-0 mb-0"
      >
        <span className="font-['Inter']  lg:text-3xl font-bold leading-[40px] text-[#27548A] bg-gradient-to-r from-indigo-50 to-purple-50  border border-b-0  p-3  py-5 rounded-full shadow-lg shadow-[#27548a52]">
          Why ACE CRM is the Right Choice
        </span>
      </motion.h2>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg ">
        {/* Feature 1 */}
        <ScrollSection id="feature-1">
          <section className=" relative lg:py-32">
            <div className="w-full lg:max-w-[1359px] h-[520px] xl:h-[603px] relative z-[76] mt-[3px] mr-0 mb-0  lg:ml-[39px] xl:ml-0">
              <motion.div
                variants={fadeInUp}
                className=" hidden  xl:block bg-no-repeat rounded-[10px] absolute top-10 lg:top-0 left-[150px] md:left-[900px]  xl:left-[1054px] z-[74]"
              >
                <img
                  src={Interfaceimage3}
                  alt=""
                  className=" w-[200px] md:w-full rounded-[10px] shadow-lg"
                />
              </motion.div>

              <div className="w-[1289px] h-[544px] bg-cover bg-no-repeat rounded-[10px] absolute top-[59px] left-5 md:left-40 lg:left-0 xl:left-[60px] z-[55]">
                <motion.h3
                  variants={fadeInUp}
                  className="flex lg:w-1/2 text-xl mt-10 lg:mt-28 items-start font-extrabold lg:text-2xl xl:text-4xl text-[#27548A] text-center whitespace-nowrap"
                >
                  " Designed to Feel Instantly Familiar "
                </motion.h3>

                <div className=" w-[721px] h-[455px] absolute lg:top-[49px]  lg:left-[480px]  xl:left-[544px]  z-[75]">
                  <motion.div
                    variants={slideInRight}
                    className="hidden lg:block w-[150px] lg:w-[190px] h-[120px] bg-no-repeat rounded-[10px] absolute top-10 lg:top-0 xl:left-[130px] z-[73]"
                  >
                    <img
                      src={Interfaceimage1}
                      alt="Description"
                      className=" border rounded-[10px] shadow-lg"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className=" w-[350px] md:w-[450px] lg:w-[450px] xl:w-[550px] h-[380px] bg-cover bg-no-repeat rounded-lg absolute top-[40px] md:top-[10px] lg:top-[50px]  left-2 xl:left-[200px] z-[72]"
                  >
                    <video
                      className="w-[600px] object-center border shadow-lg rounded-lg"
                      src={InterfaceVideo}
                      autoPlay
                      muted
                      loop
                    />
                    <div className="flex w-[35px] h-[35px] gap-[10px] items-center flex-nowrap relative z-[31] mt-[242px] ml-[484px]" />
                  </motion.div>

                  <motion.div
                    variants={slideInRight}
                    className="hidden lg:block w-[150px] lg:w-[170px] h-[142px] bg-no-repeat rounded-[10px] absolute top-[270px] xl:top-[330px] left-[315px] xl:left-[100px] z-[75]"
                  >
                    <img
                      src={Interfaceimage2}
                      alt=""
                      className=" border rounded-[10px] shadow-lg"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={slideInLeft}
                  className="  w-1/3 xl:w-1/2 mt-[270px] pl-2 pe-5 lg:px-1 lg:mt-20 text-left xl:ml-5 z-[59] leading-[40px]"
                >
                  <span className="font-['Inter'] text-[16px] lg:text-[20px] text-[#939797] font-semibold">
                    Navigate with ease, no training needed — just smooth,
                    intuitive CRM from day one.
                  </span>
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollSection>

        {/* Feature 2 */}
        <ScrollSection id="feature-2">
          <section className="w-full max-w-[2712px] h-[360px] lg:h-[600px] xl:h-[791px] relative z-[119] mt-[0px] mr-0 mb-0 ml-[-1271px] md:ml-[-1130px] lg:ml-[-1351px] xl:ml-[-1310px]">
            <motion.div
              variants={fadeInUp}
              className="hidden lg:block w-[120px] lg:w-[181px] h-[173px] bg-cover bg-no-repeat rounded-[10px] absolute top-32 lg:top-0 left-[1450px] lg:left-[1650px] xl:left-[1712px] z-[118]"
            >
              <img
                src={DataImage3}
                alt="Description"
                className=" border rounded-[10px] shadow-lg"
              />
            </motion.div>

            <motion.div
              variants={slideInLeft}
              className="hidden lg:block w-[200px] lg:w-[300px] xl:w-[420px] h-[194px] bg-cover bg-no-repeat absolute top-[200px] lg:top-[96px] left-[1290px] lg:left-[1370px] xl:left-[1348px] z-[117]"
            >
              <img
                src={DataImage2}
                alt="Description"
                className=" rounded-[5px] lg:rounded-[10px] shadow-lg"
              />
            </motion.div>

            <div className="w-[1289px] h-[544px] rounded-lg bg-cover bg-no-repeat absolute lg:top-[76px] left-[1295px] lg:left-[1386px] z-[84]">
              <div className="absolute  lg:top-[80px] lg:left-[500px] xl:left-[679px] z-[97]">
                <motion.h3
                  variants={fadeInUp}
                  className="flex items-start font-['Inter'] text-xl lg:text-2xl xl:text-4xl font-extrabold text-[#27548A] relative whitespace-nowrap z-[86] mt-10 mr-0 mb-0"
                >
                  " Never Enter the Same Data Twice "
                </motion.h3>

                <motion.div
                  variants={fadeInUp}
                  className=" w-[360px] lg:w-[450px] xl:w-full mt-[280px] lg:mt-20 text-left ml-2 lg:ml-5 px-0 z-[89]"
                >
                  <span className="font-['Inter'] text-[16px] lg:text-[20px] text-[#939797] font-semibold leading-[40px]">
                    ACE CRM auto-fills, syncs, and links your data—so you can
                    focus on selling, not typing.
                  </span>
                </motion.div>
              </div>

              <motion.div
                variants={fadeIn}
                className="w-1/2 mt-28 md:mt-24  xl:mt-36 ml-2"
              >
                <video
                  className=" w-[350px]  md:w-[450px] xl:w-[600px] border shadow-lg object-center rounded-[5px]"
                  src={DataVideo1}
                  autoPlay
                  muted
                  loop
                />
              </motion.div>
            </div>

            <motion.div
              variants={slideInRight}
              className="hidden lg:block w-[230px] lg:w-[260px] xl:w-[397px] h-[174px] bg-cover bg-no-repeat rounded-[5px] absolute top-[420px] xl:top-[541px] left-[1450px] lg:left-[1653px] z-[119]"
            >
              <img
                src={DataImage1}
                alt=""
                className="rounded-[10px] shadow-lg"
              />
            </motion.div>
          </section>
        </ScrollSection>

        {/* Feature 3 */}
        <ScrollSection id="feature-3">
          <section className="w-full max-w-[1348px] h-[380px] lg:h-[585px] relative z-[146] mt-[0px] mr-0 mb-0 ml-8 md:ml-44 lg:ml-0 xl:ml-[50px]">
            <div className="w-[1289px] h-[544px] rounded-lg bg-cover bg-no-repeat absolute top-0 left-0 z-[85]">
              <motion.div
                variants={slideInRight}
                className="w-1/2 mt-56 lg:mt-44  lg:ml-[530px] xl:ml-[700px]"
              >
                <video
                  className="w-[350px] md:w-[450px] xl:w-full h-full object-center rounded-[5px]"
                  src={video1}
                  autoPlay
                  muted
                  loop
                />
              </motion.div>

              <motion.h3
                variants={slideInLeft}
                className="flex items-start font-['Inter'] text-xl lg:text-2xl xl:text-4xl font-extrabold leading-[40px] text-[#27548A] absolute top-[150px] lg:left-[31px] xl:left-0 whitespace-nowrap z-[147]"
              >
                " Create & Share Quotes Instantly "
              </motion.h3>

              <motion.div
                variants={slideInLeft}
                className=" w-[360px] lg:w-[500px] xl:w-[550px] h-[340px] font-['Inter'] leading-[40px] absolute top-[450px] md:top-[475px] lg:top-[260px] lg:left-[38px] xl:left-[10px] text-left z-[99]"
              >
                <span className="font-['Inter'] text-[16px]  lg:text-[20px] text-[#939797] font-semibold">
                  Look professional, close faster custom quotes in just a few
                  clicks with ACE CRM.
                </span>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className=" hidden lg:block bg-no-repeat rounded-[10px] absolute lg:top-[90px] xl:top-[80px] lg:left-[650px] mr-5 xl:mr-0 xl:left-[959px] z-[144]"
            >
              <img
                src={Quotesimage1}
                alt="Description"
                className="rounded-[10px] shadow-lg "
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className=" hidden lg:block w-[250px] h-[150px] rounded-[10px] absolute lg:top-[400px] xl:top-[468px] lg:left-[500px] xl:left-[541px] z-[146]"
            >
              <img
                src={Quotesimage2}
                alt="Description"
                className="rounded-[10px] shadow-lg"
              />
            </motion.div>
          </section>
        </ScrollSection>

        {/* Feature 4 */}
        <ScrollSection id="feature-4">
          <section className="w-full max-w-[2712px] h-[600px] xl:h-[751px] relative z-[119] mt-[81px] mr-0 mb-0 ml-[-1291px] md:ml-[-1120px] lg:ml-[-1291px]">
            <motion.div
              variants={slideInLeft}
              className="hidden lg:block lg:w-[280px] xl:w-[320px] h-[194px] bg-cover bg-no-repeat absolute top-[70px] xl:top-[56px] left-[1290px] xl:left-[1308px] z-[117]">
              <img
                src={salesTeamImage}
                alt="Description"
                className="rounded-[10px] shadow-lg"
              />
            </motion.div>

            <div className="w-[1289px] h-[544px] rounded-lg bg-cover bg-no-repeat absolute top-[76px] left-[1180px] xl:left-[1330px] z-[84]">
              <div className="w-[595px] h-[363px] text-[0px] absolute top-[50px] lg:left-[510px] xl:left-[679px] z-[97]">
                <motion.h3
                  variants={fadeInUp}
                  className="flex justify-center items-start font-['Inter'] text-xl lg:3xl xl:text-4xl font-extrabold text-[#27548A] relative text-center whitespace-nowrap z-[86] xl:ml-28 mt-10 mr-0 mb-0"
                >
                  " Track <span className="hidden lg:block mx-2">Your</span>{" "}
                  Sales Team's Performance "
                </motion.h3>

                <motion.div
                  variants={fadeInUp}
                  className="w-[410px] lg:w-[500px] xl:w-full mt-64 md:mt-72 lg:mt-24 text-left px-5 lg:px-0  z-[89] ml-28 xl:ml-5 "
                >
                  <span className="  font-['Inter'] text-[16px] lg:text-[20px] text-[#939797] font-semibold leading-[40px]">
                    ACE CRM auto-fills, syncs, and links your data so you can
                    focus on selling, not typing.
                  </span>
                </motion.div>
              </div>

              <motion.div
                variants={slideInLeft}
                className="w-1/2 mt-36 ml-32 xl:ml-0 "
              >
                <video
                  className=" w-[350px] md:w-[450px] lg:w-[450px] xl:w-full h-full object-center border shadow-lg rounded-[5px]"
                  src={salesTeamVideo}
                  autoPlay
                  muted
                  loop
                />
              </motion.div>
            </div>
          </section>
        </ScrollSection>
      </div>
    </div>
  );
}
