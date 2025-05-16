import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Technology", path: "/tech-stack" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="text-2xl font-extrabold text-blue-900 tracking-tight">
        Anurag<span className="text-yellow-400">•</span>
        <span className="text-gray-800">Portfolio</span>
      </div>

      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium tracking-wide">
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
    </nav>
  );
};
