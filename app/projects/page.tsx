import Image from "next/image";
import React from "react";

const projects = [
  {
    id: 1,
    name: "Drowing room for family time",
    description:
      "Bedroom with a clean and comfortable design for your family. charming whit a modern design.",
    image: "/image/project3.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Kitchen look modern and clean",
    description:
      "kitchen look modern and clean. charming whit a modern design.",
    image: "/image/project2.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Perfect living room for family time",
    description:
      "Drowing room with a clean and comfortable design for your family. charming whit a modern design.",
    image: "/image/project4.png",
    link: "",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-cover bg-center">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          Our Projects
        </h1>
      </div>

      <div className="container grid gap-8 py-8 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl"
          >
            <div>
              <Image
                src={project.image}
                alt=""
                width={480}
                height={380}
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-96 translate-y-full flex-col items-center justify-end gap-32 bg-white/90 from-transparent to-black p-12 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 dark:bg-black/90">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
