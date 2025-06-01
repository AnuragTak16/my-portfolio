import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Technology", path: "/tech-stack" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-full flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-900 tracking-tight">
          Anurag<span className="text-yellow-400">•</span>
          <span className="text-gray-800">Portfolio</span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 mt-4 md:mt-0 text-gray-700 font-medium tracking-wide">
        {navItems.map(({ name, path }, index) => (
          <li key={index} className="relative group">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `transition duration-200 ease-in-out ${
                  isActive ? "text-blue-900" : "text-gray-700"
                }`
              }
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-2 w-full text-gray-700 font-medium md:hidden">
          {navItems.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition duration-200 ease-in-out ${
                    isActive ? "text-blue-900" : "text-gray-700"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
