// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Danh mục món ăn' }} />
        <Stack.Screen name="Meals" component={MealsScreen} options={({ route }) => ({ title: route.params.categoryName })} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={({ route }) => ({ title: route.params.mealName })}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}