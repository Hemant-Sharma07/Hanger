import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="p-4 bg-gray-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-6 text-center">
            About Us
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 mb-6">
              At Hanger, we believe in providing high-quality apparel and
              accessories to enhance your wardrobe. Our journey began with a
              simple idea: to offer a curated selection of stylish and
              affordable clothing for everyone. We are passionate about fashion
              and committed to delivering the best shopping experience.
            </p>
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              Our mission is to make fashion accessible and enjoyable for all.
              We strive to offer a diverse range of products that cater to
              different tastes and preferences, ensuring that you find something
              you love. We are dedicated to excellent customer service and aim
              to exceed your expectations with every purchase.
            </p>
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              Meet the Team
            </h2>
            <p className="text-gray-700 mb-6">
              Our team is composed of passionate fashion enthusiasts who are
              dedicated to bringing you the latest trends and timeless classics.
              Each member brings unique skills and experiences to the table,
              working together to create a shopping experience that you'll love.
            </p>
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700">
              We'd love to hear from you! If you have any questions or feedback,
              please don't hesitate to reach out to us. You can contact us via
              email at support@hanger.com or follow us on our social media
              channels for the latest updates and promotions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
