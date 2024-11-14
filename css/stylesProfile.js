import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  
    head:{
      display:'flex',
      flexDirection:'row',
      marginTop:45,
      paddingBottom:20,
    },
    icon:{
      color: '#3077ae',
      fontSize: 20,
      paddingHorizontal: 10,
      
    },
    duongke:{
      borderBottomWidth:1,
      borderColor:'#E8E8E8',
      width:372,
      
    },  
    tinyLogo: {
      width: 50,
      height: 50,
      marginHorizontal:18,
      borderRadius:40,
    },
    txt:{
      fontSize:20,
      fontWeight:'bold',
      // backgroundColor:'red',
    },
    avatarnname:{
      display:'flex',
      flexDirection:'row',
      marginVertical:20,
      alignItems:'center',
      
    },
    bonicon:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom:20,
    },
    iconntxt:{
      display:'flex',
      flexDirection:'row',
      paddingHorizontal:100,
      paddingVertical:10,
    },
    title:{
      color:'#3077ae',
      fontSize:20,
    },
    content:{
      marginVertical:20,
      
    },
    setting:{
      marginVertical:20,
      marginHorizontal:20,
    },
  })

export default styles;