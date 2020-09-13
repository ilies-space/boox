import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {SingUp} from './SingUp';
import {Login} from './Login';

export const LoginStack = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.MainColor,
        labelStyle: {fontSize: 16},
        style: {backgroundColor: 'black'},
        indicatorStyle: {backgroundColor: Colors.MainColor},
      }}>
      <Tab.Screen
        name="Login"
        options={{tabBarLabel: 'تسجيل الدخول'}}
        component={Login}
      />
      <Tab.Screen
        name="SingUp"
        options={{tabBarLabel: 'فتح حساب'}}
        component={SingUp}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
    flex: 1,
  },
});
