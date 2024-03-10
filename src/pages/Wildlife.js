import React from "react";
import { CatImages } from "../img";
import ImageGrid from "../components/ImageGrid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Wildlife = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Cat photos</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              See more
            </Link>
          </motion.div>
          {/* image grid */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none">
            <img src={CatImages[0]} alt="" />
          </div>
        </div>
      </div>
      <ImageGrid
        image1={CatImages[3]}
        image2={CatImages[1]}
        image3={CatImages[2]}
        image4={CatImages[4]}
        image5={CatImages[16]}
        image6={CatImages[5]}
        image7={CatImages[6]}
      />
      <ImageGrid
        image1={CatImages[9]}
        image2={CatImages[18]}
        image3={CatImages[8]}
        image4={CatImages[7]}
        image5={CatImages[10]}
        image6={CatImages[0]}
        image7={CatImages[12]}
      />
      <ImageGrid
        image1={CatImages[13]}
        image2={CatImages[14]}
        image3={CatImages[15]}
        image4={CatImages[17]}
        image5={CatImages[18]}
        image6={CatImages[19]}
        image7={CatImages[16]}
      />
    </motion.section>
  );
};

export default Wildlife;
