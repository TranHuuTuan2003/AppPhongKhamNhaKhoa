import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableOpacity, ImageBackground, SafeAreaView, TextInput,Image} from 'react-native';
import Dangnhap from './componentes/dangnhap';
import Trangchu from './componentes/trangchu';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Dangki from './componentes/dangki'
import BacSi from './componentes/bacsi';
import Profile from './componentes/profile';
import DatLichKham from './componentes/datlichkham';
import ChiTietBacSi from './componentes/chitietbacsi';
import DanhSachLichKham from './componentes/dansachlichkham';


const Stack= createNativeStackNavigator();

const App=()=> {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Dangnhap' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Dangnhap' component={Dangnhap}/>
        <Stack.Screen name='Trangchu' component={Trangchu}/>
        <Stack.Screen name='Dangki'  component={Dangki}/>
        <Stack.Screen name='BacSi' component={BacSi}/>
        <Stack.Screen name='DatLichKham' component={DatLichKham}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='ChiTietBacSi' component={ChiTietBacSi}/>
        <Stack.Screen name='DanhSachLichKham' component={DanhSachLichKham}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

