import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/index'
import BottomTabs from '../screens/tabs';


const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='homeee' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Bonkour" component={BottomTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes