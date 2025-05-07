import React, { useState } from "react";
import TiltedCard from "../components/TiltedCard";
const Projectpage = () => {
  const projectsData = [
    {
      name: "Real Estate Website UI",
      detail: "A sleek and responsive real estate website UI built with React and Tailwind CSS, featuring property listings, filters, and a modern layout for an engaging user experience.",
      imgsrc: "/project1.png",
      link: "https://findhouse-indol.vercel.app/",
      technology: "React + Tailwind",
    },
    {
      name: "Expense Tracker Web App",
      detail: "A modern and responsive expense tracking application built with React and Tailwind CSS. Users can add, edit, and delete transactions, and visualize their spending through interactive bar and pie charts. Includes a clean UI, dark/light theme toggle, and localStorage for data persistence without a backend.",
      imgsrc: "/project2.png",
      link: "https://expensetracker-liard-ten.vercel.app/",
      technology: "React + Tailwind",
    },
    {
      name: "Landing Page Website",
      detail: "A visually appealing and responsive landing page built with HTML, CSS, and JavaScript, showcasing clean design and smooth user interface transitions.",
      imgsrc: "/project3.png",
      link: "https://octanet-augest-task1.vercel.app/",
      technology: "React + Tailwind",
    },
    {
      name: "To-Do List App",
      detail: "A simple and efficient to-do list web app using HTML, CSS, and JavaScript, allowing users to add, complete, and delete tasks with a clean user interface.",
      imgsrc: "/project4.png",
      link: "https://octanet-august-task2.vercel.app/",
      technology: "React + Tailwind",
    },
    {
      name: "Ecommart eCommerce Website",
      detail: `A fully functional eCommerce website built with the MERN stack, featuring product listings, cart management, and a smooth shopping experience. ${"https://ecommart-six.vercel.app/"}`,
      imgsrc: "/project5.png",
      link: "https://drive.google.com/file/d/13R_9nuJhFS7KYivSd1tI1WvQ52m3K0jS/view?usp=sharing",
      technology: "Node.js",
    },
    {
      name: "Personal Portfolio Website",
      detail: "A responsive portfolio website showcasing projects, skills, and services, built with React and Tailwind CSS to highlight web development expertise and personal branding.",
      imgsrc: "/project8.png",
      link: "https://your-live-project-link-or-video.com",
      technology: "HTML, CSS, JS",
    },
    
  ];
  const categories = ["All", "HTML, CSS, JS", "React + Tailwind", "Node.js"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setfilter] = useState("All")
  const filterprojects = filter == "All"?projectsData : projectsData.filter((item)=>item.technology=== filter)
  const filterprojectfunction = (filter)=>{
    setSelectedCategory(filter);
    setfilter(filter)
  }
  
  return (
    <div className="min-h-screen bg-gray-950 pt-20 h-full py-10">
      <div className="py-5 md:pb-12">
        <h1 className="text-center text-xl font-bold text-cyan-500">My Work</h1>
        <h1 className="text-center text-5xl text-white font-bold py-4">
          Featured Projects
        </h1>
        <div className="flex justify-center items-center py-5">
          <h1 className="text-center w-20 bg-cyan-500 h-1"></h1>
        </div>
      </div>
      <div className="flex justify-center items-center pb-8">
      <ul className="flex items-center gap-4 flex-wrap justify-center">
        {categories.map((item, idx) => (
          <li
            key={idx}
            onClick={() => filterprojectfunction(item)}
            className={`flex justify-center items-center font-semibold text-xl cursor-pointer w-fit p-3 rounded-2xl transition-all duration-500 ${
              selectedCategory === item
                ? "bg-gradient-to-r from-cyan-500 to-blue-400 text-black transition-all duration-500"
                : "bg-transparent border border-gray-400 text-gray-500 transition-all duration-500"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

      <div className="xl:px-32 w-full flex justify-center items-center">
        {/* laptop view */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {filterprojects.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-sm shadow-cyan-300 hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.imgsrc}
                alt="project img"
                className="h-full w-full object-cover rounded-xl"
                onClick={()=>window.location.href=`${item.link}`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-sm mb-4">{item.detail}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}    
        </div>
        {/* mobiel / tablet view */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 " >
          {filterprojects.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col p-2 rounded-xl shadow-sm shadow-cyan-300  border border-cyan-200  h-full w-full"
             border>
              <img
                src={item.imgsrc}
                alt="project img"
                className="h-full w-full object-contain rounded-xl"
                
              />
              <div className=" text-white flex flex-col justify-center items-center p-4 text-center">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-sm mb-4">{item.detail}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}    
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
