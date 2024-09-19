import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import OrderScreen from './screens/OrderScreen';
import CartScreen from './screens/CartScreen';
import { FavoritesProvider } from './components/FavoritesContext';
import { CartProvider } from './components/CartContext';
import { ThemeProvider } from './components/ThemeContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function CategoriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{ title: 'Danh mục món ăn' }} 
      />
      <Stack.Screen 
        name="Meals" 
        component={MealsScreen} 
        options={({ route }) => ({ title: route.params.categoryName })} 
      />
      <Stack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
        options={({ route }) => ({ title: route.params.mealName })}
      />
      <Stack.Screen 
        name="Order" 
        component={OrderScreen} 
        options={{ title: 'Đặt hàng' }}
      />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="FavoritesList" 
        component={FavoritesScreen} 
        options={{ title: 'Yêu thích' }} 
      />
      <Stack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
        options={({ route }) => ({ title: route.params.mealName })}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'CategoriesTab') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'FavoritesTab') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="CategoriesTab" 
        component={CategoriesStack} 
        options={{ 
          title: 'Danh mục',
          headerShown: false
        }} 
      />
      <Tab.Screen 
        name="FavoritesTab" 
        component={FavoritesStack} 
        options={{ 
          title: 'Yêu thích',
          headerShown: false
        }} 
      />
      <Tab.Screen name="Cart" component={CartScreen} options={{ title: 'Giỏ hàng' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Cài đặt' }} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={TabNavigator} 
        options={{ 
          title: 'Trang chủ',
          headerShown: true
        }}
      />
      <Drawer.Screen 
        name="FavoritesDrawer" 
        component={FavoritesStack} 
        options={{ title: 'Yêu thích' }} 
      />
      <Drawer.Screen 
        name="CartDrawer" 
        component={CartScreen} 
        options={{ title: 'Giỏ hàng' }} 
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Cài đặt' }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <CartProvider>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </CartProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}