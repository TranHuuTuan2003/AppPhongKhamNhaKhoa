import React, { useState, useEffect } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import Toast from 'react-native-toast-message';  // Import Toast
import styles from '../css/stylesDatLichKham';
import request from '../utils/httpRequest';
const backgroundImage = { uri: 'https://anhdepfree.com/wp-content/uploads/2018/11/Blue-Wallpaper-hinh-nen-mau-xanh-27.jpg' };

const AppointmentForm = ({route,navigation}) => {
  const [specialty, setSpecialty] = useState('');
  const [doctor, setDoctor] = useState('');
  const [map, setMap] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [patient, setPatient] = useState('');
  const [notes, setNotes] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [clinicList, setClinicList] = useState([]);
  const [showDOBPicker, setShowDOBPicker] = useState(false);
  const [showAppointmentDatePicker, setShowAppointmentDatePicker] = useState(false);
  const { doctorId = 0 } = route.params || {};
  const { clinic_id = 0 } = route.params || {};
  const { timeSlot = 0 } = route.params || {};

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await request.get('get-all-doctor');
        if (response.data.success) {
          const doctorList = response.data.data.map((doctor) => ({
            label: doctor.name,
            value: doctor.id,
          }));
          setDoctors(doctorList);
        } else {
          console.error('Failed to fetch doctors:', response.data.error);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error.message);
      }
    };

    const fetchClinicList = async () => {
      try {
        const response = await request.get('get-list-clinic');
        if (response.data.success) {
          const formattedData = response.data.data.map((item) => ({
            label: item.name,
            value: item.id,
          }));
          setClinicList(formattedData);
        }
      } catch (error) {
        console.error('Error fetching clinic list:', error.message);
      }
    };

    fetchDoctors();
    fetchClinicList();
  }, []);

  const handleDateChange = (event, selectedDate, type) => {
    const currentDate = selectedDate || (type === 'dob' ? dateOfBirth : appointmentDate);
    type === 'dob' ? setDateOfBirth(currentDate) : setAppointmentDate(currentDate);
    type === 'dob' ? setShowDOBPicker(false) : setShowAppointmentDatePicker(false);
  };

  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
  };

  const resetForm = () => {
    setSpecialty('');
    setDoctor('');
    setMap('');
    setDateOfBirth(new Date());
    setAppointmentDate(new Date());
    setTime('');
    setPhone('');
    setEmail('');
    setPatient('');
    setNotes('');
  };

  const handleBooking = async () => {
    if((!patient || !phone || !email || !specialty || !doctor || !map || !appointmentDate || !time) && (!patient || !phone || !email || !specialty || !doctorId || !clinic_id || !appointmentDate || !time)) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Thông báo',
        text2: 'Vui lòng điền đầy đủ thông tin bắt buộc!',
        visibilityTime: 5000,
        autoHide: true,
        style: {
          backgroundColor: '#FF4D4D', // Red background for error
          padding: 20, // More padding
          borderRadius: 10, // Rounded corners
          alignSelf: 'center', // Center alignment
          marginTop: 20, // Margin from top
        },
        textStyle: {
          fontSize: 18,
          color: 'white',
          fontWeight: 'bold',
        },
      });
      
      return;
    }

    const bookingData = {
      status: 'Chờ xác nhận',
      doctor_id: doctor,
      patient_name: patient,
      booking_date: appointmentDate.toISOString().split('T')[0],
      booking_time: time,
      notes,
      booking_email: email,
      booking_phone: phone,
      clinic_id: map,
      booking_sex: specialty,
    };

    try {
      const response = await request.post('insert-booking', bookingData);
      if (response.data.success) {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Đặt lịch thành công!',
          visibilityTime: 5000,
          autoHide: true,
        });
        resetForm();
      } else {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Lỗi khi đặt lịch',
          text2: `Lỗi: ${response.data.error || 'Không rõ lỗi'}`,
          visibilityTime: 5000,
          autoHide: true,
        });
      }
    } catch (error) {
      console.error('Error booking appointment:', error.message);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Lỗi khi kết nối tới server!',
        visibilityTime: 5000,
        autoHide: true,
      });
    }
  };
  return (
  
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={{height:90,alignItems:'center'}}
        resizeMode="cover"
      >
        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => {
                                navigation.navigate('Trangchu'); }}>
          <Icon2 name="chevron-left" size={20} color="#00B5F1" style={styles.headerText2} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Đặt lịch khám</Text>
        </View>
      </ImageBackground>
      < KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}
  >
      <ScrollView>
        {/* Patient Name */}
        <View style={[styles.formGroup,{top:10}]}>
          <Text style={styles.label}>Họ và tên <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={16} color="#00B5F1" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={patient}
              onChangeText={setPatient}
              placeholder="Vd: Trần Hữu Tuấn"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Ngày sinh <Text style={styles.asterisk}>*</Text>
          </Text>
          <TouchableOpacity
            onPress={() => setShowDOBPicker(true)}
            style={[styles.inputContainer, { justifyContent: 'center' }]}
          >
            <Icon name="calendar" size={16} color="#00B5F1" style={styles.icon} />
            <Text style={styles.input}>{formatDate(dateOfBirth)}</Text>
          </TouchableOpacity>
          {showDOBPicker && (
            <DateTimePicker
              value={dateOfBirth}
              mode="date"
              display="spinner"
              onChange={(event, date) => handleDateChange(event, date, 'dob')}
            />
          )}
        </View>
        {/* Gender (Specialty) */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Giới tính <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={16} color="#00B5F1" style={styles.icon} />
            <RNPickerSelect
              onValueChange={(value) => setSpecialty(value)}
              items={[
                { label: 'Nam', value: 'Nam' },
                { label: 'Nữ', value: 'Nữ' },
              ]}
              value={specialty}
              placeholder={{
                label: 'Chọn giới tính...',
                value: null,
              }}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              Icon={() => <Icon2 name="chevron-down" size={20} color="#888" />}
            />
          </View>
        </View>

        {/* Phone */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Điện thoại <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="phone" size={16} color="#00B5F1" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Vd: 0293373737"
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={16} color="#00B5F1" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Vd: tranhuutuan@gmail.com"
            />
          </View>
        </View>
        <View style={styles.formGroup}>
      <Text style={styles.label}>
        Địa chỉ khám <Text style={styles.asterisk}>*</Text>
      </Text>
      <View style={styles.inputContainer}>
        <Icon name="map" size={16} color="#00B5F1" style={styles.icon} />
        <RNPickerSelect
          onValueChange={(value) => setMap(value)}
          items={clinicList}
          value={map || clinic_id}
          placeholder={{
            label: 'Chọn địa chỉ...',
            value: null,
          }}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
          Icon={() => <Icon2 name="chevron-down" size={20} color="#888" />}
        />
      </View>
    </View>
        {/* Doctor Selection */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Bác sĩ <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="user-plus" size={16} color="#00B5F1" style={styles.icon} />
            <RNPickerSelect
              onValueChange={(value) => setDoctor(value)}
              items={doctors}
              value={doctor || doctorId} 
              placeholder={{
                label: 'Chọn bác sĩ...',
                value: null,
              }}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              Icon={() => <Icon2 name="chevron-down" size={20} color="#888" />}
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Ngày đặt <Text style={styles.asterisk}>*</Text>
          </Text>
          <TouchableOpacity
            onPress={() => setShowAppointmentDatePicker(true)}
            style={[styles.inputContainer, { justifyContent: 'center' }]}
          >
            <Icon name="calendar" size={16} color="#00B5F1" style={styles.icon} />
            <Text style={styles.input}>{formatDate(appointmentDate)}</Text>
          </TouchableOpacity>
          {showAppointmentDatePicker && (
            <DateTimePicker
              value={appointmentDate}
              mode="date"
              display="spinner"
              onChange={(event, date) => handleDateChange(event, date, 'appointment')}
            />
          )}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Giờ <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="calendar" size={16} color="#00B5F1" style={styles.icon} />
            <RNPickerSelect
              onValueChange={(value) => setTime(value)}
              items={[
                { label: '7:30 - 8:30',  value: '7:30 - 8:30' },
                { label: '8:30 - 9:30', value: '8:30 - 9:30' },
                { label: '10:30 - 11:30', value: '10:30 - 11:30' },
                { label: '14:00 - 15:00', value: '14:00 - 15:00' },
              ]}
              value={time|| timeSlot}
              placeholder={{
                label: 'Chọn khung giờ...',
                value: null,
              }}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              Icon={() => <Icon2 name="chevron-down" size={20} color="#888" />}
            />
          </View>
        </View>

        {/* Notes */}
        <View style={styles.formGroup2}>
          <Text style={styles.label}>Nội dung hẹn khám</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input2}
              value={notes}
              onChangeText={setNotes}
              multiline={true}         
              numberOfLines={4}         
              textAlignVertical="top"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

      {/* Submit Button */}
     <View style={styles.navbar}>
        <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Icon name="calendar" size={20}  style={styles.time2} />
          <Text style={styles.buttonText}>Đặt lịch khám</Text>
        </TouchableOpacity>
      </View>

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

// Styles for the picker (dropdown)
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: 373,
    paddingLeft: 35,  
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: 35,  
  },
  placeholder: {
    color: '#888',
  },
  iconContainer: {
    top: 12,
    right: 10,
  },
});



export default AppointmentForm;
