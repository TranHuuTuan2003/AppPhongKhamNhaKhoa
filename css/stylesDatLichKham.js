import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    full:{
        display:'flex',
        justifyContent:'space-between',
        // flexDirection:'row'
        height:'100%',
    },
  head: {
    // display:'flex',
    alignItems: "center",
    // justifyContent:'center',
    backgroundColor: '#3077ae',
    height: 80
  },
  text: {
    marginTop: 45,
    fontSize: 20,
    color: "white",
  },
//   
  image:{
    width:'80%',
    height:200,
      // marginTop:15,
    borderRadius:10,
    marginVertical:10,
      // backgroundColor:'red'
  },
  imagemargin:{
    paddingHorizontal:20,
  },
  content:{
    display:'flex',
    alignItems:'center',
    marginVertical:10,
    
  },
  newsource:{
    marginTop:7,
    width:70,
    height:14
  },
  duongke:{
    borderBottomWidth:1,
    borderColor:'#E8E8E8',
    width:372,
    
},  
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-around',
    backgroundColor:'white',
    paddingVertical:24,
    color:'#848684',
  },
  navbarv2: {
    // alignItems:'baseline',
    // justifyContent: "center",
    // backgroundColor: "red",
    // height: 10,
    // width: 10,
  },
  mainicon: {
    // marginTop: 12,
    color: "#3077ae",
    fontSize: 25,
    paddingHorizontal: 52,
  },
  maintxt:{
    color:"#3077ae",
  },
  icon: {
    // marginTop: 12,
    color: '#848684',
    fontSize: 25,
    paddingHorizontal: 47,
  },
  txt:{
    paddingHorizontal:30,
   
    color: '#848684',
    
  },
  hot:{
    display:'flex',
    flexDirection:'row',
    marginVertical:8,
  },
  iconhot:{
    color:'#3077ae',
    fontSize: 19,
    paddingHorizontal: 30,
  },
});

export default styles;