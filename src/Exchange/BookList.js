import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';

export const BookList = ({navigation, BooksList}) => {
  // HorizontaleCardView FlatList

  const renderItem2 = ({item}) => (
    <TouchableWithoutFeedback onPress={() => console.log(item.title)}>
      <View
        style={{
          borderRadius: 15,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        {/* <Text style={{color: 'white', fontSize: 14}}>قبل 2 أيام</Text> */}

        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {item.title}
          </Text>
          <View style={{height: 120}}>
            <Text
              numberOfLines={5}
              style={{
                color: '#959595',
                fontSize: 16,
                marginVertical: 5,
              }}>
              {item.description}
            </Text>
          </View>
        </View>

        <View>
          <Image
            style={{
              height: 170,
              width: 130,
              borderRadius: 15,
              marginBottom: 15,
            }}
            source={item.imagesrc}
          />

          {item.isAvailible ? (
            <View
              style={{
                backgroundColor: 'green',
                position: 'absolute',
                top: 12,
                right: -3,
                rotation: 45,
                paddingHorizontal: 15,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                متاح
              </Text>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: 'red',
                position: 'absolute',
                top: 10,
                right: -4,
                rotation: 45,
                paddingHorizontal: 15,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                مطلوب
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  ///--------------
  return (
    <View style={styles.mainView}>
      <Text>List</Text>
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={BooksList}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
        />
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
