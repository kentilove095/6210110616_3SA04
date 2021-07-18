import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screen/WeatherScreen';
import ZipCodeScreen from './screen/ZipCodeScreen';
import { StyleSheet } from 'react-native';




const Stack = createStackNavigator()

export default function App() { 
  return (
    <NavigationContainer style={styles.head}>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={ZipCodeScreen} />
        <Stack.Screen name = "Weather" component={WeatherScreen}/>
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
