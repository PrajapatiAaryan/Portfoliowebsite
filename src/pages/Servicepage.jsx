import React from "react";

const Servicepage = () => {
  const services = [
    {
      name: "Full Stack Web Development",
      imgsrc: "/web1.svg",
      para: "Developing complete web applications using MongoDB, Express, React, and Node.js — including both admin and user panels.",
    },
    {
      name: "Frontend Development ",
      imgsrc: "/web2.svg",
      para: "Building fast and interactive UI with React.js, including state management, component architecture, and dynamic frontend logic.",
    },
    {
      name: "Responsive Website Design",
      imgsrc: "/responsive.svg",
      para: "Crafting modern and mobile-friendly websites using HTML, CSS, Tailwind CSS, and JavaScript to ensure seamless user experience on all devices.",
    },
    {
      name: "Landing & Portfolio Websites",
      imgsrc: "/landing.svg",
      para: "Creating eye-catching and optimized landing pages or portfolio websites that highlight personal branding or business services.",
    },
    {
      name: "Dashboard & Admin Panels",
      imgsrc: "/dashboard.svg",
      para: "Developing interactive dashboards with chart integration, filters, dark/light mode toggles, and fully customizable components.",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-950 pt-20 h-full py-10">
        <div className="py-5 md:pb-20">
          <h1 className="text-center text-xl font-bold text-cyan-500">
            My Services
          </h1>
          <h1 className="text-center text-5xl text-white font-bold py-4">
            What I Offer
          </h1>
          <div className="flex justify-center items-center py-5">
            <h1 className="text-center w-20 bg-cyan-500 h-1 "></h1>
          </div>
        </div>
        <div className="md:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group flash-border-on-hover text-white flex justify-center items-center border border-gray-600 bg-gray-800 flex-col py-3 md:py-8 gap-4 transition-all duration-200 rounded-md hover:bg-gray-900"
            >
              <div className="p-2 rounded-full w-fit transition-all duration-1000 group-hover:bg-cyan-500">
                <div className="bg-white p-2 rounded-full w-fit">
                  <img
                    src={item.imgsrc}
                    alt="html"
                    className="w-12 h-12 object-contain rounded-full"
                  />
                  
                </div>
              </div>
              <h1 className="text-white font-bold text-2xl text-center">{item.name}</h1>
              <p className="text-xl text-gray-500 text-center md:px-16 px-3">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Servicepage;
