import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/off-plan", label: "Off Plan" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full shadow-md fixed top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">Logo</div>
        {/* desktop menu  */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 font-medium transition ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        {/* mobile toggle menu  */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* mobile slide menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-5 flex flex-col gap-4 pt-20">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-gray-700 hover:text-blue-600 font-medium text-lg"
              onClick={
                () => setIsOpen(false) // close on click
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* overlay when menu opens  */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
