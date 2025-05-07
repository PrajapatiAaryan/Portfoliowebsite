import React from "react";
import Navbar from "../components/Navbar";
import { MdMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LetterGlitch from "../components/LetterGlitch";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen  bg-gray-950 text-white px-5 sm:px-10 md:px-16 lg:px-10 xl:px-44 pt-32 lg:pt-24 z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-10 md:gap-5 h-auto lg:h-[80vh] ">
          {/* Left Content */}
          <div className="flex flex-col gap-8 w-full lg:w-[50%] text-center lg:text-left xl:pl-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-cyan-500 font-semibold">
              A Software Developer
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold ">
              Prajapati Aryan
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-500 ">
              Creating intuitive interfaces and engaging user experiences for
              mobile and web applications designs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <a href="#projects">
                <button className="w-full sm:w-auto flex justify-center items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm shadow-blue-400 rounded-md text-lg sm:text-xl font-semibold  transition-all duration-500  hover:from-gray-950 hover:to-gray-950 hover:shadow-none hover:border-cyan-500 hover:border  cursor-pointer hover:-translate-y-1 hover:text-cyan-500">
                  View My Work
                </button>
              </a>
              <a href="#contact">
                <button className="w-full sm:w-auto flex justify-center items-center px-[44px] py-4 border border-cyan-500 text-cyan-500 text-lg sm:text-xl font-semibold rounded-md hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:shadow-sm hover:shadow-blue-400">
                  Contact Me
                </button>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8 justify-center lg:justify-start   rounded-3xl ">
              <div className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-2.5 transition-all duration-500 hover:bg-cyan-300 hover:text-black ">
                <a
                  href="https://www.linkedin.com/in/aryan-prajapati-7216392b2/"
                  target="_blank"
                >
                  <FaLinkedin className="scale-150" />
                </a>
              </div>
              <div className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-2.5 transition-all duration-500 hover:bg-cyan-300 hover:text-black">
                <a href="https://github.com/PrajapatiAaryan/" target="_blank">
                  <FaGithub className="scale-150" />
                </a>
              </div>
              <div className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-2.5 transition-all duration-500 hover:bg-cyan-300 hover:text-black">
                <a href="mailto:prajapataryan306@gmail.com" target="_blank">
                  <MdMail className="scale-150" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="w-full lg:w-[50%] flex justify-center items-center h-full mb-10 lg:mb-0 ">
            <div className="border border-cyan-400  flex justify-center items-center p-6 sm:p-8 transition-all duration-700 animate-movingborder rounded-xl">
              <div className="bg-white h-60 w-60 sm:h-72 sm:w-72 md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-xl hover:scale-105  transition-all duration-500">
                <img
                  src="/portfolioimg1.jpg"
                  alt="img"
                  className="h-60 w-60 sm:h-72 sm:w-72 md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
