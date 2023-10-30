import React, { useEffect, useState } from "react";
import logo from "../assets/finallogo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu for mobile devices
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navitems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Industries", path: "blog" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className={`w-full ${isSticky ? "bg-white" : "md:bg-transparent"} fixed top-0 left-0 right-0`}>
      <nav className={`py-4 lg:px-14 px-4`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt=""
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]"></span>RAMZERS
          </a>

          {/* Navitems for large devices */}
          <ul className="md:flex space-x-16 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-lg text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Hamburger menu button for mobile devices */}
          <div className="md:hidden">
            <button
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu content */}
      {isMenuOpen && (
        <div className="bg-white p-4 md:hidden">
          <ul className="space-y-2">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
                  onClick={toggleMenu} // Close menu on click
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
