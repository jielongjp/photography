import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
      <footer className="px-4 lg:px-10 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between bg-[#004d53] text-[#f1b472] mt-10">
        <div className="flex md:flex-row items-top w-full lg:w-auto mb-4 lg:mb-0 flex-wrap justify-center">
          <div className="grid grid-cols-2 sm:pr-10 text-center sm:text-left">
            <a
              href="https://jordharris.com"
              className="text-xl hover:text-white mr-4 lg:mr-8 mb-2 lg:mb-0"
            >
              Main site
              <p className="text-xs">jordharris.com</p>
            </a>
            <a
              href="https://learntaigi.com"
              className="inline-block text-xl hover:text-white mr-4 lg:mr-8 mb-2 lg:mb-0"
            >
              Learn Taiwanese
              <p className="text-xs ">with learntaigi.com</p>
            </a>
            <p className="col-span-2 text-xs border-t border-[#f1b472] mt-4 pt-2">
              © All images subject to copyright
            </p>
          </div>
        </div>
        <Socials />
      </footer>
    </>
  );
};

export default Footer;
