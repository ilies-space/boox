import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Colors';

export const SelectedBook = ({navigation, route}) => {
  const item = route.params.item;

  return (
    <View style={styles.mainView}>
      <View style={{flex: 1.2}}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            resizeMode: 'contain',
          }}
          source={item.imagesrc}
        />
      </View>

      <View style={{flex: 1}}>
        {/* TEXTS AND DESCIPTIONS GOES HERE */}
        <View style={{marginHorizontal: 15, marginTop: 15}}>
          <View style={{}}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 15,
              }}>
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: Colors.MainColor,
                marginHorizontal: 15,
                borderRadius: 10,
                marginBottom: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'white',
                }}>
                الولاية : مستغانم
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'white',
                }}>
                النوع : رواية
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'white',
                }}>
                الحالة : جديد
              </Text>
            </View>

            <View></View>
            <View style={{height: 100, marginTop: 10}}>
              <ScrollView>
                <Text style={{color: 'white'}}>{item.description}</Text>
              </ScrollView>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.MainColor,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('Chat')}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginHorizontal: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginRight: 20,
                  }}>
                  <Icon name={'circle'} size={10} color={'#32ff7e'} />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                      marginLeft: 10,
                    }}>
                    {item.book_owner}
                  </Text>
                </View>
                <View style={{}}>
                  <Icon3 name={'message1'} size={35} color={'#fff'} />
                </View>
              </View>
            </TouchableOpacity>
            {/* <Text style={{color: Colors.MainColor, marginBottom: 10}}>
              قبل يومين
            </Text> */}
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', top: 20, left: 20}}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon2
            name={'ios-caret-back-circle'}
            size={30}
            color={Colors.MainColor}
          />
        </TouchableWithoutFeedback>
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
