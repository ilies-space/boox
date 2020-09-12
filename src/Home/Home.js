import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
//
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import Colors from '../Colors';

//
export const Home = () => {
  const [userName, setuserName] = useState('ilies');
  const [SearchInput, setSearchInput] = useState('');
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
          <Text style={{color: '#959595', fontSize: 16, marginVertical: 5}}>
            {item.auther}
          </Text>
        </View>

        <Image
          style={{height: 80, width: 80, borderRadius: 15, marginBottom: 12}}
          source={item.imagesrc}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  ///--------------
  const renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={() => console.log(item.title)}>
      <View
        style={{
          width: 160,
          borderRadius: 15,
          marginHorizontal: 10,
        }}>
        <Image
          style={{height: 220, width: 160, borderRadius: 15, marginBottom: 12}}
          source={item.imagesrc}
        />
        <View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {item.title}
          </Text>
          <Text style={{color: '#959595', fontSize: 16}}>{item.auther}</Text>
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
    },
    {
      auther: 'د . منى المرشود',
      id: '002',
      title: 'أنت لي',
      imagesrc: require('../Assests/book2.jpg'),
    },
    {
      auther: 'د . خولة حمدي',
      id: '003',
      title: 'في قلبي أنثى عبرية',
      imagesrc: require('../Assests/book3.jpg'),
    },
    {
      auther: ' أحمد خالد مصطفى',
      id: '004',
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
      auther: 'سبنسر جونسون',
      id: '006',
      title: 'من حرك جبنتى',
      imagesrc: require('../Assests/book6.jpg'),
    },
  ];

  const BookList2 = [
    {
      auther: ' أحمد خالد مصطفى',
      id: '004',
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

  return (
    <View style={styles.mainView}>
      {/* Header ( userName & Notfication Area) */}
      <View style={styles.header}>
        <Image
          style={styles.notficationBall}
          source={require('../Assests/notificationBall.png')}
        />
        <Text style={styles.userNameStyle}>مرحبا, {userName} </Text>
      </View>
      {/* SearchBar  */}
      <View style={styles.searchBarHoler}>
        <Input
          placeholder="Search a book"
          rightIcon={<Icon name="search" size={24} color={'gray'} />}
          inputContainerStyle={styles.srachInput}
          onChangeText={(value) => setSearchInput(value)}
          inputStyle={{color: 'white'}}
        />
      </View>
      {/* Tag Filtring  */}
      <View style={styles.TagsBtnScroller}>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            {/* ActiveBtn */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtnActive}>Top</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Inactive Btns  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>Noval</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>Noval</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>Noval</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>Noval</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>Noval</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>Noval</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>Noval</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* HorizontaleCardView */}
      <View>
        <FlatList
          data={BookList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>

      {/* exchanges offers books list  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 25,
          marginVertical: 20,
        }}>
        <TouchableWithoutFeedback onPress={() => console.log('All offers')}>
          <Text style={{color: Colors.MainColor, fontSize: 15, marginLeft: 20}}>
            كل العروض
          </Text>
        </TouchableWithoutFeedback>
        <Text
          style={{
            color: 'grey',
            fontSize: 25,
            flex: 1,
            fontWeight: 'bold',
          }}>
          عروض للتبادل
        </Text>
      </View>
      {/* VerticalCardView */}
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
  tagFilterBtn: {
    color: 'grey',
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 15,
  },
  tagFilterBtnHolder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagFilterBtnActive: {
    backgroundColor: Colors.MainColor,
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 15,
  },
  TagsBtnScroller: {
    height: 60,
  },
});
