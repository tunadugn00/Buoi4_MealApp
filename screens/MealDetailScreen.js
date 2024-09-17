// screens/MealDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { ALL_MEALS } from '../data/mealData';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../components/FavoritesContext';
import { useCart } from '../components/CartContext';

export default function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params;
  const meal = ALL_MEALS.find(m => m.id === mealId);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons 
          name={isFavorite(mealId) ? "heart" : "heart-outline"} 
          size={24} 
          color={isFavorite(mealId) ? "red" : "black"} 
          style={{ marginRight: 15 }}
          onPress={() => toggleFavorite(mealId)}
        />
      ),
    });
  }, [navigation, isFavorite, toggleFavorite, mealId]);

  const handleAddToCart = () => {
    addToCart(meal, 1);
    Alert.alert(
      "Thành công",
      `Đã thêm ${meal.name} vào giỏ hàng`,
      [{ text: "OK" }]
    );
  };

  if (!meal) {
    return <Text style={styles.errorText}>Không tìm thấy món ăn</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        <Image 
          source={{ uri: meal.image }} 
          style={styles.image}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            console.log(`Failed to load image for ${meal.name}`);
            setIsLoading(false);
          }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{meal.name}</Text>
        <Text style={styles.description}>{meal.description}</Text>
        <Text style={styles.price}>Giá: {meal.price} VND</Text>
        <Text style={styles.sectionTitle}>Nguyên liệu:</Text>
        {meal.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
        ))}
        <Text style={styles.prepTime}>Thời gian chuẩn bị: {meal.prepTime}</Text>
        <TouchableOpacity style={styles.orderButton} onPress={handleAddToCart}>
          <Text style={styles.orderButtonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007AFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 14,
    marginLeft: 10,
  },
  prepTime: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 10,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  orderButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});