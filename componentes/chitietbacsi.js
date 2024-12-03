import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  Linking,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import imgnen from '../assets/anhnen.jpg'
import { useNavigation } from '@react-navigation/native';
import request from '../utils/httpRequest';

const backgroundImage1 = { uri: 'https://png.pngtree.com/background/20220729/original/pngtree-abstract-light-grey-world-map-background-picture-image_1856648.jpg' };

const DoctorInformation = ({ route }) => {
  const { doctorId } = route.params; // Assume doctorId is passed via navigation params
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();


  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await request.get(`get-doctor-by-id/${doctorId}`);
        if (response.data.success) {
          setDoctorDetails(response.data.data);
        } else {
          setError(response.data.message || 'Failed to fetch doctor details');
        }
      } catch (err) {
        setError('Unable to connect to the server. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorDetails();
  }, [doctorId]);

  const handlePress = () => {
    if (doctorDetails && doctorDetails.phone) {
      const phoneNumber = `tel:${doctorDetails.phone}`; // Số điện thoại từ API
      Linking.openURL(phoneNumber).catch(err => {
        Alert.alert('Lỗi', 'Không thể thực hiện cuộc gọi');
        console.error(err);
      });
    } else {
      Alert.alert('Lỗi', 'Không tìm thấy số điện thoại');
    }
  };

  const handleChatPress = () => {
    if (doctorDetails && doctorDetails.phone) {
      const zaloUrl = `https://zalo.me/${doctorDetails.phone}`; 
      Linking.openURL(zaloUrl).catch(err => {
        Alert.alert('Lỗi', 'Không thể mở Zalo');
        console.error(err);
      });
    } 
    
  };

  const handleMapPress = () => {
    const latitude = 10.762622; // Thay bằng tọa độ thực tế
    const longitude = 106.660172; // Thay bằng tọa độ thực tế
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(googleMapsUrl).catch(err => {
      Alert.alert('Lỗi', 'Không thể mở bản đồ');
      console.error(err);
    });
  };

  const handleBookingPress = () => {
    if (doctorDetails && doctorDetails.id) {
      // Điều hướng và truyền tham số
      navigation.navigate('DatLichKham', { doctorId: doctorDetails.id, clinic_id: doctorDetails.clinic_id });
    } else {
      Alert.alert('Lỗi', 'Không có số điện thoại của bác sĩ');
    }
  };
  

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00B5F1" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const { name,image, content, phone, description, address } = doctorDetails;

  return (
    <View style={styles.container}>
        <ImageBackground
        source={imgnen}
        style={styles.header}
        resizeMode="cover"
      >
        <View style={{top:35}}>
        <Icon2 name="chevron-left" size={20} color="#00B5F1" style={styles.time} />
        <Text style={styles.headerText}>Thông tin bác sĩ</Text>
        <View style={styles.icons}>
          <Text style={styles.icon}> <Icon2 name="heart" size={16}  style={styles.time} /> Lưu lại   |</Text>
          <Text style={styles.icon}><Icon2 name="heart" size={16}  style={styles.time} /> Hỗ trợ</Text>
        </View>
        </View>
      </ImageBackground>

    <ScrollView >
    
      <View style={styles.profile}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.profileImage}
        />
        <View style={styles.info}>
          <Text style={styles.name}>
          {name}
          </Text>
          <Text style={styles.title}><Icon name="check" size={13}  style={styles.time2} /> Bác sĩ</Text>
          <Text style={styles.experience}>
            Chuyên khoa chỉnh sửa hàm 
            </Text>
        </View>
      </View>

      {/* Schedule */}
      <View style={styles.schedule}>
      <Text  style={{marginLeft:8,marginTop:15,marginBottom:10,marginRight:15,textAlign: 'justify'}}> <Icon name="check" size={10}  style={styles.time3} /> {description}</Text>
      <Text  style={{marginLeft:8,marginBottom:10}}> <Icon name="check" size={10}  style={styles.time3} /> {phone}</Text>
      <Text  style={{marginLeft:8,marginBottom:15}}> <Icon name="check" size={10}  style={styles.time3} /> Giá khám: Xem chi tiết</Text>
      <View style={styles.horizontalLine} />

        <View style={styles.month}>
          <Text>Lịch khám</Text>
          <Text>
            Lịch tháng 11/2024 ▼
          </Text>
        </View>
        <View style={styles.timeSlots}>
        {[' 17:30 - 17:40 ', ' 17:40 - 17:50 ', ' 17:50 - 18:00 '].map((slot, index) => (
          <View key={index} style={styles.slot}>
            <Text>{slot}</Text>
          </View>
        ))}
      <Text  style={{marginLeft:7,marginTop:15}}> <Icon3 name="hand-point-up" size={16}  style={styles.time2} /> Chọn một khung giờ để đặt lịch khám</Text>
        
      </View>
      
      </View>
      {/* Location */}
      <ImageBackground
        source={backgroundImage1}
        style={styles.header2}
        resizeMode="cover"
      >
      <View style={styles.location}>
        <Text style={styles.address}>
          {address}
        </Text>
        <TouchableOpacity style={styles.mapButton} onPress={handleMapPress}>
      <Text style={styles.mapButtonText}>
        <Icon3 name="share" size={14} style={{ color: '#ffffff' }} /> Mở bản đồ
      </Text>
    </TouchableOpacity>
      </View>
      </ImageBackground>

      {/* Introduction */}
      <View style={{backgroundColor:'#ffffff'}}>
      <View style={styles.introduction}>
        <View style={styles.introductionTitle}>
          <Text> <Icon name="paper-plane" size={14}  style={styles.time2} />  Giới thiệu</Text>
        </View>
        <Text style={styles.introductionContent}>
        Theo dõi tiến độ hồi phục và phản ứng của bệnh nhân sau khi điều trị là bước quan trọng trong tiến trình làm việc của bác sĩ. Khi quá trình hồi phục của bệnh nhân không được tiến triển như dự đoán, bác sĩ sẽ bổ sung thêm các loại thuốc hỗ trợ hoặc xem xét phương án chữa trị kết hợp. Trường hợp bệnh nhân có những biểu hiện nguy hiểm như sốc hay gặp các tác dụng phụ, biến chứng, bác sĩ lập tức đưa ra giải pháp cứu vãn tình thế để đảm bảo sức khỏe người bệnh về trạng thái ổn định. Theo dõi tiến độ hồi phục và phản ứng của bệnh nhân sau khi điều trị là bước quan trọng trong tiến trình làm việc của bác sĩ. Khi quá trình hồi phục của bệnh nhân không được tiến triển như dự đoán, bác sĩ sẽ bổ sung thêm các loại thuốc hỗ trợ hoặc xem xét phương án chữa trị kết hợp. Trường hợp bệnh nhân có những biểu hiện nguy hiểm như sốc hay gặp các tác dụng phụ, biến chứng, bác sĩ lập tức đưa ra giải pháp cứu vãn tình thế để đảm bảo sức khỏe người bệnh về trạng thái ổn định.
        Theo dõi tiến độ hồi phục và phản ứng của bệnh nhân sau khi điều trị là bước quan trọng trong tiến trình làm việc của bác sĩ. Khi quá trình hồi phục của bệnh nhân không được tiến triển như dự đoán, bác sĩ sẽ bổ sung thêm các loại thuốc hỗ trợ hoặc xem xét phương án chữa trị kết hợp. Trường hợp bệnh nhân có những biểu hiện nguy hiểm như sốc hay gặp các tác dụng phụ, biến chứng, bác sĩ lập tức đưa ra giải pháp cứu vãn tình thế để đảm bảo sức khỏe người bệnh về trạng thái ổn định. Theo dõi tiến độ hồi phục và phản ứng của bệnh nhân sau khi điều trị là bước quan trọng trong tiến trình làm việc của bác sĩ. Khi quá trình hồi phục của bệnh nhân không được tiến triển như dự đoán, bác sĩ sẽ bổ sung thêm các loại thuốc hỗ trợ hoặc xem xét phương án chữa trị kết hợp. Trường hợp bệnh nhân có những biểu hiện nguy hiểm như sốc hay gặp các tác dụng phụ, biến chứng, bác sĩ lập tức đưa ra giải pháp cứu vãn tình thế để đảm bảo sức khỏe người bệnh về trạng thái ổn định.
        </Text>
      </View>
      </View>
      
    </ScrollView>
    <View style={styles.navbar}>
    <TouchableOpacity style={styles.button2} onPress={handleChatPress}>
      <Text style={styles.buttonText2}>Chat với bác sĩ</Text>
      <Icon3 name="comment-dots" size={20}  style={styles.time2} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Gọi điện</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => handleBookingPress()}>
      <Text style={styles.buttonText}>Đặt khám</Text>
    </TouchableOpacity>
    
  </View>
  
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 10,
    textAlign: 'center',
    position: 'relative',
    height:90,

  },
  horizontalLine: {
    height: 0.7, 
    width: '92%', 
    backgroundColor: '#d3d3d3', 
    left:15
  },
  header2: {
    padding: 5,
    height:67,
  },
  time: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    
  },
  time2: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#00B5F1',
    
  },
  time3: {
    color: '#858C92',
  },
  headerText: {
    color: 'white',
    top:11,
    fontSize:16,
    left:45
  },
  icons: {
    position: 'absolute',
    top: 10,
    right: 5,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
    top:2,
    color: 'white',
    fontSize:14,
  },
  profile: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: '#00B5F1',
    paddingVertical:3
  },
  experience: {
    color: '#666',
  },
  specialties: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  specialty: {
    backgroundColor: '#e9ecef',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  schedule: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop:5
  },
  month: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  day: {
    alignItems: 'center',
  },
  date: {
    backgroundColor: '#007bff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: 'white',
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom:20,
    marginLeft:7
  },
  slot: {
    backgroundColor: '#e9ecef',
    borderRadius: 15,
    padding: 8,
    marginHorizontal:5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  address: {
    flex: 1,
    marginRight:30,
    fontSize:15
  },
  mapButton: {
    backgroundColor: '#00B5F1',
    borderRadius: 20,
    padding: 8,
  },
  mapButtonText: {
    color: 'white',
  },
  introduction: {
    marginBottom:170,
    margin: 15,
  },
  introductionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  introductionContent: {
    marginTop: 10,
    textAlign: 'justify',
  },
  actions: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
  },
  
  primaryButton: {
    backgroundColor: '#007bff',
  },
  primaryButtonText: {
    color: 'white',
  },
  button2: {
    position: 'absolute',
    height: 45,
    paddingHorizontal: 30,
    backgroundColor: '#E2F4FD',
    borderRadius: 5,
    width: 395,
    top:10,
    alignItems:'center',
    borderWidth:1.4,
    borderColor:'#00B5F1'
  },
  button: {
    height: 45,
    backgroundColor: '#00B5F1',
    borderRadius: 5,
    width: 190,
    marginBottom: 10,
    top:65,
    alignItems:'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center', // Align text horizontally
    lineHeight: 43, // Adjust line height to match button height for vertical centering
    textAlignVertical: 'center', // This is useful on Android to center vertically
  },
  buttonText2: {
    fontSize: 18,
    color: '#00B5F1',
    textAlign: 'center', // Align text horizontally
    lineHeight: 43, // Adjust line height to match button height for vertical centering
    textAlignVertical: 'center', // This is useful on Android to center vertically
  },
   navbar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: '#F0F2F5',
    justifyContent: 'space-around',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    height: 150,
  },
});

export default DoctorInformation;
