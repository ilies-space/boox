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
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavgation from './BottomNavgation';
import {LoginStack} from './Auth/LgInStack';

export const Rout = () => {
  const Stack = createStackNavigator();

  return (
    <View flex={1}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginStack"
          headerMode="screen"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'tomato'},
          }}>
          <Stack.Screen
            name="BottomNavgation"
            component={BottomNavgation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
