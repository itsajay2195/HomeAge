import React, { useState } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView, FlatList, Text } from 'react-native'


const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
    { 'title': '1', 'url': 'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png' },
    { 'title': '2', 'url': 'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg' },
]

export default function App({ ref }) {
    const imageListRef = React.useRef()
    const contentRef = React.useRef()
    const scrollRef = React.useRef()
    const scrollY = React.useRef(new Animated.Value(0)).current
    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true },
    )
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    //   React.useEffect(() => {
    //     scrollY.addListener(v => {
    //       if (imageListRef.current) {
    //         imageListRef.current.scrollToOffset({ offset: v.value, animated: false })
    //         scrollRef.current.scrollToOffset({ offset: v.value, animated: false })
    //       }
    //     })
    //   })
    return (
        <View >
            <View style={{ height: deviceHeight / 2 }}>
                {/* <Animated.FlatList
                    data={images}
                    decelerationRate={'fast'}
                    ref={scrollRef}
                    scrollEventThrottle={16}
                    scrollEnabled={false}
                    keyExtractor={item => item.title}
                    renderItem={({ item, index }) => {
                        return (
                            // <View style={{ height: deviceHeight / 3, width: '100%' }}>
                            //     <Image blurRadius={25} source={{ uri: item.url }} style={{ width: '100%', height: '100%' }}></Image>
                            // </View>
                            <TopImageCard url={item.url} />
                        )
                    }} /> */}
                <List Component={TopImageCard} data={images} scrollRef={imageListRef} />

                <View style={{ alignSelf: 'center', borderRadius: 10, height: 100, width: 90, margin: 50, bottom: 100 }}>
                    {/* <Animated.FlatList
                        data={images}
                        ref={imageListRef}
                        scrollEnabled={false}
                        scrollEventThrottle={16}
                        keyExtractor={item => item.title}
                        renderItem={({ item, index }) => {
                            return (

                                // <Image source={{ uri: item.url }} style={{ borderRadius: 70, height: 100, width: 90 }}></Image>
                                <ImageRevolver url={item.url} />

                            )
                        }} /> */}
                    <List Component={ImageRevolver} data={images} scrollRef={contentRef} />
                </View>


            </View>


            {/* <View style={{ height: deviceHeight / 2 }}>
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
      </View> */}





        </View>


    );
}



const List = ({Component,data,scrollRef})=>{
    return(
        <Animated.FlatList
            data={data}
            decelerationRate={'fast'}
            ref={scrollRef}
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

const TopImageCard = ({url})=>{
    return(
    <View style={{ height: deviceHeight / 3, width: '100%' }}>
        <Image blurRadius={25} source={{uri: url}} style={{ width: '100%', height: '100%' }}></Image>
    </View>
    )
}

const ImageRevolver = ({url})=>{
    return(
        <Image source={{uri: url }} style={{ borderRadius: 70, height: 100, width: 90 }}></Image>

    )
}

