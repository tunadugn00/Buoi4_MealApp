// components/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (meal, quantity) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === meal.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === meal.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...currentItems, { ...meal, quantity }];
    });
  };

  const removeFromCart = (mealId) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== mealId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (mealId, quantity) => {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === mealId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};