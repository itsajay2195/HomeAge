import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native'
import Animated, { SlideInRight } from 'react-native-reanimated'
import Feather from 'react-native-vector-icons/Feather'
import {navigate} from '../../navigationRef'


const DEVICE_HEIGHT = Dimensions.get('window').height
const DEVICE_WIDTH = Dimensions.get('window').width


export default function SlideIn({ temp, name, index,forecast }) {

    const iconPicker = (forecast)=>{
        switch(forecast){
            case 'Sunny':
                return 'sun'
            case 'Rainy':
                return 'cloud-drizzle'
            case 'Cloudy':
                return 'cloud'
            case 'Snow':
                return 'cloud-snow'
            default:
                return 'sun'
        }
    }

    const colorPicker = (forecast)=>{
        switch(forecast){
            case 'Sunny':
                return '#cfbe10'
            case 'Rainy':
                return '#0039a6'
            case 'Cloudy':
                return '#6CB4EE'
            case 'Snow':
                return '#00008B'
            default:
                return '#cfbe10'
        }
    }
    return (
        <TouchableOpacity onPress={()=>navigate('TabNavigator')}>
            <Animated.View
                entering={SlideInRight.delay(1000)}
                style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.temperatureText}>{temp}{'\u00b0'}</Text>
                    <View style={styles.centerText}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{name} </Text>
                        <Text style={{ fontWeight: '300' }}>{name} </Text>
                    </View>
                </View>
                <View style={styles.iconWrapper}>
                    <Feather name={iconPicker(forecast)} style={{ alignSelf: 'center' }} size={25} color={colorPicker(forecast)} />
                </View>
            </Animated.View >
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: DEVICE_WIDTH - 60,
        marginVertical: 10,
        margin:40
    },
    temperatureText: {
        fontSize: 60,
        fontWeight: Platform.OS === 'ios' ? '100' : '100',
        color: 'black',
    },
    iconWrapper: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor: '#f8f8ff', height: 50, width: 50, borderWidth: 0.2, borderColor: 'white', elevation: 5, borderRadius: 50, justifyContent: 'center', alignSelf: 'center'
    },
    centerText: {
        paddingLeft: 10,
        top: 25,

    }
})