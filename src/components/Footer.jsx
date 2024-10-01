import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="bg-teal-800 p-6 text-white"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Hanger</h2>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold md:ml-24 mb-2">Navigate</h3>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/shop" className="hover:underline">
              Shop
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 ml-5">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white hover:text-gray-300 w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-gray-300 w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-gray-300 w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-gray-300 w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-200 text-center">
          © 2024 Hanger. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
