import React, { useContext } from 'react';

import Headshot from '../img/home/jordan-headshot.png';
import Fuji from '../img/portfolio/fuji.jpg'
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
import Image5 from '../img/portfolio/5.png'
import Image6 from '../img/portfolio/6.png'
import Image7 from '../img/portfolio/7.png'
import Image8 from '../img/portfolio/8.png'
import Image9 from '../img/portfolio/9.png'
import Image10 from '../img/portfolio/10.png'
import Image11 from '../img/portfolio/11.png'
import Image12 from '../img/portfolio/12.png'
import Image13 from '../img/portfolio/13.png'
import Image14 from '../img/portfolio/14.png'

import Background from '../img/portfolio/background.jpeg'
import Background2 from '../img/portfolio/background.jpg'


// import Background from '../img/portfolio/2.png'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import ImageGrid from '../components/ImageGrid';
import { CgEnter } from 'react-icons/cg';
import LargeImage from '../components/LargeImage';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section bg-blue-200'
    >
      <div className='h-full w-full relative'
        style={{ backgroundImage: `url(${Background2})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative'}}
      >

        <div className='container'>
        {/* text & img wrapper */}
        <div 
          className='flex flex-col justify-center h-full'
        >
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}

            className='xl:pt-36 pb-14 pl-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>
              photographer <br /> & web developer
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              Jordan Leigh Harris
            </p>
            <Link to={'/contact'} className='btn rounded mb-[30px] hover:bg-slate-700'>
              contact me
            </Link>
          </motion.div>
          {/* image */}
          <div className='flex justify-end lg:max-h-max rounded-full'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40'
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

      <div>
        <p>Lorem ipsum dolor sit amet.</p>
        <ImageGrid image1={Image1} image2={Image2} image3={Image3} image4={Image4} image5={Image5} image6={Image6} image7={Image7}/>
          <LargeImage image={Fuji}/>
        <ImageGrid image1={Image8} image2={Image9} image3={Image10} image4={Image11} image5={Image12} image6={Image13} image7={Image14}/>
      </div>

    
    </motion.section>
  );
};

export default Home;
