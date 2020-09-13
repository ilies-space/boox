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
  // HorizontaleCardView FlatList

  ///--------------
  const renderItem = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.push('SelectedBook', {
          item: item,
        })
      }>
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
              borderRadius: 10,
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
              borderRadius: 10,
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
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
      book_owner: 'عبد الكريم بن دادا',
    },
    {
      auther: 'د . منى المرشود',
      book_owner: 'عبد الكريم بن دادا',
      id: '002',
      title: 'أنت لي',
      imagesrc: require('../Assests/book2.jpg'),
      isAvailible: true,
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
    },
    {
      book_owner: 'عبد الكريم بن دادا',
      auther: 'د . خولة حمدي',
      id: '003',
      title: 'في قلبي أنثى عبرية',
      imagesrc: require('../Assests/book3.jpg'),
      isAvailible: false,
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
    },
    {
      book_owner: 'عبد الكريم بن دادا',
      auther: ' أحمد خالد مصطفى',
      id: '004',
      title: 'أنتيخريستوس',
      imagesrc: require('../Assests/book4.jpg'),
      isAvailible: true,
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
    },
    {
      auther: 'بيتر تييل',
      book_owner: 'عبد الكريم بن دادا',
      id: '005',
      title: 'من الصفر إلى الواحد',
      imagesrc: require('../Assests/book5.jpg'),
      isAvailible: false,
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
    },
    {
      auther: 'سبنسر جونسون',
      id: '006',
      book_owner: 'عبد الكريم بن دادا',
      title: 'من حرك جبنتى',
      imagesrc: require('../Assests/book6.jpg'),
      isAvailible: false,
      description:
        ',لوريم ايبسوم  دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تيمبور ',
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
          <TouchableWithoutFeedback
            onPress={() => navigation.push('LoginStack')}>
            <Text
              style={{
                color: Colors.MainColor,
                flex: 1,
                fontSize: 15,
                fontWeight: 'bold',
                marginRight: 10,
              }}>
              تسجيل الدخول
            </Text>
          </TouchableWithoutFeedback>
        )}
      </View>
      {/* SearchBar  */}

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
        <View
          style={{
            height: 35,
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          <Text style={{color: Colors.MainColor, fontSize: 16}}>فتح الكل</Text>
          <Text
            style={{
              flex: 1,
              alignItems: 'flex-end',
              color: 'grey',
              fontSize: 20,
            }}>
            اخر الإضافات
          </Text>
        </View>
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
    height: 35,
    width: 35,
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    paddingRight: 20,
  },
  searchBarHoler: {
    paddingRight: 10,
  },
  srachInput: {
    backgroundColor: Colors.grayColor,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    height: 40,
  },
});
