import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-teal-800 font-bold text-center mb-8">
        Contact Us
      </h1>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row md:space-x-8 mb-12">
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-2xl text-teal-800 font-semibold mb-4">
            Contact Information
          </h2>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-teal-800 text-2xl mr-3" />
            <span className="text-lg">contact@hanger.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-teal-800 text-2xl mr-3" />
            <span className="text-lg">+1 234 567 890</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-teal-800 text-2xl mr-3" />
            <span className="text-lg">
              123 Hanger St, Fashion City, FC 12345
            </span>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-800 text-white font-semibold py-2 px-4 rounded hover:bg-teal-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
