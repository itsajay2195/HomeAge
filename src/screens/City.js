import React, { useEffect } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, SafeAreaView, FlatList, Text } from 'react-native'
import Daily from './Daily';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack'

const images = [
    { 'title': '1', 'url': 'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png' },
    { 'title': '2', 'url': 'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg' },
]

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


function WeatherDetails({ navigation }) {
    const Tab = createMaterialTopTabNavigator();
   
    const imageListRef = React.useRef()
    
    const scrollRef = React.useRef()
    const scrollY = React.useRef(new Animated.Value(0)).current
    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true },
    )
   
    return (
        <Tab.Navigator  >
            <Tab.Screen name="City" component={City} />
            <Tab.Screen name="Daily" component={Daily} />
        </Tab.Navigator>
    );
}



function City({ navigation }) {

    useEffect(() => {
        navigation.setOptions({
            headerShown:false,
            headerStyle: { backgroundColor: '#f8f8ff' },
            title: 'Aligned Center',
            headerTitleAlign: 'center',
            title: `cliMate`,
        })
    })
   
          
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    const contentRef = React.useRef()
    React.useEffect(() => {
        scrollY.addListener(v => {
            if (imageListRef.current) {
                imageListRef.current.scrollToOffset({ offset: v.value, animated: false })
                scrollRef.current.scrollToOffset({ offset: v.value, animated: false })
            }
        })
    })


    return (
        <SafeAreaView>
            <View style={{ height: deviceHeight / 2 }}>
                <Animated.FlatList
                    snapToAlignment={'top'}
                    viewabilityConfig={viewConfigRef.current}
                    pagingEnabled
                    decelerationRate={'fast'}
                    data={images}
                    ref={contentRef}
                    onScroll={onScroll}
                    keyExtractor={item => item.title}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: deviceWidth, height: deviceHeight / 2 }}>
                                <View>
                                    <Text style={{ margin: 0 }}>{item.title}</Text>
                                    <Text style={{ margin: 0 }}>{item.title}</Text>
                                    <Text style={{ margin: 0 }}>{item.title}</Text>
                                    <Text style={{ margin: 0 }}>{item.title}</Text>
                                </View>

                            </View>


                        )
                    }} />
            </View>
        </SafeAreaView>
    )
}


export { City, WeatherDetails }


const List = ({ Component, data, ref }) => {
    return (
        <Animated.FlatList
            data={data}
            decelerationRate={'fast'}
            ref={ref}
            scrollEventThrottle={16}
            scrollEnabled={false}
            keyExtractor={item => item.title}
            renderItem={({ item, index }) => {
                return (
                    // <View style={{ height: deviceHeight / 3, width: '100%' }}>
                    //     <Image blurRadius={25} source={{ uri: item.url }} style={{ width: '100%', height: '100%' }}></Image>
                    // </View>
                    <Component url={item.url} />
                )
            }} />
    )
}

const TopImageCard = ({ url }) => {
    return (
        <View style={{ height: deviceHeight / 3, width: '100%' }}>
            <Image blurRadius={25} source={{ uri: url }} style={{ width: '100%', height: '100%' }}></Image>
        </View>
    )
}

const ImageRevolver = ({ url }) => {
    return (
        <Image source={{ uri: url }} style={{ borderRadius: 70, height: 100, width: 90 }}></Image>

    )
}
