import React from "react";
import Navbar from "../components/Navbar";
import { MdMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white px-5 sm:px-10 md:px-16 lg:px-24 xl:px-48 pt-20 ">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-10 md:gap-5 h-auto md:h-[80vh] md:pl-10">
          {/* Left Content */}
          <div className="flex flex-col gap-8 w-full md:w-[50%] text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-cyan-500 font-semibold">
              A Software Developer
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold">
              Prajapati Aryan
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-500">
              Creating intuitive interfaces and engaging user experiences for
              mobile and web applications designs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <button className="w-full sm:w-auto flex justify-center items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-blue-400 rounded-md text-lg sm:text-xl font-semibold hover:-translate-y-1 transition-all duration-500">
                View My Work
              </button>
              <button className="w-full sm:w-auto flex justify-center items-center px-8 py-4 border border-cyan-500 text-cyan-500 text-lg sm:text-xl font-semibold rounded-md hover:-translate-y-1 transition-all duration-300 hover:bg-cyan-500 hover:text-white">
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8 justify-center md:justify-start">
              <div className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-4 transition-all duration-500 hover:bg-cyan-300 hover:text-black">
                <FaLinkedin className="scale-150" />
              </div>
              <div className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-4 transition-all duration-500 hover:bg-cyan-300 hover:text-black">
                <FaGithub className="scale-150" />
              </div>
              <div className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-4 transition-all duration-500 hover:bg-cyan-300 hover:text-black">
                <MdMail className="scale-150" />
              </div>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="w-full md:w-[50%] flex justify-center items-center h-full mb-10 md:mb-0">
            <div className="border border-cyan-400 rounded-full flex justify-center items-center p-6 sm:p-8 transition-all duration-700 animate-movingborder">
              <div className="bg-cyan-300 h-60 w-60 sm:h-72 sm:w-72 md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
