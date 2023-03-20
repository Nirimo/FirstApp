import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import dashBoardStyles from './style.js';
import { FakeActivity } from '../../fakeData/fakeActivity.js';
import ActivityItem from '../../components/activityItem/index.js';



const HomeScreen = () => {
  return (<ScrollView>
    {/* Debut du header */}
    <View style={dashBoardStyles.header}>
      <Text style={dashBoardStyles.userName}>Daniel Bresson</Text>
      <Image source ={require("../../assets/photo.png")} style={dashBoardStyles.userImg}/>
    </View>
    <FlatList 
      data={FakeActivity} 
      keyExtractor={item => item.id} 
      horizontal={true}
      style={dashBoardStyles.scrollableList}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=>{
        return (
          <ActivityItem item={item} index={index}/>
        )
      }}/>
  </ScrollView>)
}

export default HomeScreen