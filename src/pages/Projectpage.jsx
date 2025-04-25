import React from "react";

const Projectpage = () => {
  const project = [
    {
      name: "Find House Website",
      detail:
        "this is the find house that is made from react vite + tailwind css . with proper responsiveness for all mobile screens and with working coursels",
      imgsrc: "/project1.png",
      link: "http://localhost:4000",
    },
    {
      name: "Find House Website",
      detail:
        "this is the find house that is made from react vite + tailwind css . with proper responsiveness for all mobile screens and with working coursels",
      imgsrc: "/project2.png",
      link: "http://localhost:4000",
    },
    {
      name: "Find House Website",
      detail:
        "this is the find house that is made from react vite + tailwind css . with proper responsiveness for all mobile screens and with working coursels",
      imgsrc: "/project3.png",
      link: "http://localhost:4000",
    },
    {
      name: "Find House Website",
      detail:
        "this is the find house that is made from react vite + tailwind css . with proper responsiveness for all mobile screens and with working coursels",
      imgsrc: "/project4.png",
      link: "http://localhost:4000",
    },
    {
      name: "Find House Website",
      detail:
        "this is the find house that is made from react vite + tailwind css . with proper responsiveness for all mobile screens and with working coursels",
      imgsrc: "/project5.png",
      link: "http://localhost:4000",
    },
    {
      name: "Find House Website",
      detail:
        "this is the find house that is made from react vite + tailwind css . with proper responsiveness for all mobile screens and with working coursels",
      imgsrc: "/project8.png",
      link: "http://localhost:4000",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-950 pt-20 h-full py-10">
        <div className="py-5 md:pb-20">
          <h1 className="text-center text-xl font-bold text-cyan-500">
            My Work
          </h1>
          <h1 className="text-center text-5xl text-white font-bold py-4 ">
            Featured Projects
          </h1>
          <div className="flex justify-center items-center py-5">
            <h1 className="text-center w-20 bg-cyan-500 h-1 "></h1>
          </div>
        </div>
        <div className="md:px-32  w-full flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
            {project.map((item, idx) => (
              <div
                key={idx}
                className=" p-1 rounded-xl shadow-sm shadow-cyan-300 hover:-translate-y-5 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={item.imgsrc}
                  alt="project img"
                  className="h-full w-full rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectpage;
