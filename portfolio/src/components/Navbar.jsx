import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-gray-900/40 backdrop-blur-lg py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        <a
          href="#home"
          className="text-2xl font-bold text-white flex items-center gap-2 tracking-wide"
          >
          Sanjai 
          <span className="text-blue-400">
            <Code size={22} />
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group cursor-pointer"
            >
              <a
                href={item.link}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </a>

              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gray-900/90 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-5 text-gray-300"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-lg"
              >
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block hover:text-blue-400 transition"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};