import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Animated, { SlideInRight } from 'react-native-reanimated'
import Feather from 'react-native-vector-icons/Feather'


const DEVICE_HEIGHT = Dimensions.get('window').height
const DEVICE_WIDTH = Dimensions.get('window').width


export default function SlideIn({ temp, name, index }) {
    return (
        <TouchableOpacity>
            <Animated.View
                entering={SlideInRight.delay(1000)}
                style={styles.card}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.temperatureText}>{temp} {'\u00b0'}</Text>
                    <View style={styles.centerText}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{name} </Text>
                        <Text style={{ fontWeight: '300' }}>{name} </Text>
                    </View>

                </View>




                <View style={styles.iconWrapper}>
                    <Feather name='cloud' style={{ alignSelf: 'center' }} size={25} color='#6CB4EE' />
                </View>

            </Animated.View >
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: DEVICE_WIDTH - 20,
        marginVertical: 10,
    },
    temperatureText: {
        fontSize: 60,
        fontWeight: '200',
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
        justifyContent: 'center',

    }
})