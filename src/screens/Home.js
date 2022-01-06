import React, { useEffect } from 'react'
import { View, TouchableOpacity, SafeAreaView, Button, StyleSheet, Dimensions } from 'react-native'
import SlideIn from '../components/home/SlideIn'
import Feather from 'react-native-vector-icons/Feather'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const DATA = [
    { 'temp': '20', 'city': 'London', 'forecast': 'Cloudy' },
    { 'temp': '37', 'city': 'Paris', 'forecast': 'Sunny' },
    { 'temp': '40', 'city': 'New York', 'forecast': 'Snow' },
    { 'temp': '43', 'city': 'New York', 'forecast': 'Rainy' }
]


const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation, navigationOptions }) {
    useEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: '#f8f8ff' },
            title: 'Aligned Center',
            headerTitleAlign: 'center',
            title: `cliMate`,
            headerRight: () => <TouchableOpacity><Feather name='search' style={{ marginRight: 20 }} size={20} color='black' /></TouchableOpacity>,
            headerLeft: () => <TouchableOpacity><Feather name='list' style={{ marginLeft: 20 }} size={20} color='black' /></TouchableOpacity>
        })
    })


    return (
        <View style={{ flex: 1, alignSelf: 'center',padding:20 ,backgroundColor: '#f8f8ff' }}>

            {DATA.map((item, index) => {
                return (
                    <SlideIn key={index} index temp={item.temp} name={item.city} forecast={item.forecast} />
                )
            })}

        </View>

    )
}





