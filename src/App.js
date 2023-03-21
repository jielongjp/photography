import React from 'react';
// import components
import Header from './components/Header';
import AnimateRoutes from './components/AnimateRoutes';
// import router
import { HashRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimateRoutes />
      </Router>
    </>
  );
};

export default App;
