// components\FavoritesContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from AsyncStorage when the app starts
    loadFavorites();
  }, []);

  useEffect(() => {
    // Save favorites to AsyncStorage whenever it changes
    saveFavorites();
  }, [favorites]);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites !== null) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const saveFavorites = async () => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const toggleFavorite = (mealId) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(mealId)) {
        return currentFavorites.filter(id => id !== mealId);
      } else {
        return [...currentFavorites, mealId];
      }
    });
  };

  const isFavorite = (mealId) => {
    return favorites.includes(mealId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);