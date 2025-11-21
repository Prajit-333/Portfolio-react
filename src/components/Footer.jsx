import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 ">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Prajit</h2>
          <p className="text-gray-400 mt-4">
            Crafting digital experiences that inspire and engage through
            innovative design and cutting-edge technology.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 shadow shadow-blue-400 transition">
              <Github className="text-blue-400" />
            </a>
            <a href="#" className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 shadow shadow-blue-400 transition">
              <Linkedin className="text-blue-400" />
            </a>
            <a href="#" className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 shadow shadow-blue-400 transition">
              <Twitter className="text-blue-400" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <a
            href="#top"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition"
          >
            <ArrowUp size={16} /> Back to Top
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2024 Prajit. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 md:mt-0">
          Made with <span className="text-red-400">❤</span> using React & GSAP
        </p>
      </div>
    </footer>
  );
}
