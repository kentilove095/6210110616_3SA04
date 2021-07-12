import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style={styles.fonts}>{props.main}</Text>
            <Text style={styles.des}>{props.description}</Text>
            <Text style={styles.tempt}>{props.temp}°C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fonts: {
        width: 400,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 30,
        color: "gray",
        backgroundColor: 'orange',
        opacity: 0.5
    },
    
    des: {
        textAlignVertical: 'center',
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 20,
        color: "black",
        backgroundColor: 'orange',
        opacity: 0.5
    },
    tempt: {
        textAlignVertical: 'center',
        fontSize: 20,
        textAlign: 'center',
        height: 60,
        backgroundColor: 'orange',
        opacity: 0.5,        
    }
})