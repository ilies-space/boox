import React from 'react';
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import Colors from '../Colors';
export default function ListofBooks() {
  //

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

  //
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
    <View>
      {/* exchanges offers books list  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 25,
          marginVertical: 20,
          flex: 1,
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
      <View>
        <FlatList
          data={BookList2}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

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
