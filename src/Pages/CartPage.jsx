import React from "react";
import { toast, Bounce } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext"; 

function CartPage() {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, clearCart, deleteFromCart } =
    useCart();

  const totalPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.price.slice(4)) * item.quantity;
  }, 0);

  const handleIncrement = (product) => {
    addToCart(product);
    toast.success(`${product.title} Incremented In Cart`, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      removeFromCart(product);
    }
    toast.success(`${product.title} Decremented From Cart`, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleDelete = (product) => {
    deleteFromCart(product);
    toast.success(`${product.title} Deledted From Cart`, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const getPrice = (price) => {
    return parseFloat(price.slice(4)); 
  };

  return (
    <div className="py-16 font-serif bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-sans font-bold text-center text-green-700 mb-12">
          Your Cart 👉
        </h2>
        {cart.length === 0 ? (
          <div className="text-center text-xl text-gray-700">
            <p className="font-serif font-semibold">Your cart is empty! 🤭</p>
            <div className="mt-4 flex justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/515/488/small_2x/empty-cart-flat-illustration-concept-vector.jpg"
                alt="Your cart is Empty"
                className="w-80 h-80 shadow-2xl shadow-gray-950 rounded-3xl object-contain"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={() => (window.location.href = "/shop")}
                className="px-6 py-3 bg-green-600 text-white font-semibold font-serif text-lg rounded-lg hover:bg-green-700 transition"
              >
                Shop Now 🫡
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {cart.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow flex items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-grow">
                  <p className="font-semibold text-lg">{product.title}</p>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-green-700 font-bold">{product.price}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => handleDecrement(product)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(product)}
                      className="px-3 py-1 bg-green-500 text-white rounded-lg"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-2 text-gray-700">
                    <p className="text-lg font-semibold">
                      Total Price: Rs:{" "}
                      {getPrice(product.price) * product.quantity}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(product)}
                  className="ml-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
                >
                  Delete
                </button>
              </div>
            ))}

            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={() => {
                  clearCart();
                  toast.success("🗑️ Your Cart has been cleared", {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                  });
                }}
                className="px-6 py-3 bg-red-600 text-white font-semibold text-lg rounded-lg hover:bg-red-700 transition"
              >
                Clear Cart
              </button>

              <button
                onClick={() => {
                  toast.success("✅ Redirecting to Payment...", {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                  });
                  setTimeout(() => {
                    navigate("/payment", { state: { totalPrice } });
                  }, 1600);
                }}
                className="px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
