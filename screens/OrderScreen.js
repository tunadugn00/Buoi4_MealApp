import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList, ScrollView } from 'react-native';
import { useCart } from '../components/CartContext';

export default function OrderScreen({ navigation }) {
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

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name} x {item.quantity}</Text>
      <Text>{(item.price * item.quantity).toFixed(2)} VND</Text>
    </View>
  );

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (!addressDetails.fullName || !addressDetails.phone || !addressDetails.houseNumber || !addressDetails.street || !addressDetails.district || !addressDetails.city) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin địa chỉ giao hàng');
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

  const InputField = ({ label, value, onChangeText, placeholder, keyboardType }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Xác nhận đơn hàng</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Các món đã chọn:</Text>}
      />
      <Text style={styles.totalPrice}>Tổng cộng: {totalPrice.toFixed(2)} VND</Text>
      
      <Text style={styles.sectionTitle}>Thông tin giao hàng:</Text>
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
      
      <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  orderButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom:50,
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
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});