import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../Colors';
//
export default function TagsFiltring() {
  return (
    <View>
      <View style={styles.TagsBtnScroller}>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            {/* ActiveBtn */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtnActive}>الأفضل</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Inactive Btns  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>روايات</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>خيال علمي</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>تطوير ذات</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>ديانات</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>تاريخ</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>سياسة</Text>
              </TouchableWithoutFeedback>
            </View>
            {/* Another btn  */}
            <View style={styles.tagFilterBtnHolder}>
              <TouchableWithoutFeedback>
                <Text style={styles.tagFilterBtn}>تكنولوجيا</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 50,
  },
});
