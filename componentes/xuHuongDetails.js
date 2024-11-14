import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../css/stylesXuhuongDeatail";

const XuHuongDetails = ({ navigation,route }) => {
  const {item}= route.params;

  const Data = require("../Json/xuHuong.json");
  const data = Data["XuHuong"];
  const limitedData = data.slice(0, 4);
  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("XuHuongDetails", { item});
          }}
        >
          <View >
            {/* content ở giữa */}
            <View style={styles.content}>
              {/* ảnh bên trái */}
              <View style={styles.imagemargin}>
                <Image source={{ uri: item.img }} style={styles.image} />
              </View>
              {/* chữ bên phải */}
              <View style={[styles.txtcontent]}>
                <View>
                  <Text>{item.name}</Text>
                </View>
                <View>
                  <Image source={{ uri: item.icon }} style={styles.newsource} />
                </View>
              </View>
            </View>
            {/* đường kẻ */}
            <View>
              <View style={{ alignItems: "center" }}>
                <View style={styles.duongke} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  const showAlert = () => {
    Alert.alert(
      "Thông báo",
      "Bạn đã lưu bài báo!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
  }

  return (
    <View   >
      <View style={styles.box}>
        <TouchableOpacity
          style={{ marginLeft: "3%" }}
          onPress={() => {
            navigation.navigate("XuHuong");
          }}
        >
          <Icon
            style={styles.icon}
            name="arrow-left"
            size={20}
            color={"#848684"}
          />
          
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.img}
            source={{
              uri: item.icon,
            }}
          />
        </View>
        <TouchableOpacity onPress={showAlert}>
          <Icon
            style={[styles.icon,{marginLeft:110,}]}
            name="bookmark-o"
            size={20}
            color={"#848684"}
          />
          
        </TouchableOpacity>
      </View>
      <View >
        <ScrollView style={{height:780 }}>
          <View style={styles.than}>
            <Text style={styles.tieude}>{item.name}</Text>
            <Text style={styles.tieude2}>{item.tieude}</Text>
            <Text style={styles.phut}>{item.thoigian}</Text>
            <Text style={styles.nd}>{item.nd1}</Text>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.img2}
                source={{
                  uri: item.img2,
                }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.ndimg}>{item.ndimg1}</Text>
            </View>

            <Text style={styles.nd2}>{item.nd2}</Text>

            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.img2}
                source={{
                  uri:item.img3,
                }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.ndimg}>{item.ndimg2}</Text>
            </View>
            <Text style={styles.nd3}>{item.nd3}</Text>
            
            
            
          </View>
          <View style={{fontSize:20, marginLeft:20,}}>
            <Text style={{ color: "#3077ae" }}>Tin tức khác</Text>
          </View>
          <View   >
          <FlatList       
          data={limitedData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          />
        </View>
        </ScrollView>
        
      </View>
    </View>
  );
};


export default XuHuongDetails;
