// screens/CategoriesScreen.js
import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from '../components/ThemeContext';

const CATEGORIES = [
  { id: '1', name: 'Món chính', image: 'https://tiki.vn/blog/wp-content/uploads/2023/07/thumb-12.jpg' },
  { id: '2', name: 'Món tráng miệng', image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamhiep/2016/08/09/1_11.jpg' },
  { id: '3', name: 'Món khai vị', image: 'https://pos.nvncdn.com/033a84-66619/album/albumCT/20200309_8zAOE4n6yA1HRlwk1nQSRfgP.jpg' },
  { id: '4', name: 'Món chay', image: 'https://statics.vincom.com.vn/xu-huong/0-0-0-0-mon-chay-ngon/image30.png' },
  { id: '5', name: 'Ăn vặt', image: 'https://vielimousine.com/wp-content/uploads/2023/08/an-van-vung-tau-17.jpg' },
  { id: '6', name: 'Đồ uống', image: 'https://lamaca.vn/wp-content/uploads/2021/08//c%C3%A1ch-l%C3%A0m-mojito-2-840x500.jpg' },
];

export default function CategoriesScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, isDarkMode && styles.darkCategoryItem]}
      onPress={() => navigation.navigate('Meals', { categoryId: item.id, categoryName: item.name })}
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <View style={[styles.overlay, isDarkMode && styles.darkOverlay]}>
        <Text style={[styles.categoryName, isDarkMode && styles.lightText]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  listContainer: {
    padding: 10,
  },
  categoryItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  darkCategoryItem: {
    // Adjust if needed
  },
  darkOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  lightText: {
    color: '#fff',
  },
});