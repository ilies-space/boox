import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';

export const Chat = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <MaterialCommunityIcons
          name="chat-alert"
          color={Colors.MainColor}
          size={84}
        />

        <Text style={{color: 'gray', fontSize: 20}}>
          صندوق الرسائل فارغ حاليا .
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              marginTop: 55,
              backgroundColor: 'gray',
              padding: 5,
              fontSize: 16,
              borderRadius: 15,
            }}>
            العودة الى الرئيسية
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
    flex: 1,
  },
});
