import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "#home", width: "w-12" },
    { name: "About", href: "#about", width: "w-12" },
    { name: "Education", href: "#education", width: "w-12" },
    { name: "Skill", href: "#skills", width: "w-8" },
    { name: "Service", href: "#service", width: "w-14" },
    { name: "Projects", href: "#projects", width: "w-[4.3rem]" },
    { name: "Contact Me", href: "#contact", width: "w-24" },
  ];

  return (
    <div className="fixed w-full z-50 bg-gray-950 text-white">
      <nav className="flex justify-between   items-center  sm:px-10 xl:px-20 py-5 w-full px-3" >
        {/* Logo */}
        <a href="#home " className="cursor-pointer" >
        <div className="text-3xl sm:text-4xl font-bold">
          Prajapati
          <span className="text-cyan-500 font-semibold">Aryan</span>
        </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg text-gray-400 font-bold">
          {navLinks.map((link, index) => (
            <li key={index} className="group hover:text-white cursor-pointer flex flex-col">
              <a href={link.href} className="relative pb-2">
                {link.name}
                <span
                  className={`bg-cyan-500 h-0.5 w-0 group-hover:${link.width} rounded-2xl transition-all duration-500 absolute bottom-0 left-0`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-center bg-gray-900 text-white text-lg font-semibold gap-6 py-6">
          {navLinks.map((link, index) => (
            <li key={index} onClick={closeMenu} className="hover:text-cyan-400">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
