import React from "react";

const Skillspage = () => {
  const skils = [
    { name: "HTML", imgsrc: "/html1.png" },
    { name: "CSS", imgsrc: "/css1.png" },
    { name: "JavaScript", imgsrc: "/js1.png" },
    { name: "React", imgsrc: "/React.png" },
    { name: "Node js", imgsrc: "/node1.png" },
    { name: "Express js", imgsrc: "/express.png" },
    { name: "Monogodb", imgsrc: "/mongodb.jpeg" },
    { name: "SQL", imgsrc: "/sql.png" },
    { name: "Tailwind Css", imgsrc: "/tailwind.png" },
    { name: "Python ", imgsrc: "/python.jpeg" },
    { name: "Bootstrap ", imgsrc: "/bootstrap.jpeg" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-950 pt-20 h-full py-10">
        <div className="py-5 md:pb-20">
          <h1 className="text-center text-xl font-bold text-cyan-500">
            My Skills
          </h1>
          <h1 className="text-center text-5xl text-white font-bold py-4">
            What I'm Good At
          </h1>
          <div className="flex justify-center items-center py-5">
            <h1 className="text-center w-20 bg-cyan-500 h-1 "></h1>
          </div>
        </div>
        <div className="xl:px-32">
          <div className="px-8">
            <h1 className="text-3xl font-bold text-white">
              Design & Development Tools
            </h1>
            <h1 className="h-1 w-22 bg-cyan-300 my-4"></h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8">
            {skils.map((item, idx) => (
              <div
                key={idx}
                className="group flash-border-on-hover text-white flex justify-center items-center border border-gray-600 bg-gray-800 flex-col py-4 md:py-8 gap-4 transition-all duration-200 rounded-md hover:bg-gray-900"
              >
                {/* Image with hover background change */}
                <div className="p-2 rounded-full w-fit transition-all duration-1000 group-hover:bg-cyan-500">
                  <div className="bg-white p-2 rounded-full w-fit">
                    <img src={item.imgsrc} alt="html" className="w-10 h-10 object-contain" />
                  </div>
                </div>

                {/* Skill Name */}
                <h1 className="text-white font-bold text-2xl">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillspage;
