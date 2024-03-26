import React from "react";
import Image1 from "../img/portfolio/15.png";
import Image2 from "../img/portfolio/16.png";
import Image3 from "../img/portfolio/5.png";
import Image4 from "../img/portfolio/13.png";
import Image5 from "../img/portfolio/12.png";
import Image6 from "../img/portfolio/fuji.jpg";
import Image7 from "../img/portfolio/7.png";

import { NkImages } from "../img";
import { ScothImages } from "../img";
import { FoodImages } from "../img";

import ImageGrid from "../components/ImageGrid";
import SingleImage from "../components/SingleImage";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Travel = () => {
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
            <h1 className="h1">Travel</h1>
            <p className="mb-12 max-w-sm">
              Exploring the world and its many vibrant cultures has always
              pulled at me since I was young. Spending many years living in both
              Europe and Asia has been the perfect opportunity to explore.
              <br />
              <br />
              Here are some snapshops of some of the highlights of these
              journeys.
            </p>
            {/* <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              See more
            </Link> */}
          </motion.div>
          {/* image grid */}
          <div className="grid grid-cols-2 lg:gap-2">
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden shadow-md">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden shadow-md">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden shadow-md">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <ImageGrid
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        image5={Image5}
        image6={Image6}
        image7={Image7}
      />
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none">
            <SingleImage image={Image2} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">
              Pyongyang, <br></br>North Korea
            </h1>
            <p className="mb-12 max-w-sm">
              Like a trip back in time, visiting North Korea's capital city was
              a strange and exhilarating experience.
              <br />
              <br />A stark contrast to the modern urban metropolises of the
              south.
            </p>
          </motion.div>
        </div>
      </div>
      <ImageGrid
        image1={NkImages[0]}
        image2={NkImages[1]}
        image3={NkImages[2]}
        image4={NkImages[3]}
        image5={NkImages[4]}
        image6={NkImages[5]}
        image7={NkImages[6]}
        image8={NkImages[7]}
        image9={NkImages[8]}
      />
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
            <h1 className="h1">
              Scottish <br></br> Highlands
            </h1>
            <br></br>
            <p className="mb-12 max-w-sm">
              A unique charm and impressive landscape that leaves a lasting
              impression.
            </p>
          </motion.div>
          <SingleImage image={Image1} />
        </div>
      </div>
      <ImageGrid
        image1={ScothImages[0]}
        image2={ScothImages[1]}
        image3={ScothImages[2]}
        image4={ScothImages[3]}
        image5={ScothImages[4]}
        image6={ScothImages[5]}
        image7={ScothImages[6]}
      />
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center text-center lg:text-right lg:pt-16">
          {/* image */}
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden shadow-md">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={FoodImages[0]}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden shadow-md">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={FoodImages[1]}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden shadow-md">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={FoodImages[2]}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={FoodImages[3]}
                alt=""
              />
            </div>
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">Food</h1>
            <p className="mb-12 max-w-sm">
              <b> Food</b> has a special place in any avid traveller's heart and
              is the cornerstone of any culture.
              <br />
              <br />
              Explore the world through my stomach in this gallery.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Travel;
