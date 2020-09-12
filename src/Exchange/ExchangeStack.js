import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ExchangeOffers} from './ExchangeOffers';
import {ExchangeLookingFor} from './ExchangeLookingFor';

export const ExchangeStack = ({navigation}) => {
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
        name="Exchange"
        options={{tabBarLabel: 'الكتب المتوفرة'}}
        component={ExchangeOffers}
      />
      <Tab.Screen
        name="Exchange2"
        options={{tabBarLabel: 'الكتب المطلوبة'}}
        component={ExchangeLookingFor}
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
