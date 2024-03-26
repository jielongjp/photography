import React, { useContext } from "react";

import Fuji from "../img/portfolio/fuji.jpg";
import { PortfolioImages } from "../img";
import Cat2 from "../img/wildlife/cat-2.jpg";

import Background from "../img/portfolio/background.jpeg";
import Background2 from "../img/portfolio/background.jpg";

// import Background from '../img/portfolio/2.png'

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import ImageGrid from "../components/ImageGrid";
import { CgEnter } from "react-icons/cg";
import LargeImage from "../components/LargeImage";
import SingleImage from "../components/SingleImage";
import Divider from "../components/Divider";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <div
        className="h-screen w-full relative mb-2"
        style={{
          backgroundImage: `url(${Background2})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="flex flex-col h-full justify-center">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="pt-8 pb-8 lg:pl-14 pl-4 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-start"
            >
              <h1 className="h1">
                photographer <br /> & web
                {window.innerWidth < 512 ? <br /> : ""} developer
              </h1>
              <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                Jordan Leigh Harris
              </p>
              <a
                href="https://jordharris.com/contact/"
                className="btn rounded mb-[30px]"
              >
                contact me
              </a>
            </motion.div>
            <div className="flex justify-end lg:max-h-max rounded-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="relative lg:-right-40"
              >
                {/* <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={Headshot}
                alt=''
              /> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ImageGrid
        image1={PortfolioImages[0]}
        image2={PortfolioImages[1]}
        image3={PortfolioImages[2]}
        image4={PortfolioImages[3]}
        image5={PortfolioImages[4]}
        image6={PortfolioImages[5]}
        image7={PortfolioImages[6]}
      />
      <LargeImage image={Fuji} />
      <div className="container mx-auto h-auto">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Cats of Japan</h1>
            <p className="mb-12 max-w-sm">
              <b> Cat Islands of Japan.</b> Home to hundreds of cats that prowl
              the steets of these islands, it's a cat lover's paradise.
              <br />
              <br />
              While you'll find such islands across the whole of Japan, it's the
              Setouchi region where you'll find island after island inhabited by
              furry residents.
            </p>
            <Link to={"/wildlife/"} className="btn mb-[30px] mx-auto lg:mx-0">
              see more
            </Link>
          </motion.div>
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none hover:opacity-90">
            <SingleImage image={Cat2} />
          </div>
        </div>
      </div>
      <Divider />
      <ImageGrid
        image1={PortfolioImages[7]}
        image2={PortfolioImages[8]}
        image3={PortfolioImages[9]}
        image4={PortfolioImages[10]}
        image5={PortfolioImages[11]}
        image6={PortfolioImages[12]}
        image7={PortfolioImages[13]}
      />
      <div className="container mx-auto h-auto relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none hover:opacity-90">
            <SingleImage image={PortfolioImages[1]} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Travel</h1>
            <p className="mb-12 max-w-sm">
              From stark, imposing landscapes of Scotland to an unexpected
              sparkle of colors in Pyongyang. Check out my photo galleries of
              travel while living in Europe and Asia.
            </p>
            <Link to={"/travel/"} className="btn mb-[30px] mx-auto lg:mx-0">
              see here
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
