import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useCart } from '../components/CartContext';
import { useTheme } from '../components/ThemeContext';
import { ToastAndroid } from 'react-native';

const InputField = ({ label, value, onChangeText, placeholder, keyboardType }) => {
  const { isDarkMode } = useTheme();
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.inputLabel, isDarkMode && styles.darkText]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isDarkMode && styles.darkInput,
          isDarkMode && styles.darkText
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={isDarkMode ? '#888' : '#999'}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const AddressForm = ({ addressDetails, setAddressDetails }) => {
  const { isDarkMode } = useTheme();
  return (
    <View>
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>Thông tin giao hàng:</Text>
      <InputField
        label="Họ tên"
        value={addressDetails.fullName}
        onChangeText={(text) => setAddressDetails({...addressDetails, fullName: text})}
        placeholder="Nhập họ tên người nhận"
      />
      <InputField
        label="Số điện thoại"
        value={addressDetails.phone}
        onChangeText={(text) => setAddressDetails({...addressDetails, phone: text})}
        placeholder="Nhập số điện thoại liên lạc"
        keyboardType="phone-pad"
      />
      <View style={styles.rowContainer}>
        <View style={styles.halfWidth}>
          <InputField
            label="Số nhà"
            value={addressDetails.houseNumber}
            onChangeText={(text) => setAddressDetails({...addressDetails, houseNumber: text})}
            placeholder="Số nhà"
          />
        </View>
        <View style={styles.halfWidth}>
          <InputField
            label="Đường"
            value={addressDetails.street}
            onChangeText={(text) => setAddressDetails({...addressDetails, street: text})}
            placeholder="Tên đường"
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.halfWidth}>
          <InputField
            label="Quận/Huyện"
            value={addressDetails.district}
            onChangeText={(text) => setAddressDetails({...addressDetails, district: text})}
            placeholder="Quận/Huyện"
          />
        </View>
        <View style={styles.halfWidth}>
          <InputField
            label="Thành phố"
            value={addressDetails.city}
            onChangeText={(text) => setAddressDetails({...addressDetails, city: text})}
            placeholder="Tỉnh/Thành phố"
          />
        </View>
      </View>
      <InputField
        label="Ghi chú"
        value={addressDetails.note}
        onChangeText={(text) => setAddressDetails({...addressDetails, note: text})}
        placeholder="Thông tin bổ sung (tùy chọn)"
      />
    </View>
  );
};

export default function OrderScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const { cartItems, clearCart } = useCart();
  const [addressDetails, setAddressDetails] = useState({
    fullName: '',
    phone: '',
    houseNumber: '',
    street: '',
    district: '',
    city: '',
    note: ''
  });

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  

  const handleOrder = () => {
    if (!addressDetails.fullName || !addressDetails.phone || !addressDetails.houseNumber || !addressDetails.street || !addressDetails.district || !addressDetails.city) {
      ToastAndroid.show('Vui lòng điền đầy đủ thông tin\n địa chỉ giao hàng', ToastAndroid.LONG);
    return;
    }

    const fullAddress = `${addressDetails.fullName}, ${addressDetails.phone}, ${addressDetails.houseNumber} ${addressDetails.street}, ${addressDetails.district}, ${addressDetails.city}${addressDetails.note ? '\nGhi chú: ' + addressDetails.note : ''}`;

    Alert.alert(
      'Đặt hàng thành công',
      `Đơn hàng của bạn sẽ được giao đến:\n\n${fullAddress}\n\nTổng giá trị: ${totalPrice.toFixed(2)} VND`,
      [{ 
        text: 'OK', 
        onPress: () => {
          clearCart();
          navigation.navigate('CategoriesTab');
        }
      }]
    );
  };

  const renderCartItems = () => (
    cartItems.map((item, index) => (
      <View key={index} style={styles.cartItem}>
        <Text style={[styles.cartItemText, isDarkMode && styles.darkText]}>{item.name} x {item.quantity}</Text>
        <Text style={[styles.cartItemText, isDarkMode && styles.darkText]}>{(item.price * item.quantity).toFixed(2)} VND</Text>
      </View>
    ))
  );

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Xác nhận đơn hàng</Text>
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>Các món đã chọn:</Text>
      {renderCartItems()}
      <Text style={[styles.totalPrice, isDarkMode && styles.darkText]}>Tổng cộng: {totalPrice.toFixed(2)} VND</Text>
      <AddressForm addressDetails={addressDetails} setAddressDetails={setAddressDetails} />
      <TouchableOpacity
        style={[styles.orderButton, isDarkMode && styles.darkOrderButton]}
        onPress={handleOrder}
      >
        <Text style={styles.orderButtonText}>Xác nhận đặt hàng</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  darkInput: {
    borderColor: '#555',
    backgroundColor: '#333',
    color: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  orderButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: '#007AFF',
  },
  darkOrderButton: {
    backgroundColor: '#0A84FF',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cartItemText: {
    color: '#000',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});