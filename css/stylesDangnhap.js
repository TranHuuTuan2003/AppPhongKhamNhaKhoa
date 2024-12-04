import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffffff'
      
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 633,
    zIndex: 0,
  },
  background: {
    flex: 1,
    height: '27%',
    marginTop:-50
  },
  login:{
      
      alignItems:'center',
      marginTop:75
  },
  lg:{
    marginTop:35,
    marginBottom:40,
      height:50,
      width:270,
  },
  
  ip:{
      borderBottomWidth:1,
      backgroundColor:'#fff',
      borderColor:'black',
      height:45,
      paddingHorizontal:25
  },
  
  icon:{
      fontSize:16,
      position:'absolute',
      zIndex:1000,
      top:13
  },
  
  form:{
  marginTop:65,
  paddingHorizontal:40
  } ,
  
  form2:{
      marginTop:30,
      paddingHorizontal:40
      } ,
  
  
  
  btn:{
  marginTop:50,
  backgroundColor:'#00B5F1',
  paddingVertical:15,
  alignItems:'center',
  borderRadius:13
  },
  
  btn1:{
  fontSize:17,
  color:'white'
  },
  
  or:{
  alignItems:'center',
  marginTop:40
  },
  
  quen:{
  marginTop: 50,
  marginLeft:310
  },
  
  6:{
      padding:6
  }
  
  }) 

export default styles;