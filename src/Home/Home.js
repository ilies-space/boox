import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
//
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import Colors from '../Colors';
import TagsFiltring from './TagsFiltring';
import ListofBooks from './ListofBooks';
import {Token} from '../Data/data';

//
export const Home = ({navigation}) => {
  const [userName, setuserName] = useState('ilies');
  const [SearchInput, setSearchInput] = useState('');
  // HorizontaleCardView FlatList

  ///--------------
  const renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={() => console.log(item.title)}>
      <View
        style={{
          width: 120,
          borderRadius: 15,
          marginHorizontal: 10,
        }}>
        <Image
          style={{height: 180, width: 120, borderRadius: 15, marginBottom: 12}}
          source={item.imagesrc}
        />
        {item.isAvailible ? (
          <View
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              top: 10,
              right: -4,
              rotation: 45,
              paddingHorizontal: 15,
            }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              مطلوب
            </Text>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: 'green',
              position: 'absolute',
              top: 12,
              right: -3,
              rotation: 45,
              paddingHorizontal: 15,
            }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              متاح
            </Text>
          </View>
        )}
        <View>
          <Text
            numberOfLines={1}
            style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={{color: '#959595', fontSize: 14}}>
            {item.auther}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  // HorizontaleCardView Data

  const BookList = [
    {
      auther: 'باولو كويلوا',
      id: '001',
      title: 'الخيميائي',
      imagesrc: require('../Assests/book1.jpg'),
      isAvailible: true,
    },
    {
      auther: 'د . منى المرشود',
      id: '002',
      title: 'أنت لي',
      imagesrc: require('../Assests/book2.jpg'),
      isAvailible: true,
    },
    {
      auther: 'د . خولة حمدي',
      id: '003',
      title: 'في قلبي أنثى عبرية',
      imagesrc: require('../Assests/book3.jpg'),
      isAvailible: false,
    },
    {
      auther: ' أحمد خالد مصطفى',
      id: '004',
      title: 'أنتيخريستوس',
      imagesrc: require('../Assests/book4.jpg'),
      isAvailible: true,
    },
    {
      auther: 'بيتر تييل',
      id: '005',
      title: 'من الصفر إلى الواحد',
      imagesrc: require('../Assests/book5.jpg'),
      isAvailible: false,
    },
    {
      auther: 'سبنسر جونسون',
      id: '006',
      title: 'من حرك جبنتى',
      imagesrc: require('../Assests/book6.jpg'),
      isAvailible: false,
    },
  ];

  return (
    <View style={styles.mainView}>
      {/* Header ( userName & Notfication Area) */}
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.push('Notification')}>
          <Image
            style={styles.notficationBall}
            source={require('../Assests/notificationBall.png')}
          />
        </TouchableWithoutFeedback>
        {Token ? (
          <Text style={styles.userNameStyle}>مرحبا, {userName} </Text>
        ) : (
          <Text
            style={{
              color: Colors.MainColor,
              flex: 1,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            تسجيل الدخول
          </Text>
        )}
      </View>
      {/* SearchBar  */}
      <View style={styles.searchBarHoler}>
        <Input
          placeholder="البحث عن كتاب"
          leftIcon={<Icon name="search" size={24} color={'gray'} />}
          inputContainerStyle={styles.srachInput}
          onChangeText={(value) => setSearchInput(value)}
          inputStyle={{color: 'white'}}
        />
      </View>
      {/* Tag Filtring  */}
      <TagsFiltring />
      {/* HorizontaleCardView */}
      <View>
        <FlatList
          data={BookList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>

      <View style={{flex: 1}}>
        <ListofBooks />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
    flex: 1,
    paddingLeft: 10,
  },
  userNameStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    paddingLeft: 15,
  },
  notficationBall: {
    height: 50,
    width: 50,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    paddingRight: 20,
  },
  searchBarHoler: {
    paddingRight: 20,
  },
  srachInput: {
    backgroundColor: Colors.grayColor,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
});
