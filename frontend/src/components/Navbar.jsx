import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/offer", label: "Offer" },
    { to: "/case-study", label: "Case Study" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <div className="absolute top-[30px] left-0 w-full flex justify-center z-50">
      <div className="bg-[#111954]/60 backdrop-blur-md backdrop-saturate-150 text-white w-full md:w-[90%] lg:w-[90%] px-8 py-4 rounded-full shadow-[0_0_20px_rgba(17,25,84,0.6)] flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-blue-400">BE</span>AGENCY
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-full font-semibold text-sm"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 mt-4 w-full bg-[#111954]/60 backdrop-blur-md backdrop-saturate-150 rounded-xl shadow-[0_0_20px_rgba(17,25,84,0.6)] py-6 px-8 flex flex-col gap-4 z-50 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition ${
                    isActive ? "text-blue-400" : "text-white"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
