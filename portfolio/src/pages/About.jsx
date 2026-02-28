import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-950 text-white px-6 py-20 flex justify-center"
    >
      <div className="max-w-4xl w-full">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.10 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-10"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            I'm <span className="text-blue-400 font-semibold">Sanjai</span>, a
            MERN Stack Developer with hands-on experience building
            full-stack web applications from frontend to backend.
            <br /><br />
            I have developed projects that include authentication,
            protected routes, RESTful APIs, CRUD operations, and
            responsive UI using React and Tailwind CSS. I focus on
            writing clean, maintainable code and building
            production-ready applications.
            <br /><br />
            Currently seeking a MERN Internship or Junior Developer
            role where I can contribute to real-world projects and
            grow in a professional development environment.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};