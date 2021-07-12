import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';


export default function Weather(props){

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {

        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=708ca3373c56829b411200be2c34ab89`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
            }
    }, [props.zipCode])
    

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