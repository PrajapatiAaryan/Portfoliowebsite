import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  FaLocationDot,
} from "react-icons/fa6";
import { MdMail, MdPhone } from "react-icons/md";
const Contactpage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-950 pt-20 py-10 w-full">
        <div className="py-5 md:pb-20">
          <h1 className="text-center text-xl font-bold text-cyan-500">
            Get In Touch
          </h1>
          <h1 className="text-center text-4xl sm:text-5xl text-white font-bold py-4">
            Contact Me
          </h1>
          <div className="flex justify-center items-center py-3">
            <div className="w-20 bg-cyan-500 h-1"></div>
          </div>
        </div>

        <div className="flex justify-center items-start flex-col md:flex-row gap-10 px-4 md:px-52">
          {/* Left Section */}
          <div className="bg-gray-800 w-full md:w-[35%] rounded-md p-6 flex flex-col gap-10">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-gray-900 flex justify-center items-center">
                <FaLocationDot className="text-cyan-500 text-2xl" />
              </div>
              <div className="text-white">
                <h1 className="font-semibold text-xl">Location</h1>
                <p className="text-sm">Gotri, Vadodara, Gujarat - 390021</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-gray-900 flex justify-center items-center">
                <MdMail className="text-cyan-500 text-2xl" />
              </div>
              <div className="text-white">
                <h1 className="font-semibold text-xl">Email</h1>
                <p className="text-sm break-all">prajapatiaryan306@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-gray-900 flex justify-center items-center">
                <MdPhone className="text-cyan-500 text-2xl" />
              </div>
              <div className="text-white">
                <h1 className="font-semibold text-xl">Phone</h1>
                <p className="text-sm">+91 951 052 6116</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-1 transition-all duration-300 hover:bg-cyan-300 hover:text-black"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-1 transition-all duration-300 hover:bg-cyan-300 hover:text-black"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="mailto:prajapatiaryan306@gmail.com"
                className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-1 transition-all duration-300 hover:bg-cyan-300 hover:text-black"
              >
                <MdMail className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-800 w-full md:w-[60%] rounded-md p-6 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="bg-gray-950 text-gray-300 placeholder:text-gray-500 text-sm sm:text-lg w-full px-4 py-3 rounded-xl outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-950 text-gray-300 placeholder:text-gray-500 text-sm sm:text-lg w-full px-4 py-3 rounded-xl outline-none"
            />
            <input
              type="tel"
              placeholder="Enter Your Number"
              className="bg-gray-950 text-gray-300 placeholder:text-gray-500 text-sm sm:text-lg w-full px-4 py-3 rounded-xl outline-none"
            />
            <textarea
              placeholder="Enter Your Message"
              rows="5"
              className="bg-gray-950 text-gray-300 placeholder:text-gray-500 text-sm sm:text-lg w-full px-4 py-3 rounded-xl outline-none resize-none"
            ></textarea>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl text-lg w-fit hover:opacity-90 transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
