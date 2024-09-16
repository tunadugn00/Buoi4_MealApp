// screens/MealsScreen.js
import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { ALL_MEALS } from '../data/mealData';

export default function MealsScreen({ navigation, route }) {
  const { categoryId, categoryName } = route.params;

  const filteredMeals = useMemo(() => {
    return ALL_MEALS.filter(meal => meal.category === categoryId);
  }, [categoryId]);

  const renderMealItem = useCallback(({ item }) => (
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
        <Text style={styles.mealPrepTime}>Thời gian chuẩn bị: {item.prepTime}</Text>
      </View>
    </TouchableOpacity>
  ), [navigation]);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMeals}
        keyExtractor={keyExtractor}
        renderItem={renderMealItem}
        contentContainerStyle={styles.list}
      />
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
    marginBottom: 8,
  },
  mealPrepTime: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
});