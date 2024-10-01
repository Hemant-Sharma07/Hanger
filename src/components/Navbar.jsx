import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
  };

  const NavbarLinks = [
    {
      name: "Home",
      path: "/",
      key: 1,
    },
    {
      name: "Shop",
      path: "/shop",
      key: 2,
    },
    {
      name: "About",
      path: "/about",
      key: 3,
    },
    {
      name: "Contact us",
      path: "/contact",
      key: 4,
    },
  ];

  return (
    <motion.nav
      className="bg-teal-800 p-4 shadow-md"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link to="/">Hanger</Link>
        </div>

        {/* desktop view container starts here */}

        <div className="hidden md:flex space-x-6 font-sans font-semibold">
          {NavbarLinks.map((item) => {
            return (
              <NavLink
                to={item.path}
                key={item.key}
                className="text-white px-3 py-2 rounded transition-transform transform hover:-translate-y-1"
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center space-x-6">
          <NavLink to="/cart" className="text-white flex items-center">
            <FaShoppingCart className="w-6 h-6 hover:text-gray-100" />
          </NavLink>
          <NavLink to="/login">
            <button className="bg-white text-teal-800 hover:bg-gray-100 font-semibold py-2 px-4 rounded">
              Log in
            </button>
          </NavLink>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* desktop view container ends here */}

      {/* mobile view container starts here */}

      <motion.div
        className="md:hidden flex flex-col items-center space-y-4 mt-4"
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
      >
        {NavbarLinks.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.path}
              className="text-white px-3 py-2 rounded transition-transform transform hover:-translate-y-1"
              onClick={toggleMenu}
            >
              {item.name}
            </NavLink>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
