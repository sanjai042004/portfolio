import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import ecommerce from "../assets/ecommerce.webp";
import planit from "../assets/planit.webp";
import talksy from "../assets/talksy.webp";
import blog from "../assets/blog.webp";
import weather from "../assets/weather.webp";

export const Projects = () => {
  const projectData = [
    {
      title: "Blog Website (MERN)",
      description:
        "Full-stack MERN blog platform with JWT authentication, protected routes, image upload, RESTful APIs, and MongoDB Atlas integration. Deployed frontend and backend separately.",
      img: blog,
      github: "https://github.com/sanjai042004/Blog_Website/tree/main",
      live: "https://codeverseb.netlify.app",
    },

    {
      title: "planIt Task Manager",
      description:
        "Task management web app built using MERN stack with Firebase Google authentication. Supports user-specific CRUD operations, protected routes, and responsive dashboard UI.",
      img: planit,
      github: "https://github.com/sanjai042004/plantitt",
      live: "https://planitt.vercel.app",
    },

    {
      title: "Talksy Chat Application",
      description:
        "Modern chat application built using React, Node.js, Express, and real-time communication features including typing indicators and online user status.",
      img: talksy,
      github: "https://github.com/sanjai042004/Talksy",
      live: null,
    },

    {
      title: "Weather Website",
      description:
        "React-based weather application using OpenWeatherMap API with city search, real-time data fetching, and unit conversion support.",
      img: weather,
      github: "https://github.com/sanjai042004/weather",
      live: "https://weather-web-a.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gray-950 text-white px-6 py-12 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg group hover:border-blue-500/30 transition"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title} 
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-3 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/60 border border-white/10 hover:bg-gray-700 transition"
                  >
                    <Github size={18} /> Code
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_15px_rgba(30,64,175,0.4)]"
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};