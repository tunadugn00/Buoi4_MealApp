// screens/FavoritesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useFavorites } from '../components/FavoritesContext';
import { ALL_MEALS } from '../data/mealData';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  const favoriteMeals = ALL_MEALS.filter(meal => favorites.includes(meal.id));

  const renderMealItem = ({ item }) => (
    <TouchableOpacity
      style={styles.mealItem}
      onPress={() => navigation.navigate('MealDetail', { mealId: item.id, mealName: item.name })}
    >
      <Image source={{ uri: item.image }} style={styles.mealImage} />
      <View style={styles.mealInfo}>
        <Text style={styles.mealName}>{item.name}</Text>
        <Text style={styles.mealDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {favoriteMeals.length > 0 ? (
        <FlatList
          data={favoriteMeals}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.emptyText}>Bạn chưa có món ăn yêu thích nào.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  list: {
    padding: 10,
  },
  mealItem: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  mealImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  mealInfo: {
    padding: 15,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mealDescription: {
    fontSize: 14,
    color: '#666',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});