import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, ImageBackground ,length} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';

const backgroundImage = { uri: 'https://anhdepfree.com/wp-content/uploads/2018/11/Blue-Wallpaper-hinh-nen-mau-xanh-27.jpg' };
const doctors = [
  {
    name: 'GS.TS.BS Hà Văn Quyết',
    image: 'https://storage.googleapis.com/a1aa/image/ggGbZCSu0t5AD1g00iJ7ysFGWbM6HfbCC7HNsOfMMfC646fOB.jpg',
    address: '34 Đại Cồ Việt, Lê Đại Hành, Hai Bà Trưng, Hà Nội, Việt Nam',
    specialty: 'Tiêu hóa - Gan mật tụy',
    phone: '038376433',
  },
  {
    name: 'PGS.TS.BS Kiều Đình Hùng',
    image: 'https://storage.googleapis.com/a1aa/image/hemSWU43xOSsB66aidudPm5qqWZnJvcKeaBRza6ZTtkbc9vTA.jpg',
    address: '14 Trần Bình Trọng, Trần Hưng Đạo, Hai Bà Trưng, Hà Nội, Việt Nam',
    specialty: 'Chấn thương chỉnh hình - Cột sống',
    phone: '038376433',
  },
  {
    name: 'PGS.TS.BS Nguyễn Trọng',
    image: 'https://storage.googleapis.com/a1aa/image/EkVpHBKCJlLjIprz8b9wES3UiHIVq1fTJMNecYQZkeflx1fdC.jpg',
    address: '52 Bà Triệu, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội, Việt Nam',
    specialty: 'Nội Thần kinh',
    phone: '038376433',
  }, {
    name: 'PGS.TS.BS Bảo Nam',
    image: 'https://nguoinoitieng.tv/images/nnt/106/0/bi95.jpg',
    address: '52 Bà Triệu, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội, Việt Nam',
    specialty: 'Nội Thần kinh',
    phone: '038376433',
  },
  {
    name: 'PGS.TS.BS Nguyễn An',
    image: 'https://img4.thuthuatphanmem.vn/uploads/2021/01/10/hinh-anh-anh-bac-si-cuoi-rat-tuoi_021520571.jpg',
    address: '52 Bà Triệu, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội, Việt Nam',
    specialty: 'Nội Thần kinh',
    phone: '038376433',
  }
];

export default function DoctorSearchScreen({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (text) => {
    setSearchText(text);

    if (text.trim() === '') {
      setFilteredDoctors(doctors);
    } else {
      const filtered = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredDoctors(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <ImageBackground
          source={backgroundImage}
          style={styles.background}
          resizeMode="cover"
        >
      <View style={styles.searchBar}>
      <View style={{ flexDirection: 'row'}}>
          <Icon2 name="chevron-left" size={20} color="#00B5F1" style={styles.headerText2} />
        <Text style={styles.headerText}>Danh sách bác sĩ</Text>
        <Icon3 name="home" size={20} color="#00B5F1" style={styles.headerText3} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
              style={[styles.searchInput]}
              placeholderTextColor="white"
              placeholder="Nhập tên bác sĩ ..."
              value={searchText}
              onChangeText={handleSearch} // Gọi hàm tìm kiếm khi người dùng nhập
            />
      </View>
      <Icon2 name="search" size={20} color="#00B5F1" style={styles.iconsearch} />
      </View>

      </ImageBackground>
      

      {/* Doctor Cards */}
      <ScrollView style={{ padding: 10 }}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <View key={index} style={styles.doctorCard}>
              <View style={styles.doctorCard2}>
                <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
                <View style={styles.doctorInfo}>
                  <Text style={styles.doctorName}>{doctor.name}</Text>
                  <TouchableOpacity style={styles.bookButton}>
                    <Icon name="calendar-alt" size={14} color="white" />
                    <Text style={styles.bookButtonText}> Đặt lịch</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.favorite}>
                  <Icon name="heart" size={20} color="gray" />
                </TouchableOpacity>
              </View>
              <Text style={styles.address}>
                <Icon name="map-marker-alt" size={12} color="gray" /> {doctor.address}
              </Text>
              {doctor.specialty && (
                <Text style={styles.specialty}>
                  <Icon name="stethoscope" size={12} color="gray" /> {doctor.specialty}
                </Text>
              )}
              {doctor.phone && (
                <Text style={styles.phone}>
                  <Icon name="phone" size={12} color="gray" /> {doctor.phone}
                </Text>
              )}
            </View>
          ))
        ) : (
          <Text style={{flex: 1, justifyContent: 'center',textAlign:'center',top:20}}>Không tìm thấy bác sĩ nào.</Text>
        )}
        <View style={{ marginBottom: 140 }}></View>
      </ScrollView>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  header: {
    backgroundColor: '#00B5F1',
    color: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 18,
    color: 'white',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  filterText: {
    color: 'white',
    marginLeft: 5,
  },
  searchBar: {
    padding: 20,
    justifyContent: 'center',
    height:140,
    alignItems:'center'
    
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 35,
    top: 37,
    width: 370,
    zIndex: 0,
    color:'#FFFFFF'
},

 
  doctorCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#00B5F1',
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderWidth:0.5,
    borderColor:'#00B5F1',
    
  },
  doctorCard2: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    marginBottom:10,
  },

  doctorImage: {
    borderRadius:'50%',
    width: 70,
    height: 70,
    marginRight: 10,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 17,
    top:5
  },
  address: {
    color: 'gray',
    fontSize: 13,
    marginVertical: 2,
    padding:4
  },
  specialty: {
    color: 'gray',
    fontSize: 13,
    padding:4
  },
  phone: {
    color: '#FF873C',
    fontSize: 13,
    padding:4,

  },
  price: {
    color: 'red',
    fontSize: 14,
    marginVertical: 2,
  },
  bookButton: {
    height:27,
    width:96,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00B5F1',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginTop:17
  },
  bookButtonText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 4,
  },
  favorite: {
    padding: 7,
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
    borderRadius: '50%',
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
    bottom: 735,
    zIndex: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    top: 20,
    right:7
  },
  headerText2: {
    color: '#fff',
    fontSize: 24,
    top: 19,
    right:89
  },
  headerText3: {
    color: '#fff',
    fontSize: 23,
    top: 21,
    left:82
  },
  iconsearch: {
    color: '#fff',
   left:160,
   
   top:10
  },
});
