import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { AsyncStorage,StyleSheet, Text, View, CheckBox, TouchableOpacity, ImageBackground, SafeAreaView, TextInput,Image,value, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import styles from '../css/stylesDangki';



const Dangki=({navigation})=> {
    const [taikhoan, settaikhoan] = useState('');
    const [matkhau, setmatkhau] = useState('');
    const [hoten, sethoten] = useState('');

    const Register = async () => {
        try {
            const data = require('../Json/News.json');
            const { users } = data;
            const checkExists = users.find((user) => user.taikhoan === taikhoan);
      
          if (checkExists) {
            Alert.alert('Thông báo', 'Tài khoản đã tồn tại!');    
          } 
          else {
            users.push({ taikhoan, matkhau ,hoten });
           
            Alert.alert('Thông báo', 'Đăng ký thành công!');
            navigation.navigate('Dangnhap');
          }
        } catch (error) {
          console.error('Lỗi khi đọc dữ liệu:', error);
        }
      };


  return (
    <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#fffff'} barStyle="dark-content"></StatusBar>
        <TouchableOpacity>
        <View style={styles.login}>
        <Image source={require('../assets/logo.png')}
        style={styles.lg}/>
        </View>
        </TouchableOpacity>  
                <View style={styles.form}>
                <Text >Tài khoản</Text>
                <View>
                    <Icon2 style={styles.icon} name="user" />
                    <TextInput  placeholder='Type your username' style={styles.ip}  onChangeText={(text)=>settaikhoan(text)} ></TextInput>
                  </View>
                </View>
                <View style={styles.form2}>
                <Text>Mật khẩu</Text>
                <View>
                    <Icon style={styles.icon}  name="locked"  />
                    <TextInput placeholder='Type your password' style={styles.ip} onChangeText={(text)=>setmatkhau(text)}></TextInput>
                    </View>
                </View>

                <View style={styles.form2}>
                <Text>Họ và tên </Text>
                <View>
                    <Icon style={styles.icon}  name="male"  />
                    <TextInput placeholder='Type your full name' style={styles.ip} onChangeText={(text)=>sethoten(text)}></TextInput>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.quen}> 
                        <Text> Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal:40}}>
                <TouchableOpacity style={styles.btn} onPress={()=>Register()}>
                    <Text style={styles.btn1}>Đăng kí</Text>
                    
                </TouchableOpacity>
                </View>
                <View>
                <Image  style={{ width: '100%',marginTop:20}}
                 resizeMode="cover" source={require('../assets/lg2.png')}/>
                </View>
           </SafeAreaView>
  );
}


export default Dangki;

