import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT Authentication",
        "Firebase",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git & GitHub",
        "Postman",
        "Bootstrap",
        "SASS",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-b from-gray-950 to-black text-white px-4 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-20"
        >
          Technical <span className="text-blue-400">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:border-blue-500/40 transition"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-lg bg-black/40 border border-white/10 hover:border-blue-400 hover:text-blue-400 transition cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
