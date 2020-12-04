import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import AddressScreen from './src/screens/AddressScreen';
import CartScreen from './src/screens/CartScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import RestrauntScreen from './src/screens/RestrauntScreen';
import RatingScreen from './src/screens/RatingScreen';
import ItemScreen from './src/screens/ItemScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component ={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Address" component = {AddressScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Restraunt" component={RestrauntScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Item" component={ItemScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component = {CartScreen} options= {{ headerShown: false }} />
        <Stack.Screen name="Progress" component = {ProgressScreen} options= {{ headerShown: false }} />
        <Stack.Screen name="Rating" component = {RatingScreen} options= {{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
