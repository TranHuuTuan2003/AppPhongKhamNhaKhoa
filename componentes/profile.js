import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

const backgroundImage = { uri: 'https://anhdepfree.com/wp-content/uploads/2018/11/Blue-Wallpaper-hinh-nen-mau-xanh-27.jpg' };

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
       <ImageBackground
          source={backgroundImage}
          style={styles.background}
          resizeMode="cover"
        ></ImageBackground>
         <LinearGradient
            colors={['rgba(255, 255, 255, 0)', '#FFFFFF']}
            style={styles.overlay}
          />
      <View style={{marginTop:-140}}>
        <View style={styles.header}>
          <Image style={styles.chatIcon} source={{ uri: 'https://cdn.bookingcare.vn/fo/w640/2024/03/27/151956-chatboticon.png' }} />
          <Text style={styles.headerTitle}>Chưa là thành viên?</Text>
          <Text style={styles.headerSubtitle}>Đăng ký hoặc đăng nhập ngay</Text>
          <TouchableOpacity style={styles.button}>
            <Icon name="user" size={16} color="white" />
            <Text style={styles.buttonText}> Đăng ký / Đăng nhập</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menu}>
          <MenuItem icon="folder" color="#007bff" text="Hồ sơ y tế" />
          <MenuItem icon="heart" color="#ff4d4d" text="Danh sách quan tâm" />
          <MenuItem icon="map-marker-alt" color="#007bff" text="Quản lý sổ địa chỉ" last />
        </View>

        <View style={styles.menu}>
          <MenuItem icon="exclamation-circle" color="#800080" text="Điều khoản và Quy định" />
          <MenuItem icon="users" color="#00cc66" text="Tham gia cộng đồng" />
          <MenuItem icon="share-alt" color="#ff66b2" text="Chia sẻ ứng dụng" />
          <MenuItem icon="headset" color="#00ccff" text="Liên hệ & hỗ trợ" />
          <MenuItem icon="cog" color="#666" text="Cài đặt" last />
        </View>

        <Text style={styles.footer}>Version 3.2.12 (2024190901) - Prod - PUBLISHED</Text>
      </View>
      <View style={styles.navbar}>
        <View style={styles.navbarItem}>
          <Icon2 name="home" size={24} color="#2F363D" onPress={() => { navigation.navigate('Trangchu' )}} />
          <Text style={styles.navbarText}>Trang chủ</Text>
        </View>
        <View style={styles.navbarItem}>
          <Icon2 name="user-plus" size={24} color="#2F363D"  onPress={() => { navigation.navigate('BacSi' )}}/>
          <Text style={styles.navbarText}>Bác sĩ</Text>
        </View>
        <View  style={{alignItems: 'center',marginLeft:65}} >
          <Icon2 name="search" size={24} color="#2F363D" />
          <Text style={styles.navbarText}>Theo dõi</Text>
        </View>
        <TouchableOpacity style={styles.navbarItem} onPress={() => { navigation.navigate('Profile' )}}>
          <Icon2 name="user" size={24} color="#2F363D" />
          <Text style={styles.navbarText}>Tài khoản</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={() => { navigation.navigate('DatLichKham' )}}>
        <Icon3 name="calendar" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = ({ icon, color, text, last }) => (
  <TouchableOpacity style={[styles.menuItem, last && styles.lastMenuItem]}>
    <Icon name={icon} size={20} color={color} style={styles.menuIcon} />
    <Text style={styles.menuText}>{text}</Text>
    <Icon2 name="chevron-right" size={18} color="#ccc" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  background: {
    height: 180,
    alignItems: 'center',
    
  },
  header: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    marginHorizontal:20,

    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    zIndex: 2,
    borderWidth:0.5,
    borderColor:'#FFFFFF'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#666',
    marginVertical: 5,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#00B5F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  menu: {
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 10,
    margin: 10,
    marginHorizontal:20,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 2,
    zIndex: 2,
    borderWidth:0.5,
    borderColor:'#FFFFFF'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  lastMenuItem: {
    borderBottomWidth: 0, // Remove the border for the last item
  },
  menuIcon: {
    marginRight: 15,
    marginLeft:10
  },
  menuText: {
    flex: 1,
    fontSize: 15,
  },
  footer: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginVertical: 15,
    shadowOpacity: 0.18,
  },
  chatIcon: {
    width: 75,
    height: 75,
    marginBottom:15,
    borderColor: 'red',
    shadowColor: '#64B9E5',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
  },
  navbar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: '#F0F2F5',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 23,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.40,
    shadowRadius: 5,
    borderRadius:20
  },
  navbarItem: {
    alignItems: 'center',
  },
  navbarText: {
    fontSize: 14,
    color: '#2F363D',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 58,
    left: '50%',
    transform: [{ translateX: -30 }],
    backgroundColor: '#00B5F1',
    borderRadius: 50,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#00B5F1',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 4,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 715,
    zIndex: 0,
  },
});

export default Profile;
