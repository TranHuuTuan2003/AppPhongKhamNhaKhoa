import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableOpacity, ImageBackground, SafeAreaView, TextInput,Image,value, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import styles from '../css/stylesDangnhap';
import logo from '../assets/svgviewer-png-output.png';
import Toast from 'react-native-toast-message'; 
import imgnen from '../assets/anhnen.jpg'
import { LinearGradient } from 'expo-linear-gradient';

const Dangnhap=({navigation})=> {
    const [taikhoan,settaikhoan] = useState('');
    const [matkhau,setmatkhau] = useState('');
    // const [errortaikhoan,seterrortaikhoan]= useState(true);
    // const [errormatkhau,seterrormatkhau] = useState('');
   
    const Login = async () => {
        try {
          const data = require('../Json/News.json');
          const { users } = data;
          const checkDangnhap = users.find((user) => user.taikhoan === taikhoan && user.matkhau === matkhau);
         
          if (checkDangnhap) 
          {
            // alert ("Đăng nhập thành công !")
            navigation.navigate('Trangchu');
          } 
          else{
            if( matkhau === '' && taikhoan != ''){
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Vui lòng nhập mật khẩu !',
                    visibilityTime: 5000,
                    autoHide: true,
                  });
            }
            if( matkhau != '' && taikhoan === ''){
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Vui lòng nhập tài khoản !',
                    visibilityTime: 5000,
                    autoHide: true,
                  });
            }
            if( matkhau != '' && taikhoan != ''){
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Thông tin tài khoản hoặc mật khẩu chưa đúng !',
                    visibilityTime: 5000,
                    autoHide: true,
                  });
            }
            if( matkhau === '' && taikhoan===''){
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Vui lòng nhập tài khoản và mật khẩu !',
                    visibilityTime: 5000,
                    autoHide: true,
                  });
            }
          }
        } 
        catch (error) {
          console.error('Lỗi khi đọc dữ liệu :', error);
        }
    };

  return (
    <SafeAreaView style={styles.container}>
         <ImageBackground source={imgnen} style={styles.background} resizeMode="cover">
         <LinearGradient colors={['rgba(255, 255, 255, 0)', '#FFFFFF']} style={styles.overlay} />
          <Toast ref={(ref) => Toast.setRef(ref)} />
            <StatusBar backgroundColor={'#fffff'} barStyle="dark-content"></StatusBar>
        <TouchableOpacity>
        <View style={styles.login}>
        <Image source={logo}
        style={styles.lg}/>
        </View>
        </TouchableOpacity>  
                <View style={styles.form}>
                <Text >Tài khoản</Text>
                <View>
                    <Icon2 style={styles.icon} name="user" />
                    <TextInput  placeholder='Type your username' style={styles.ip}  onChangeText={(text)=>settaikhoan(text)} ></TextInput>
                    {/* <Text style={{color:'#3077ae',marginTop:3}}>{errortaikhoan}</Text> */}
                </View>
                </View>
                <View style={styles.form2}>
                <Text>Mật khẩu</Text>
                <View>
                    <Icon style={styles.icon}  name="locked"  />
                    <TextInput  placeholder='Type your password' style={styles.ip} onChangeText={(text)=>setmatkhau(text)}></TextInput>
                    {/* <Text style={{color:'#3077ae',marginTop:3}}>{errormatkhau}</Text> */}
                </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.quen} onPress={()=>{
               navigation.navigate('Dangki');}}> 
                        <Text> Đăng kí ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal:40}}>
                <TouchableOpacity style={styles.btn} onPress={()=>Login()}>
                    <Text style={styles.btn1}>Đăng nhập</Text>
                    
                </TouchableOpacity>
                </View>
                <View style={styles.or}>
                <Text style={{}}>Or Sign Up Using</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{marginTop:34}}>
                <TouchableOpacity style={styles[6]}>
                        <Image source={require('../assets/fb.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles[6]}>
                        <Image source={require('../assets/gg.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles[6]}>
                        <Image source={require('../assets/tw.png')}/>
                    </TouchableOpacity>  
                </Text>
                </View>
                <View>
                <Image  style={{ width: '100%',marginTop:45}}
                 resizeMode="cover" source={require('../assets/aaa.png')}/>
                </View>
                </ImageBackground>
           </SafeAreaView>
  );
}


export default Dangnhap;

