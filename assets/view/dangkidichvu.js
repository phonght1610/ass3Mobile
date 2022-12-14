import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Button,TouchableOpacity,Alert
} from 'react-native';
import COLORS from 'C:/phong/LEARN/Mobile/3. btl/assMobileMenu/assets/view/consts/colors.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');

const Dangkidichvu  = () => {
    return(
        <SafeAreaView style  ={{backgroundColor: COLORS.white, flex: 1}}>
            <StatusBar 
                translucent = {false}
                backgroundColor = {COLORS.white}
                barStyle  = "dark-content"  />  
            <View style = {style.header}>
                <View>
                    <Text style = {{color: COLORS.dark, fontSize:25, fontWeight:'bold'}}>MENU</Text>
                </View>
            </View>
            <View>
                <Image 
                source={require('../img/avar.png')}
                style = {style.propertiesImage}>               
                </Image>
                <Text style={style.nameUser}>Huy Doan</Text>
                <Text style = {style.trangcanhan} >Trang ca nhan</Text>
            </View>    
            <View style = {style.header}>
                <Text style = {{color:COLORS.dark,fontSize:25,fontWeight:'bold'}}>Dang ky dich vu</Text>
            </View>
            <View style = {style.header}>
            <TouchableOpacity onPress={()=>Alert.alert("dk wifi")}>
                <View style = {style.button1}>
                    <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',justifyContent: 'center'}}> Dang ki wifi</Text>
                </View>
            </TouchableOpacity>
            </View>
            
            <View style = {style.header}>
            <TouchableOpacity onPress={()=>Alert.alert("dk gui xe")}>
                <View style = {style.button1}>
                    <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',justifyContent: 'center'}}> Dang ki gui xe</Text>
                </View>
            </TouchableOpacity>
            </View>

            <View style = {style.header}>
            <TouchableOpacity onPress={()=>Alert.alert("dk don phong")}>
                <View style = {style.button1}>
                    <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',justifyContent: 'center'}}> Dang ki don phong</Text>
                </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
    
};
export default Dangkidichvu;
const style = StyleSheet.create({
    header:{
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    propertiesImage:{
        height:50,
        width: 50,
        borderRadius:25,
        margin:5,
    },
    propertiesImage1:{
        position: 'absolute',
        height:40,
        width: 40,
        borderRadius:10,
        margin:5,
    },
    nameUser:{
        position: 'absolute',
        width: 129,
        height: 24,
        left: 70,
        top: 15,
    },
    trangcanhan:{
        position: 'absolute',
        width: 129,
        height: 24,
        left: 70,
        top: 35,
        fontSize:15,
        fontWeight:'bold'
    },
    Rectangle1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button1:{
        height:75,
        width:250,
        backgroundColor:'white',
        borderWidth:1,
        marginLeft: 10,
        borderRadius:10,
    },
    button2:{
        height:50,
        width:150,
        backgroundColor:'white',
        borderWidth:1,
        marginRight: 10,
        borderRadius:10,
    },
})