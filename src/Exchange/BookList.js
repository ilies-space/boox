import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';

export const BookList = ({navigation}) => {
  const BookList2 = [
    {
      auther: ' أحمد خالد مصطفى',
      id: '004',
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
      title: 'أنتيخريستوس',
      imagesrc: require('../Assests/book4.jpg'),
    },
    {
      auther: 'بيتر تييل',
      id: '005',
      title: 'من الصفر إلى الواحد',
      imagesrc: require('../Assests/book5.jpg'),
    },
    {
      auther: 'د . خولة حمدي',
      id: '003',
      title: 'في قلبي أنثى عبرية',
      imagesrc: require('../Assests/book3.jpg'),
    },

    {
      auther: 'باولو كويلوا',
      id: '001',
      title: 'الخيميائي',
      imagesrc: require('../Assests/book1.jpg'),
    },
    {
      auther: 'د . منى المرشود',
      id: '002',
      title: 'أنت لي',
      imagesrc: require('../Assests/book2.jpg'),
    },
    {
      auther: 'سبنسر جونسون',
      id: '006',
      title: 'من حرك جبنتى',
      imagesrc: require('../Assests/book6.jpg'),
    },
  ];

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
        <Text style={{color: 'white', fontSize: 14}}>قبل 2 أيام</Text>

        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {item.title}
          </Text>
          <View style={{height: 120}}>
            <Text
              style={{
                color: '#959595',
                fontSize: 16,
                marginVertical: 5,
              }}>
              {item.description}
            </Text>
          </View>
        </View>

        <Image
          style={{height: 190, width: 130, borderRadius: 15, marginBottom: 12}}
          source={item.imagesrc}
        />
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
          data={BookList2}
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
