import React from "react";

const Projectpage = () => {
  const project = [
    {
      name: "Find House Website",
      detail:
        "This website is built with React + Vite and Tailwind CSS. It is fully responsive and includes working carousels.",
      imgsrc: "/project1.png",
      link: "https://your-live-project-link-or-video.com",
    },
    {
      name: "Portfolio Website",
      detail:
        "A modern personal portfolio built using React and Tailwind, showcasing my projects and contact form.",
      imgsrc: "/project2.png",
      link: "https://your-live-project-link-or-video.com",
    },
    {
      name: "E-Commerce Site",
      detail:
        "An e-commerce UI with cart functionality, product filters, and responsive design using React.",
      imgsrc: "/project3.png",
      link: "https://your-live-project-link-or-video.com",
    },
    {
      name: "Blog Platform",
      detail:
        "Simple blog platform frontend built using React and Markdown rendering.",
      imgsrc: "/project4.png",
      link: "https://your-live-project-link-or-video.com",
    },
    {
      name: "Task Manager App",
      detail:
        "Task manager with drag-and-drop features and persistent data using localStorage.",
      imgsrc: "/project5.png",
      link: "https://your-live-project-link-or-video.com",
    },
    {
      name: "Weather App",
      detail:
        "Weather forecast app fetching data from an API and styled with Tailwind.",
      imgsrc: "/project8.png",
      link: "https://your-live-project-link-or-video.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20 h-full py-10">
      <div className="py-5 md:pb-20">
        <h1 className="text-center text-xl font-bold text-cyan-500">
          My Work
        </h1>
        <h1 className="text-center text-5xl text-white font-bold py-4">
          Featured Projects
        </h1>
        <div className="flex justify-center items-center py-5">
          <h1 className="text-center w-20 bg-cyan-500 h-1"></h1>
        </div>
      </div>

      <div className="md:px-32 w-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {project.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-sm shadow-cyan-300 hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.imgsrc}
                alt="project img"
                className="h-full w-full object-cover rounded-xl"
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
      </div>
    </div>
  );
};

export default Projectpage;

