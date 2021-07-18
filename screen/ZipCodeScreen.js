import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', thai: 'หาดใหญ่', code: '90110' },
    { place: 'Trang', thai: 'ตรัง', code: '92000' },
    { place: 'Chiangmai', thai: 'เชียงใหม่', code: '50000' },
    { place: 'Khonkaen', thai: 'ขอนแก่น', code: '40000' },
    { place: 'Chonburi', thai: 'ชลบุรี', code: '20000' },
    { place: 'Suratthani', thai: 'สุราษฎร์ธานี', code: '84000' },
    { place: 'Satun', thai: 'สตูล', code: '91000' },
    { place: 'Nakhormpathom', thai: 'นครปฐม', code: '73000' },
    { place: 'Buriram', thai: 'บุรีรัมย์', code: '31000' },
    { place: 'Ubonratchathani', thai: 'อุบลราชธานี', code: '34000' },
   ]

const ZipItem = ({place, code, navigation, thai}) => (
    <TouchableHighlight underlayColor='yellow' onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style ={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{thai}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    zipPlace: {
        flex: 1,

    },
    zipCode: {
        flex: 1,
    },
    ZipThai: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }

})