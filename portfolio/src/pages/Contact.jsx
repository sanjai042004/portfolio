import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import contactImg from "../assets/contact.png";
import { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://portfolio-c5n3.onrender.com/api/contact/send",
        form,
      );

      setToast({
        type: "success",
        message: "Message sent successfully!",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setToast({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-gray-950 text-white px-6 py-20 flex justify-center"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-xl z-50 text-white
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-72 sm:w-96 md:w-full max-w-md rounded-2xl shadow-lg opacity-90"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
            Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-6"
          >
            <div>
              <label className="text-gray-300 flex items-center gap-2 mb-2">
                <User size={18} /> Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-gray-300 flex items-center gap-2 mb-2">
                <Mail size={18} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-gray-300 flex items-center gap-2 mb-2">
                <MessageSquare size={18} /> Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white outline-none focus:border-blue-500 transition"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_20px_rgba(30,64,175,0.4)] font-medium disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
