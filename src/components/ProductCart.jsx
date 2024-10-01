import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/shop?category=${product.category}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full max-w-sm bg-white border border-gray-300 rounded-lg mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
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
                  i < product.rating.rate ? "text-yellow-300" : "text-gray-200 "
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
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click event
              navigate(`/shop?category=${product.category}`);
            }}
            className="text-white bg-teal-800 hover:bg-teal-900 font-semibold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
