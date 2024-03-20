import React from "react";
import Header from "./components/Header";
import AnimateRoutes from "./components/AnimateRoutes";
import { HashRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimateRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
