import React from "react";
import Headshot from "../img/home/jordan-headshot.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none">
            <img src={Headshot} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start pl-1"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              I am a web developer living in the UK.
              <b> Photography</b> has always been a passion of mine. along with
              part of my work in the past.
              <br />
              <br />
              While I mostly enjoy travel photography and documenting my
              journeys, I have experience with a range of different photography.
            </p>
            <a href="https://jordharris.com" className="btn">
              View my development work
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
