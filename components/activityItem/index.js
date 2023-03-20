import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SVG_HOSPITAL from '../../assets/images/svg/undraw_medicine_b-1-ol.svg';
import styles from './style';
import { FakeActivity } from '../../fakeData/fakeActivity.js';

const ActivityItem = ({item}, {index}) => {
  return (
    <TouchableOpacity style={(index==FakeActivity.length-1)?styles.scrollableListItemLast : styles.scrollableListItem}>
        <SVG_HOSPITAL width={60} height={60}/>
        <Text style={styles.mainText}>{item.mainText}</Text>
        <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  )
}

export default ActivityItem;