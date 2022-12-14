import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './assets/view/menu'
import Thongtinlienlac from './assets/view/thongtinlienlac'
import Dangkiwifi  from './assets/view/dangkiwifi';
import Dangkidonphong from './assets/view/dangkidonphong';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Home from './assets/view/home';
import Luutru from './assets/view/luutru';
import Thongtinluutru from './assets/view/thongtinluutru';
import Thongbao from './assets/view/thongbao';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#46D0D9',
      }}
    >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lưu Trú"
        component={Thongtinluutru}
        options={{
          tabBarLabel: 'Lưu Trú',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Thông báo"
        component={Thongbao}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-checkbox" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
};

export default App;
