import React from 'react';
import {Home} from './Home';
import {Notification} from '../Notification/Notification';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../Colors';
import {Login} from '../Auth/Login';
import {LoginStack} from '../Auth/LgInStack';
import {SelectedBook} from '../SelectedBook/SelectedBook';
export const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: ' الإشعارات ',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />

      <Stack.Screen
        name="SelectedBook"
        component={SelectedBook}
        options={{
          headerShown: false,

          title: ' تفاصيل العرض ',
          headerStyle: {
            headerShown: false,
          },
        }}
      />
    </Stack.Navigator>
  );
};
