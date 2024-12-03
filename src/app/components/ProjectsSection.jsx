"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Iphone 15",
    description: "Designed an interactive iPhone 15 website using Three.js and GSAP, featuring dynamic 3D elements and smooth animations to enhance user engagement and visual appeal.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anshdeep0504/Iphone16",
    previewUrl: "https://iphone16-n3b2.vercel.app/",
  },
  {
    id: 2,
    title: "Happy Plum",
    description: "Developed Happy Plum, a platform leveraging OpenAI and the MERN stack to create AI-driven linguistic models, helping students learn new languages and explore diverse cultures interactively.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/happyplum00/happy_plum",
    previewUrl: "https://www.happy-plum.com/",
  },
  {
    id: 3,
    title: "Sneak Head",
    description: "Built Sneak Head, an e-commerce platform using the MERN stack with JWT authentication, a dynamic search bar, real-time cart functionality, and integrated payment gateway, enhanced with a responsive design using Bootstrap.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anshdeep0504/Sneak0",
    previewUrl: "https://youtu.be/-sTyxr_qiNw?si=bMxNxWbBq9yAudbB",
  },
  {
    id: 4,
    title: "Job Portal Backend",
    description: "Developed a job portal using the MERN stack with real-time job updates powered by WebSockets, JWT authentication for secure user sessions, MongoDB for database management, and a responsive UI built with Bootstrap for an intuitive user experience.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"], // Mobile tag
    gitUrl: "https://github.com/anshdeep0504/JOB-PORTAL-MERN",
    previewUrl: "https://github.com/anshdeep0504/JOB-PORTAL-MERN",
  },
  {
    id: 5,
    title: "Chatgpt Clone",
    description: "Created a ChatGPT clone using the MERN stack, integrated with OpenAI's API for conversational AI, featuring real-time query handling, JWT authentication for secure access, and a responsive design with Bootstrap.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anshdeep0504/ChatGPT-clone",
    previewUrl: "https://github.com/anshdeep0504/ChatGPT-clone",
  },
  {
    id: 6,
    title: "Wiehack5.0",
    description: "Created an engaging and user-attractive hackathon website for IEEE, enhancing participant interaction and simplifying the registration process.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "http://wiehack.ieeebvcoe.in/",
    previewUrl: "http://wiehack.ieeebvcoe.in/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* Removed the Web button */}
        {/* Optionally, you can add more tags like "Mobile", or "All" */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
