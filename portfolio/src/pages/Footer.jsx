import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
        <p className="text-center text-lg text-gray-400">
          Open to Internship & Junior Developer Opportunities
        </p>

        <div className="flex gap-8">
          <a
            href="https://github.com/sanjai042004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/sanjai04/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Sanjai V. Built with React & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
};
