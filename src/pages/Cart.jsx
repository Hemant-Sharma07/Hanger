import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2 gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="text-white bg-teal-800 hover:bg-teal-900 py-1 px-3 font-semibold  rounded"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="text-white bg-teal-800 hover:bg-teal-900 py-1 px-3 font-semibold  rounded"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 mt-2 block font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="text-lg font-semibold">
              Subtotal: ${calculateSubtotal().toFixed(2)}
            </div>
            <button className="text-white bg-teal-800 hover:bg-teal-900 font-semibold py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      <div className="mt-6 text-center">
        <button
          className="text-white bg-teal-800 hover:bg-teal-900 font-semibold py-2 px-4 rounded"
          onClick={() => navigate("/shop")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
