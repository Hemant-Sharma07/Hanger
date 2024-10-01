import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/api";
import Loader from "../components/Loader";
import { useCart } from "../contexts/CartContext"; // Import the useCart hook
import { motion } from "framer-motion";

const Shop = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // Popup state
  const [popupMessage, setPopupMessage] = useState("");
  const { addToCart, itemCount } = useCart(); // Use the addToCart and itemCount

  useEffect(() => {
    const getProducts = async () => {
      try {
        let productsData = await fetchProducts();

        if (category) {
          productsData = productsData.filter(
            (product) => product.category === category
          );
        }

        if (productsData.length < 50) {
          const duplicates = Math.ceil(50 / productsData.length);
          productsData = Array(duplicates)
            .fill(productsData)
            .flat()
            .slice(0, 50);
        }

        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [category]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.title} added to cart!`);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="shop text-center p-4">
      <h1 className="text-4xl text-teal-800 font-bold mb-10 mt-6">
        Our {category ? `${category} ` : ""}Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-300 rounded-lg mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="#">
              <img
                className="w-full h-48 object-contain rounded-t-lg"
                src={product.image}
                alt={product.title}
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {product.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`rating-${product.id}-${i}`}
                      className={`w-4 h-4 ${
                        i < product.rating.rate
                          ? "text-yellow-300"
                          : "text-gray-200 "
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                  {product.rating.rate}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-white bg-teal-800 hover:bg-teal-900 font-semibold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Message */}
      {showPopup && (
        <motion.div
          className="fixed top-4 left-[30%] transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-lg shadow-lg z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {popupMessage}
        </motion.div>
      )}
    </div>
  );
};

export default Shop;
