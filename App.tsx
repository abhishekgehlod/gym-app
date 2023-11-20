import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



import SplaceScreen from './src/screens/SplaceScreen'
import LogInScreen from './src/screens/LogInScreen'
import Button from './src/customBtn/Button'
import RagistrationScreen from './src/screens/RagistrationScreen'
import HomeScreen from './src/screens/HomeScreen'
import GymNationScreen from './src/screens/GymNationScreen'
import ConformationScreen from './src/screens/ConformationScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddNewCard from './src/screens/AddNewCard';
import PaymentScreen from './src/screens/PaymentScreen';

const  App = () => {
  return (


    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SplaceScreen" component={SplaceScreen} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="RagistrationScreen" component={RagistrationScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="GymNationScreen" component={GymNationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    // <SplaceScreen />
    // <LogInScreen />
    // <Button/>
    // <RagistrationScreen />
    // <HomeScreen />
    // <GymNationScreen />
    // <ConformationScreen />
    // <ProfileScreen />
    // <AddNewCard />
    // <PaymentScreen  />
  )
}

export default  App