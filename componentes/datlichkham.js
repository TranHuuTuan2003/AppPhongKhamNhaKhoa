import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, TextInput, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select'; 

const backgroundImage = { uri: 'https://anhdepfree.com/wp-content/uploads/2018/11/Blue-Wallpaper-hinh-nen-mau-xanh-27.jpg' };

const AppointmentForm = () => {
  const [specialty, setSpecialty] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patient, setPatient] = useState('');
  const [notes, setNotes] = useState('');

  const specialties = [
    { label: 'Khám Sức Khỏe Không Xét Nghiệm', value: 'Khám Sức Khỏe Không Xét Nghiệm' },
    { label: 'Khám Sức Khỏe Có Xét Nghiệm', value: 'Khám Sức Khỏe Có Xét Nghiệm' },
  ];

  const times = [
    { label: '15:00-15:30', value: '15:00-15:30' },
    { label: '15:30-16:00', value: '15:30-16:00' },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon2 name="chevron-left" size={20} color="#00B5F1" style={styles.headerText2} />
          <Text style={styles.headerText}>Đặt lịch khám</Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.formGroup}>
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
          <Text style={styles.label}>Ngày sinh <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="calendar" size={16} color="#00B5F1" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={setDate}
              placeholder="Vd: Nam"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Giới tính <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={16} color="#00B5F1" style={styles.icon} />
             <RNPickerSelect 
              onValueChange={(value) => setSpecialty(value)}
              items={specialties}
              value={specialty}
              style={pickerSelectStyles}
            />
            <Icon2 name="chevron-right" size={20} color="#000" style={styles.icon2} />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Điện thoại <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="phone" size={16} color="#00B5F1" style={styles.icon} />
            <TextInput
              onValueChange={(value) => setTime(value)}
              items={times}
              value={time}
              style={styles.input}
              placeholder="Vd: 0293373737"
            />

          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={16} color="#00B5F1" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={patient}
              onChangeText={setPatient}
              placeholder="Vd: tranhuutuan@gmail.com"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Địa chỉ khám <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="map" size={16} color="#00B5F1" style={styles.icon} />
            <RNPickerSelect
              onValueChange={(value) => setSpecialty(value)}
              items={specialties}
              value={specialty}
              style={pickerSelectStyles}
            />
            <Icon2 name="chevron-right" size={20} color="#000" style={styles.icon2} />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Bác sĩ <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="user-plus" size={16} color="#00B5F1" style={styles.icon} />
            <RNPickerSelect
              onValueChange={(value) => setSpecialty(value)}
              items={specialties}
              value={specialty}
              style={pickerSelectStyles}
            />
            <Icon2 name="chevron-right" size={20} color="#000" style={styles.icon2} />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Ngày khám <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon name="calendar" size={16} color="#00B5F1" style={styles.icon} />
            <RNPickerSelect
              onValueChange={(value) => setSpecialty(value)}
              items={specialties}
              value={specialty}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Giờ <Text style={styles.asterisk}>*</Text></Text>
          <View style={styles.inputContainer}>
            <Icon3 name="stopwatch" size={16} color="#00B5F1" style={styles.icon} />
            <RNPickerSelect
              onValueChange={(value) => setSpecialty(value)}
              items={specialties}
              value={specialty}
              style={pickerSelectStyles}
            />
            <Icon2 name="chevron-right" size={20} color="#000" style={styles.icon2} />
          </View>
        </View>

       

        <View style={styles.formGroup2}>
          <Text style={styles.label}>Nội dung hẹn khám</Text>
          <View style={styles.inputContainer}>
            <Icon name="arrow-right" size={16} color="#00B5F1" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={notes}
              onChangeText={setNotes}
              placeholder="Triệu chứng, thuốc đang dùng, tiền sử..."
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đặt lịch khám</Text>
        </TouchableOpacity>
      </View>
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
    paddingLeft: 35,  // Align the text similar to TextInput
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    paddingVertical: 20,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    height: 100,
  },
  background: {
    height: 100,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    top: 51,
    right: 11,
  },
  headerText2: {
    color: '#fff',
    fontSize: 24,
    top: 52,
    right: 93,
  },
  formGroup: {
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  formGroup2: {
    marginBottom: 130,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  asterisk: {
    color: '#1B77E3', // Set color of asterisk to blue
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row', // Align the icon and input horizontally
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingLeft: 35, // Add padding on the left to make space for the icon
    padding: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    left: 10, // Place icon on the left side of the TextInput
    top: '50%', // Center the icon vertically
    transform: [{ translateY: -10 }], // Fine-tune the icon's vertical alignment
    zIndex: 2,
  },
  icon2: {
    position: 'absolute',
    left: 343, // Place icon on the left side of the TextInput
    top: '50%', // Center the icon vertically
    transform: [{ translateY: -10 }], // Fine-tune the icon's vertical alignment
    zIndex: 2,
  },
  button: {
    height: 45,
    paddingHorizontal: 30,
    backgroundColor: '#00B5F1',
    borderRadius: 5,
    width: '90%',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center', // Align text horizontally
    lineHeight: 43, // Adjust line height to match button height for vertical centering
    textAlignVertical: 'center', // This is useful on Android to center vertically
  },
});

export default AppointmentForm;
