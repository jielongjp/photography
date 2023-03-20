import React from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Cat1 from '../img/wildlife/cat-1.jpg'
import Cat2 from '../img/wildlife/cat-2.jpg'
import Cat3 from '../img/wildlife/cat-3.jpg'
import Cat4 from '../img/wildlife/cat-4.jpg'
import Cat5 from '../img/wildlife/cat-5.jpg'
import Cat6 from '../img/wildlife/cat-6.jpg'
import Cat7 from '../img/wildlife/cat-7.jpg'
import Catgroup from '../img/wildlife/catgroup.jpg'
import ImageGrid from '../components/ImageGrid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Wildlife = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Cat photos</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              See more
            </Link>
          </motion.div>
          {/* image grid */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none'>
            <img src={Cat1} alt='' />
          </div>
        </div>
      </div>
      < ImageGrid image1={Cat4} image2={Cat2} image3={Cat3} image4={Catgroup} image5={Cat5} image6={Cat6} image7={Cat7}/>
      < ImageGrid image1={Cat4} image2={Cat2} image3={Cat3} image4={Catgroup} image5={Cat5} image6={Cat6} image7={Cat7}/>

    </motion.section>
  );
};

export default Wildlife;
