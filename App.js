import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screen/WeatherScreen';
import ZipCodeScreen from './screen/ZipCodeScreen';
import { StyleSheet } from 'react-native';




const Stack = createStackNavigator()

export default function App() { 
  return (
    <NavigationContainer color='blue' >
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={ZipCodeScreen} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name = "Weather" component={WeatherScreen} options={{
          title: 'Weather',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  head: {
        width: 400,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 30,
        color: "gray",
        backgroundColor: 'orange',
        opacity: 0.5
  }
})
