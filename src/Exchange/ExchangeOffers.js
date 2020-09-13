import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import {BookList} from './BookList';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';

export const ExchangeOffers = ({navigation}) => {
  const [SearchInput, setSearchInput] = useState('');

  const BooksOffers = [
    {
      auther: ' أحمد خالد مصطفى',
      id: '004',
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
      title: 'أنتيخريستوس',
      imagesrc: require('../Assests/book4.jpg'),
      isAvailible: true,
    },
    {
      auther: 'بيتر تييل',
      id: '005',
      title: 'من الصفر إلى الواحد',
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
      imagesrc: require('../Assests/book5.jpg'),
      isAvailible: true,
    },
    {
      auther: 'د . خولة حمدي',
      id: '003',
      title: 'في قلبي أنثى عبرية',
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
      imagesrc: require('../Assests/book3.jpg'),
      isAvailible: true,
    },

    {
      auther: 'د . منى المرشود',
      id: '002',
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
      title: 'أنت لي',
      imagesrc: require('../Assests/book2.jpg'),
      isAvailible: true,
    },
  ];
  return (
    <View style={styles.mainView}>
      <View style={styles.searchBarHoler}>
        <Input
          placeholder="البحث عن كتاب"
          leftIcon={<Icon name="search" size={15} color={'gray'} />}
          inputContainerStyle={styles.srachInput}
          onChangeText={(value) => setSearchInput(value)}
          inputStyle={{color: 'white'}}
        />
      </View>
      <BookList BooksList={BooksOffers} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
    flex: 1,
  },
  searchBarHoler: {
    paddingRight: 10,
    marginBottom: -22,
    marginTop: 15,
  },
  srachInput: {
    backgroundColor: Colors.grayColor,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
});
