import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

export const Login = ({navigation}) => {
  const [SearchInput, setSearchInput] = useState('');

  return (
    <View style={styles.mainView}>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 80,
            }}>
            <Text style={{color: Colors.MainColor, fontSize: 26}}>BOOX</Text>
            <Text style={{color: 'white', fontSize: 20}}>لتبادل كتب</Text>
          </View>
          <Input
            placeholder="البريد الإلكتروني"
            inputContainerStyle={styles.srachInput}
            onChangeText={(value) => setSearchInput(value)}
            inputStyle={{color: 'white'}}
          />
          <Input
            placeholder="كلمة المرور"
            inputContainerStyle={styles.srachInput}
            onChangeText={(value) => setSearchInput(value)}
            inputStyle={{color: 'white'}}
          />

          <TouchableOpacity
            style={{
              backgroundColor: Colors.MainColor,
              height: 40,
              width: '80%',
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.push('BottomNavgation')}>
            <Text style={{color: 'white', fontSize: 20}}>تسجيل الدخول</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 16, marginVertical: 15}}>
            أو
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#E74233',
              height: 40,
              width: '80%',
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <Icon name="google" size={15} color={'white'} />

            <Text style={{color: 'white', fontSize: 20, flex: 1}}>
              تسجيل الدخول بجوجل
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#2C6EFF',
              height: 40,
              width: '80%',
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginTop: 15,
            }}>
            <Icon name="facebook" size={15} color={'white'} />

            <Text style={{color: 'white', fontSize: 20, flex: 1}}>
              تسجيل الدخول بالفاسبوك
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.push('BottomNavgation')}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              marginVertical: 20,
            }}>
            تخطي . يمكنك التسجيل لاحقا
          </Text>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
    flex: 1,
    paddingHorizontal: 20,
  },
});
