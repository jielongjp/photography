import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
      <footer className="px-4 lg:px-10 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between bg-[#05203c] text-gray-200 mt-10">
        <div className="flex md:flex-row items-top w-full lg:w-auto mb-4 lg:mb-0 flex-wrap justify-center">
          <div className="flex sm:pr-10">
            <a
              href="https://jordharris.com"
              className="text-xl hover:text-white mr-4 lg:mr-8 mb-2 lg:mb-0"
            >
              Main site
              <p className="text-xs ">jordharris.com</p>
            </a>
            <a
              href="https://learntaigi.com"
              className="inline-block text-xl hover:text-white mr-4 lg:mr-8 mb-2 lg:mb-0"
            >
              learntaigi.com
              <p className="text-xs ">Taiwanese language learning</p>
            </a>
          </div>
          {/* <nav className=" gap-x-12 font-semibold sm:flex hidden">
            <Link to={"/"} className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link to={"/travel/"} className="text-white hover:text-gray-400">
              Travel
            </Link>
            <Link to={"/wildlife/"} className="text-white hover:text-gray-400">
              Wildlife
            </Link>
            <Link to={"/about/"} className="text-white hover:text-gray-400">
              About
            </Link>
            <a
              href="https://jordharris.com/contact/"
              className="text-white hover:text-gray-400"
            >
              Contact
            </a>
          </nav> */}
        </div>
        <Socials />
      </footer>
    </>
  );
};

export default Footer;
