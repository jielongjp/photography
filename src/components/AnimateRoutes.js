import React from 'react';
// import pages
import Home from '../pages/Home';
import Travel from '../pages/Travel';
import Wildlife from '../pages/Wildlife';
import About from '../pages/About';
import Contact from '../pages/Contact';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/travel/' element={<Travel />} />
        <Route path='/wildlife/' element={<Wildlife />} />
        <Route path='/about/' element={<About />} />
        <Route path='/contact/' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
