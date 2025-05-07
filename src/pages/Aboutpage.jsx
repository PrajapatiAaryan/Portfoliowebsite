import React from "react";

const Aboutpage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // path to the file in public folder
    link.download = "cv.pdf"; // downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white w-full pt-20">
        <div className="">
          <h1 className="text-center text-xl font-bold text-cyan-500">
            About Me
          </h1>
          <h1 className="text-center text-5xl  font-semibold py-4">
            Who Am I?
          </h1>
          <div className="flex justify-center items-center py-5">
            <h1 className="text-center w-20 bg-cyan-500 h-1 "></h1>
          </div>
        </div>
        <div className="flex justify-center items-center px-3 xl:px-48 w-full">
          <div className="flex flex-col lg:flex-row  justify-center items-center w-full ">
            <div className="w-[80%] xl:w-[44%]  h-full lg:pt-16 xl:pt-0">
              <div className="xl:p-10 p-2 transition-all duration-100 ">
                <img
                  src="/who am i.webp"
                  alt="left side image"
                  className="hover:scale-110 transition-transform duration-500 h-full w-full"
                />
              </div>
            </div>
            <div className="w-full xl:w-[50%] min-h-[50vh]  flex flex-col justify-center pt-20 sm:px-10 px-4 ">
              <h1 className="xl:text-3xl text-2xl font-bold px-3 py-3">
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
              <div className="flex justify-between w-full  px-4 lg:py-7 flex-col md:flex-row md:items-center">
                <div className="py-2">
                  <h1 className="text-cyan-500 text-xl font-bold">Name:</h1>
                  <h1 className=" text-xl">Prajapati Aaryan</h1>
                </div>
                <div className="">
                  <h1 className="text-cyan-500 text-xl font-bold">Email:</h1>
                  <h1 className=" text-xl">prajapatiaryan306@gmail.com</h1>
                </div>
              </div>
              <div className="flex justify-between w-full  px-4  md:py-7 flex-col md:flex-row md:items-center">
                <div className="py-2">
                  <h1 className="text-cyan-500 text-xl font-bold">Phone:</h1>
                  <h1 className=" text-xl">+91 9510526116</h1>
                </div>
                <div className="pr-13">
                  <h1 className="text-cyan-500 text-xl font-bold">Location:</h1>
                  <h1 className=" text-xl">Gotri ,Vadodara , Gujarat</h1>
                </div>
              </div>
              <div className="px-4 py-2 pb-5 pt-5">
                <a target="_blank" href="/cv.pdf">
                <button
                  onClick={handleDownload}
                  className="flex justify-center px-4 py-3 border border-cyan-400 rounded-xl bg-gradient-to-r from-orange-700 to-purple-700 text-white text-xl  cursor-pointer hover:scale-110 shadow-md shadow-yellow-500 transition-all duration-500"
                >
                  Download CV
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;



