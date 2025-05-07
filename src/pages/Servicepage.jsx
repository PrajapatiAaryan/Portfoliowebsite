import React from "react";

const Servicepage = () => {
  const services = [
    {
      name: "Full Stack Web Development",
      imgsrc: "/web1.svg",
      para: "Building complete web applications using the MERN stack (MongoDB, Express, React, Node.js) with structured backend APIs and dynamic frontend logic.",
    },
    {
      name: "Frontend Development",
      imgsrc: "/web2.svg",
      para: "Creating responsive and interactive UIs using React.js, Tailwind CSS, and JavaScript with strong focus on performance and user experience.",
    },
    {
      name: "Responsive Website Design",
      imgsrc: "/responsive.svg",
      para: "Designing mobile-first, cross-device compatible websites using modern HTML, CSS, Tailwind CSS, and media queries.",
    },
    {
      name: "Landing & Portfolio Websites",
      imgsrc: "/landing.svg",
      para: "Developing professional portfolio and landing pages to showcase personal or business branding with optimized design and SEO.",
    },
    {
      name: "Dashboard & Admin Panels",
      imgsrc: "/dashboard.svg",
      para: "Creating fully functional admin panels with chart integrations, filtering features, theme toggles, and CRUD operations using MERN stack.",
    },
    {
      name: "Backend Development",
      imgsrc: "/backend.svg", // Optional: use a unique icon if available
      para: "Developing secure, scalable backend services and RESTful APIs using Node.js, Express, MongoDB, and SQL databases.",
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
        <div className="xl:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group flash-border-on-hover text-white flex justify-center items-center bg-gray-800 flex-col py-3 md:py-8 gap-4 transition-all duration-800 rounded-md card-gradient-hover z-10 "
              
            >
              <div className="p-2 rounded-full w-fit transition-all duration-1000 group-hover:bg-cyan-500 z-10">
                <div className="bg-white p-2 rounded-full w-fit z-10">
                  <img
                    src={item.imgsrc}
                    alt="html"
                    className="w-12 h-12 object-contain rounded-full"
                  />
                  
                </div>
              </div>
              <h1 className="text-white font-bold text-2xl text-center z-10">{item.name}</h1>
              <p className="text-xl text-gray-500 text-center md:px-16 px-3 z-10">
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
