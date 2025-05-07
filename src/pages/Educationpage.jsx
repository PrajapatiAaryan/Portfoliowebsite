import React from "react";
import { MdSchool, MdWork } from "react-icons/md";

const educationData = [
  {
    year: "2021-2025",
    title: "Information Technology",
    institution: "Sigma Institute Of Engineering",
    description:
      "Pursued a degree in Information Technology with focus on full stack web development principles and fundamentals.",
  },
  {
    year: "2019-2021",
    title: "Higher Secondary Education",
    institution: "Photon School - Vadodara",
    description:
      "Completed higher secondary education with focus on technical and creative subjects.",
  },
  {
    year: "2017-2019",
    title: "Secondary Education",
    institution: "Kunal Vidhyalaya - Vadodara",
    description:
      "Built a strong foundation in core subjects and developed initial interest in creative pursuits.",
  },
];

const experienceData = [
  {
    year: "Jan 2025 - Present",
    title: "Software Developer Intern",
    company: "Balkrushna Technology - Vadodara",
    points: [
      "Specializing in user-centric mobile app and website designs",
      "Collaborating with the team to build full-stack applications",
      "Writing clean and efficient code with modern frameworks",
    ],
  },
  {
    year: "Oct 2024 - Dec 2024",
    title: "Web Developer Intern",
    company: "BIT Baroda - Vadodara",
    points: [
      "Assisted in developing responsive websites",
      "Improved existing features and performed bug fixes",
    ],
  },
  {
    year: "Sep 2024",
    title: "Web Developer Intern",
    company: "360 Design - Ahmedabad (Online)",
    points: ["Created UI components and optimized user experience"],
  },
];

const Educationpage = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-20 px-4 sm:px-8 xl:px-20 text-white">
      <div className="text-center mb-10 md:py-20">
        <h2 className="text-xl font-bold text-cyan-500">My Journey</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Education & Experience
        </h1>
        <div className="h-1 w-20 bg-cyan-500 mx-auto mt-4"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-10  xl:px-32">
        {/* Education */}
        <div className="md:w-1/2 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gray-800 rounded-full">
              <MdSchool className="text-cyan-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-cyan-500">Education</h3>
          </div>

          {/* Vertical Line visible on all screens */}
          <div className="absolute left-5 top-20 bottom-0 w-0.5 bg-cyan-500 z-0"></div>

          <div className="space-y-10 relative ">
            {educationData.map((edu, index) => (
              <div key={index} className="relative pl-10 ">
                <div className="absolute left-3 top-2 h-5 w-5 bg-cyan-500 rounded-full border-2 border-gray-900 z-10"></div>
                <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:-translate-y-2 transition-all duration-300">
                  <span className="text-cyan-500 bg-gray-800 px-4 py-1 inline-block mb-4">
                    {edu.year}
                  </span>
                  <h4 className="text-xl font-semibold">{edu.title}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-500 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="md:w-1/2 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gray-800 rounded-full">
              <MdWork className="text-red-400 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-red-400">Experience</h3>
          </div>

          {/* Vertical Line visible on all screens */}
          <div className="absolute left-5 top-20 bottom-0 w-0.5 bg-red-400 z-0"></div>

          <div className="space-y-10 relative">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-3 top-2 h-5 w-5 bg-red-400 rounded-full border-2 border-gray-900 z-10"></div>
                <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:-translate-y-2 transition-all duration-300">
                  <span className="text-red-400 bg-gray-800 px-4 py-1 inline-block mb-4">
                    {exp.year}
                  </span>
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-gray-400">{exp.company}</p>
                  <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educationpage;
