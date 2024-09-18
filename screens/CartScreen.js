// screens/CartScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../components/CartContext';
import { useTheme } from '../components/ThemeContext';

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { isDarkMode } = useTheme();
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={[styles.itemName, isDarkMode && styles.lightText]}>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
          <Text style={[styles.quantityButton, isDarkMode && styles.lightText]}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.quantity, isDarkMode && styles.lightText]}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
          <Text style={[styles.quantityButton, isDarkMode && styles.lightText]}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeButton}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={[styles.emptyCart, isDarkMode && styles.lightText]}>Giỏ hàng trống</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={[styles.totalText, isDarkMode && styles.lightText]}>Tổng cộng: {totalPrice.toFixed(2)} VND</Text>
        <TouchableOpacity 
          style={styles.checkoutButton} 
          onPress={() => navigation.navigate('Order', { fromCart: true })}
          disabled={cartItems.length === 0}
        >
          <Text style={styles.checkoutButtonText}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    flex: 1,
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  removeButton: {
    color: 'red',
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkContainer: {
    backgroundColor: '#333',
    
  },
  darkCategoryItem: {
    // Adjust if needed
  },
  darkOverlay: {
    backgroundColor: '#333',
  },
  lightText: {
    color: '#fff',
  },
});