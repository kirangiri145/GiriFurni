import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext); // Custom hook to use the context
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add an item to the cart
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      // If product already in cart, increase quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If product is not in cart, add it
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove one item from the cart (decrement)
  const removeFromCart = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0)); // Remove item if quantity is 0
  };

  // Delete item completely from the cart
  const deleteFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id)); // Remove item by id
  };

  // Clear all items in the cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total item count in the cart
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, deleteFromCart, getCartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
