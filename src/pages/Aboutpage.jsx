import React from "react";

const Aboutpage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-950 w-full pt-20">
        <div className="">
          <h1 className="text-center text-xl font-bold text-cyan-500">
            About Me
          </h1>
          <h1 className="text-center text-5xl text-white font-semibold py-4">
            Who Am I?
          </h1>
          <div className="flex justify-center items-center py-5">
            <h1 className="text-center w-20 bg-cyan-500 h-1 "></h1>
          </div>
        </div>
        <div className="flex justify-center items-center lg:px-48 w-full">
          <div className="flex gap-5 flex-col lg:flex-row  justify-center items-center w-full">
            <div className="w-[80%] lg:w-[44%]  text-white h-full ">
              <div className="lg:p-10 transition-all duration-100 ">
                <img
                  src="/who am i.webp"
                  alt="left side image"
                  className="hover:scale-110 transition-transform duration-500 h-full w-full"
                />
              </div>
            </div>
            <div className="w-full lg:w-[50%] min-h-[50vh] text-white flex flex-col justify-center pt-20 sm:px-10 px-4">
              <h1 className="md:text-3xl text-2xl font-bold px-3 py-3">
                Full Stack Web Developer Building Dynamic & Scalable Web
                Solutions
              </h1>
              <h1 className="h-1 bg-cyan-500 w-14 mb-10 rounded-2xl ml-3"></h1>
              <p className="text-gray-500 text-xl py-3 px-3 ">
                I am a dedicated Full Stack Web Developer specializing in the
                MERN stack, committed to delivering high-performance web
                applications that offer seamless user experiences and robust
                backend functionality.
              </p>
              <p className="text-gray-500 text-xl py-3 px-3">
                With hands-on experience in MongoDB, Express.js, React, and
                Node.js, I focus on crafting scalable, responsive, and intuitive
                digital products that align with business goals and user
                expectations.
              </p>
              <div className="flex justify-between w-full  px-4 lg:py-7 flex-col md:flex-row">
                <div className="py-2">
                  <h1 className="text-cyan-500 text-xl font-bold">Name:</h1>
                  <h1 className=" text-xl">Prajapati Aaryan</h1>
                </div>
                <div className="">
                  <h1 className="text-cyan-500 text-xl font-bold">Email:</h1>
                  <h1 className=" text-xl">prajapatiaryan306@gmail.com</h1>
                </div>
              </div>
              <div className="flex justify-between w-full  px-4  md:py-7 flex-col md:flex-row">
                <div className="py-2">
                  <h1 className="text-cyan-500 text-xl font-bold">Phone:</h1>
                  <h1 className=" text-xl">+91 9510526116</h1>
                </div>
                <div className="pr-13">
                  <h1 className="text-cyan-500 text-xl font-bold">Location:</h1>
                  <h1 className=" text-xl">Gotri ,Vadodara , Gujarat</h1>
                </div>
              </div>
              <div className="px-4 py-2">
                <button className="flex justify-center px-4 py-3 border border-cyan-400 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-700 text-white text-xl  cursor-pointer hover:scale-110 shadow-lg shadow-blue-500 transition-all duration-500">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
