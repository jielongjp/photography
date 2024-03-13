import React from "react";
import { CatImages } from "../img";
import monkey1 from "../img/wildlife/monkey-1.jpg";
import ImageGrid from "../components/ImageGrid";
import SingleImage from "../components/SingleImage";
// import { Link } from "react-router-dom";
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
            <h1 className="h1">Cats</h1>
            <p className="mb-12 max-w-sm">
              Cats often make the perfect models in the outside, each with their
              own unique personalities and traits that make for some enticing
              wildlife photography. These are some of the majestic felines I've
              come across travelling in Asia and Europe. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit.
              <br />
              <br />
              These are some of the majestic felines I've come across travelling
              in Asia and Europe.
            </p>
            {/* link to blog when ready */}
            {/* <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              read more
            </Link> */}
          </motion.div>
          {/* image grid */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none">
            <SingleImage image={CatImages[0]} />
            <p className="absolute bottom-0 right-0 px-4 py-2 text-black">
              Cheshire, UK
            </p>
          </div>
        </div>
      </div>
      <div className="border-t mt-4 pt-4">
        <h2 className="text-4xl text-center pb-4 font-primary font-bold">
          Cats of Kagawa, Japan
        </h2>
      </div>

      <ImageGrid
        image1={CatImages[3]}
        image2={CatImages[1]}
        image3={CatImages[2]}
        image4={CatImages[4]}
        image5={CatImages[16]}
        image6={CatImages[5]}
        image7={CatImages[19]}
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
            <h1 className="h1">Tokyo, Japan</h1>
            <br></br>
            <p className="mb-12 max-w-sm">
              This cat would sit and lie down around the house next to our
              apartment in Nakano, Tokyo everyday.
            </p>
          </motion.div>
          <SingleImage image={CatImages[6]} />
        </div>
      </div>
      <div className="border-t mt-4 pt-4">
        <h2 className="text-4xl text-center pb-4 font-primary font-bold">
          Ruifang, Taiwan
        </h2>
      </div>
      <ImageGrid
        image1={CatImages[9]}
        image2={CatImages[18]}
        image3={CatImages[8]}
        image4={CatImages[7]}
        image5={CatImages[10]}
        image6={CatImages[14]}
        image7={CatImages[12]}
      />
      <ImageGrid
        image1={CatImages[13]}
        image2={CatImages[14]}
        image3={CatImages[15]}
        image4={CatImages[17]}
        image5={CatImages[18]}
        image6={CatImages[8]}
        image7={CatImages[16]}
      />
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none">
            <SingleImage image={monkey1} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Nagano, Japan</h1>
            <p className="mb-12 max-w-sm">
              <b> The Snow monkeys of Japan.</b> These unique primates bathe in
              hot springs in the mountains of Nagano during the colder months.
              <br />
              <br />
              We visited in November when it wasn't so cold and snowy, but the
              surrounding area was still picturesque with plenty of snow monkeys
              around.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Wildlife;
