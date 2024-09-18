import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useTheme } from '../components/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ToastAndroid } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);

  const handleLanguageChange = () => {
    Alert.alert('Thay đổi ngôn ngữ', 'Tính năng này sẽ được triển khai trong tương lai.');
  };

  const handleClearCache = () => {
    Alert.alert('Xóa bộ nhớ cache', 'Bạn có chắc chắn muốn xóa bộ nhớ cache?', [
      { text: 'Hủy', style: 'cancel' },
      { 
        text: 'Xóa', 
        onPress: () => {
          // Code để xóa bộ nhớ cache ở đây
          ToastAndroid.show('Đã xóa cache', ToastAndroid.SHORT); // Thêm thời gian hiển thị thông báo
        }
      }
    ]);
  };

  const handleSupport = () => {
    Alert.alert('Liên hệ hỗ trợ', 'Email: dungtuanmai@gmail.com\nSố điện thoại: 09876 54321');
  };

  const SettingItem = ({ title, onPress, value, isSwitch }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <Text style={[styles.settingText, isDarkMode && styles.lightText]}>{title}</Text>
      {isSwitch ? (
        <Switch
          value={value}
          onValueChange={onPress}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        />
      ) : (
        <Icon name="chevron-right" size={24} color={isDarkMode ? '#fff' : '#000'} />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <SettingItem title="Chế độ tối" onPress={toggleTheme} value={isDarkMode} isSwitch />
      <SettingItem title="Ngôn ngữ" onPress={handleLanguageChange} />
      <SettingItem title="Thông báo" onPress={() => setNotificationsEnabled(!notificationsEnabled)} value={notificationsEnabled} isSwitch />
      <SettingItem title="Xóa bộ nhớ cache" onPress={handleClearCache} />
      <SettingItem title="Liên hệ hỗ trợ" onPress={handleSupport} />
      <SettingItem title="Chính sách quyền riêng tư" onPress={() => navigation.navigate('Privacy')} />
      <SettingItem title="Điều khoản sử dụng" onPress={() => navigation.navigate('Terms')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
    color: '#000',
  },
  lightText: {
    color: '#fff',
  },
});