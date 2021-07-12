import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';


export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return(
        <ImageBackground source={require('../backg.jpg')} style ={styles.backdrop }>
            <Text style={styles.fonts}>Zip Code is {props.zipCode}</Text>
            <Forecast  {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    fonts: {
        textAlignVertical: 'center',
        paddingTop: 25,
        height: 70,
        color: 'gray',
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'orange',
        opacity: 0.5
    }
})