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
      <BookList />
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
