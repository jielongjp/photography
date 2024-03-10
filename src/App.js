import React from "react";
import Header from "./components/Header";
import AnimateRoutes from "./components/AnimateRoutes";
import { HashRouter as Router } from "react-router-dom";

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
