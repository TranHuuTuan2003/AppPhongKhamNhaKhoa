import React, { useEffect, useState } from 'react';
import { View, Text, Modal,FlatList,Image, StyleSheet,TextInput, ImageBackground, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import imgnen from '../assets/anhnen.jpg'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';  
import request from '../utils/httpRequest';

const LichKham = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [doctorDetails, setDoctorDetails] = useState(null);
  
  const [searchText, setSearchText] = useState('');
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleCancelBooking = async () => {
    if (selectedBooking?.id) {
      setLoading(true);

      try {
        const response = await fetch('http://192.168.0.100:4000/change-status-booking', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: selectedBooking.id,
            status: 'Đã hủy',
          }),
        });

        const data = await response.json();

        if (data.success) {
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Hủy thành công!',
            visibilityTime: 5000,
            autoHide: true,
          });
          fetchBookings();
          closeModal();
        } else {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Hủy thất bại!',
            visibilityTime: 5000,
            autoHide: true,
          });
          fetchBookings();
        }
      } catch (error) {
        // Handle network or API call error
        console.error('Error:', error);
        Alert.alert('Lỗi', 'Có lỗi xảy ra. Vui lòng thử lại!');
      } finally {
        setLoading(false);
      }
    }
  };
  
  // Fetch bookings on component mount
  useEffect(() => {
      fetchBookings();
  }, []);
  
  const fetchBookings = async () => {
      try {
          const response = await request.get('get-list-booking');
          const result = await response.data;
  
          if (result.success) {
              setBookings(result.data);
              setFilteredBookings(result.data);
          } else {
              console.error('Error fetching bookings:', result.error || 'Unknown error');
          }
      } catch (error) {
          console.error('Fetch error:', error);
      }
  };
  
  const handleSearch = (text) => {
      setSearchText(text);
      const trimmedText = text.trim();
      setFilteredBookings(
          trimmedText === ''
              ? bookings
              : bookings.filter(booking =>
                    booking.patient_name.toLowerCase().includes(trimmedText.toLowerCase())
                )
      );
  };
  
  const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB'); // Formats to dd/mm/yyyy
  };
  
  const openModal = async (id) => {
      setSelectedBookingId(id);
      try {
          const bookingResponse = await request.get(`get-booking-by-id/${id}`);
          const bookingResult = await bookingResponse.data;
  
          if (bookingResult.success) {
              setSelectedBooking(bookingResult.data);
  
              if (bookingResult.data.doctor_id) {
                  fetchDoctorDetails(bookingResult.data.doctor_id);
              }
          } else {
              console.error('Error fetching booking details:', bookingResult.error || 'Unknown error');
          }
      } catch (error) {
          console.error('Error fetching booking details:', error);
      }
      setModalVisible(true);
  };
  
  const fetchDoctorDetails = async (doctorId) => {
      try {
          const response = await request.get(`get-doctor-by-id/${doctorId}`);
          const result = await response.data;
  
          if (result.success) {
              setDoctorDetails(result.data);
          } else {
              console.error('Error fetching doctor details:', result.message || 'Unknown error');
          }
      } catch (error) {
          console.error('Error fetching doctor details:', error);
      }
  };
  
  const closeModal = () => {
      setModalVisible(false);
      setSelectedBookingId(null);
      setSelectedBooking(null);
      setDoctorDetails(null);
  };
  
  const renderBooking = ({ item }) => {
      const getBadgeStyles = (status) => {
          switch (status) {
              case 'Chờ xác nhận':
                  return [styles.updatedBadge2, styles.progressBar2];
              case 'Đã xác nhận':
                  return [styles.updatedBadge, styles.progressBar];
              case 'Đã hủy':
                  return [styles.updatedBadge3, styles.progressBar3];
              default:
                  return [styles.updatedBadge, styles.progressBar];
          }
      };
  
      const [badgeStyle, badgeStyle2] = getBadgeStyles(item.status);
  
      return (
          <TouchableOpacity onPress={() => openModal(item.id)}>
              <View style={styles.courseContainer}>
                  <View style={styles.courseTitle}>
                      <Text style={{ marginVertical: 1 }}>
                          <Icon name="user" color="black" size={12} /> {item.patient_name}
                      </Text>
                      <Text style={{ marginVertical: 1 }}>
                          <Icon2 name="calendar" size={12} /> Ngõ 20 Hồ Tùng Mậu, Cầu Giấy
                      </Text>
                      <Text style={{ marginVertical: 1 }}>
                          <Icon name="clock" size={12} /> {formatDate(item.created_at)} | {item.booking_time}
                      </Text>
                  </View>
                  <View style={badgeStyle}>
                      <Text style={styles.updatedText}>{item.status}</Text>
                  </View>
                  <View style={badgeStyle2} />
              </View>
          </TouchableOpacity>
      );
  };
  

    return (
        <View style={styles.container} >
           <ImageBackground
        source={imgnen}
        style={styles.background}
        resizeMode="cover"
      >
                <View style={styles.searchBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={[styles.searchInput]}
                            placeholderTextColor="white"
                            placeholder="Tra cứu phiếu khám"
                            value={searchText}
                            onChangeText={handleSearch}
                        />
                    </View>
                    <Icon2 name="search" size={20} color="#00B5F1" style={styles.iconsearch} />
                    <Icon3 name="home" size={22} color="#FFFFFF" style={{ marginTop: -18, marginLeft: 355 }} />
                    <Icon3 name="filter" size={21} color="#FFFFFF" style={{ marginTop: -22, marginLeft: 325 }} />
                </View>
            </ImageBackground>
            <View style={{ padding: 10 }}>
                <FlatList
                    data={filteredBookings}
                    renderItem={renderBooking}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <View style={styles.navbar}>
                <View style={styles.navbarItem}>
                    <Icon2 name="home" size={24} color="#2F363D" onPress={() => { navigation.navigate('Trangchu') }} />
                    <Text style={styles.navbarText}>Trang chủ</Text>
                </View>
                <View style={styles.navbarItem}>
                    <Icon2 name="user-plus" size={24} color="#2F363D" onPress={() => { navigation.navigate('BacSi') }} />
                    <Text style={styles.navbarText}>Bác sĩ</Text>
                </View>
                <View style={{ alignItems: 'center', marginLeft: 65 }}>
                    <Icon2 name="search" size={24} color="#00B5F1" onPress={() => {
                        navigation.navigate('DanhSachLichKham');
                    }} />
                    <Text style={styles.navbarText2}>Theo dõi</Text>
                </View>
                <TouchableOpacity style={styles.navbarItem} onPress={() => { navigation.navigate('Profile') }}>
                    <Icon2 name="user" size={24} color="#2F363D" />
                    <Text style={styles.navbarText}>Tài khoản</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.floatingButton} onPress={() => { navigation.navigate('DatLichKham') }}>
                <Icon3 name="calendar" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          <Toast ref={(ref) => Toast.setRef(ref)} />

            <Modal
    visible={modalVisible}
    transparent={true}
    animationType="slide"
    onRequestClose={closeModal}
>
    <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
            <View style={
    selectedBooking?.status === 'Đã hủy' ? styles.headerM :
    selectedBooking?.status === 'Chờ xác nhận' ? styles.headerM2 :
    selectedBooking?.status === 'Đã xác nhận' ? styles.headerM3 :
    styles.headerM // default style in case status is undefined or another value
}>
    <Text style={styles.headerTextM}>
        Thông tin lịch khám | {selectedBooking?.status}
    </Text>
</View>

                {selectedBooking ? (
                    <>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Thông tin người khám</Text>
                            <Text style={styles.sectionText3}>
                                <Icon2 name="user" size={15} color="#00B5F1" />  {selectedBooking.patient_name} 
                                <Text style={{ color: '#757575' }}> ({selectedBooking.booking_phone})</Text>
                            </Text>
                            <Text style={styles.sectionText4}>{selectedBooking.booking_sex}</Text>
                            <Text style={styles.sectionText4}>{selectedBooking.booking_email}</Text>
                        </View>
                        <View style={styles.horizontalLine} />
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Thông tin lịch khám</Text>
                            <View style={styles.address}>
    {doctorDetails ? (
        <>
            <Image
                source={{ uri: doctorDetails.image  }}
                style={styles.icon}
            />
            <Text style={styles.sectionText2}>{doctorDetails.name}</Text>
        </>
    ) : (
        <Text>Loading doctor details...</Text>
    )}
</View>
                            <Text style={styles.sectionText}>
                                <Icon2 name="map-pin" size={15} color="#00B5F1" />  470 - 472 Lê Hồng Phong, Phường 1, Quận 10, TP. Hồ Chí Minh
                            </Text>
                            <Text style={styles.sectionText}>
                                <Icon2 name="clock" size={15} color="#00B5F1" />  {formatDate(selectedBooking.booking_date)} | {selectedBooking.booking_time}
                            </Text>
                            <Text style={styles.sectionText}>
                                <Icon2 name="alert-circle" size={15} color="#00B5F1" />  {selectedBooking.notes}
                            </Text>
                            {selectedBooking?.status === 'Chờ xác nhận' && (
   <TouchableOpacity style={styles.button} onPress={handleCancelBooking} disabled={loading}>
   <Icon2 name="x-square" size={20} color="#FF873C" style={{ marginTop: 7 }} />
   <Text style={styles.buttonText}>Hủy</Text>
 </TouchableOpacity>

)}

                        </View>
                    </>
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        </View>
    </TouchableWithoutFeedback>
</Modal>

      
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    height:100,
    
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingLeft: 40,
    height: 35,
    top: 30,
    width: 310,
    zIndex: 0,
    color:'#FFFFFF'
},

  courseContainer: {
    flexDirection: 'row',
   
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    position: 'relative',

    shadowColor: '#d3d3d3',
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderWidth:0.5,
    borderColor:'#d3d3d3',
  },
  courseImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  courseTitle: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    marginRight:20
  },
  updatedBadge: {
    height:24,
    backgroundColor: '#00B5F1',
    borderRadius: 9,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  updatedBadge2: {
    height:24,
    backgroundColor: '#FF873C',
    borderRadius: 9,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  updatedBadge3: {
    height:24,
    backgroundColor: 'red',
    borderRadius: 9,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  updatedText: {
    color: '#ffffff',
    fontSize: 12,
  },
  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 1,
    backgroundColor: '#00B5F1',
    width:'105%'
  },
  progressBar2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 1,
    backgroundColor: '#FF873C',
    width:'105%'
  },
  progressBar3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 1,
    backgroundColor: 'red',
    width:'105%'
  },
  iconsearch: {
    color: '#fff',
   left:10,
   
   top:2
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
  navbarText2: {
    fontSize: 14,
    color: '#00B5F1',
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
    bottom: 735,
    zIndex: 0,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Làm mờ nền
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '85%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  headerM: {
    backgroundColor: 'red',
    padding: 13,
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width:'100%'
  },
  headerM2: {
    backgroundColor: '#FF873C',
    padding: 10,
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width:'100%'
  },
  headerM3: {
    backgroundColor: '#00B5F1',
    padding: 10,
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width:'100%'
  },
  headerTextM: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    color: '#757575',
    marginBottom: 7,
  },
  sectionText4: {
    color: '#757575',
    marginBottom: 7,
    marginLeft:23
  },
  sectionText2: {
    color: '#00B5F1',
  },
  sectionText3: {
    color: '#00B5F1',
    marginBottom: 7,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusText: {
    color: '#009688',
    marginLeft: 5,
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addressText: {
    flex: 1,
    color: '#757575',
  },
  moreText: {
    color: '#009688',
    textAlign: 'right',
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 15,
    borderRadius:'50%'
  },
  horizontalLine: {
    height: 0.7, 
    width: '92%', 
    backgroundColor: '#d3d3d3', 
    left:15
  },

  button: {
    marginTop:10,
    height: 40,
    paddingHorizontal: 12,
    backgroundColor: '#ffe7ce',
    borderWidth:1,
    borderColor:'#FF873C',
    borderRadius: 5,
    width: '100%',
  },

  buttonText: {
    marginTop:-20,
    fontSize: 18,
    color: '#FF873C',
    textAlign: 'center', // Align text horizontally
    textAlignVertical: 'center', // This is useful on Android to center vertically
  },
});

export default LichKham;
