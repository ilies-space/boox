import React from 'react';
import {View, Text} from 'react-native';
//
import {Home} from './Home/Home';
import {Nearby} from './Nearby/Nearby';
import {ExchangeStack} from './Exchange/ExchangeStack';
import {Profile} from './Profile/Profile';
import {Chat} from './Chat/Chat';
//

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './Colors';
import {HomeStack} from './Home/HomeStack';

export default function BottomNavgation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.MainColor,
        inactiveTintColor: Colors.grayColor,
        labelStyle: {
          fontSize: 14,
        },
        tabStyle: {
          backgroundColor: 'black',
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'الرئيسية',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'الرسائل',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Nearby"
        component={Nearby}
        options={{
          tabBarLabel: 'بالقرب',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="map-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Exchange"
        component={ExchangeStack}
        options={{
          tabBarLabel: 'تبادل',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="exchange-alt" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'الحساب',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
