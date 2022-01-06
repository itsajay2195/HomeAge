import React, { useEffect,useState } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions,Image,Animated } from 'react-native';
import Constants from 'expo-constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'




const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  { 'title': '1', 'url': 'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png' },
  { 'title': '2', 'url': 'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg' },
]


export default function App() {
  const ImageContent = () => {
    return(
      <View style={{position:'absolute'}}>
          <Animated.FlatList
        data={images}
        ref={imageListRef}
        scrollEnabled={false}
        scrollEventThrottle={16}
        keyExtractor={item => item.title}
        renderItem={({ item, index }) => {
          return (
            <>
            <Image source={{ uri: item.url }} style={{ borderRadius: 70, height: 100, width: 90 }}></Image>
            </>
          )
        }} />
      </View>
    )
      
  };

  const ImageCard = ({ item, index }) => {
    return (
      <Animated.FlatList
          data={images}
          decelerationRate={'fast'}
          ref={scrollRef}
          scrollEventThrottle={16}
          scrollEnabled={false}
          keyExtractor={item => item.title}
          renderItem={({ item, index }) => {
            return (
              <View style={{ height: deviceHeight / 2, width: '100%' }}>
                <Image blurRadius={25} source={{ uri: item.url }} style={{ width: '100%', height: '100%' }}></Image>
              </View>
            )
          }} />
    );
  };

  function City({ navigation }) {
    return(
      <View style={{ flex:1,backgroundColor:'white' }}>
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
              <>
                <View style={{alignSelf:'center'}}>
                  <Feather style={{alignSelf:'center'}} name='list'  size={40} color='black' />
                  <Text style={styles.temperatureText}>35<Text style={{fontSize:20,justifyContent:''}}>{'\u00b0'}F</Text></Text>
                  <Text style={{textAlign:'center'}}>Snow Showers</Text>
                  <Text style={{textAlign:'center',fontWeight:'bold'}}> 35{'\u00b0'}<Text style={{fontWeight:'normal'}}> 24{'\u00b0'}</Text></Text>
                  
                </View>
                
             
                  <View style={{flex:1,marginTop:30,flexDirection:'row',justifyContent:'space-between',marginHorizontal:15}}>
                    <View>
                        <Feather style={{alignSelf:'center',fontSize:20}} name='umbrella'  color='black' />
                        <Text style={{fontSize:20}}>100%</Text>
                    </View>

                    <View>
                        <Feather style={{alignSelf:'center',fontSize:20}} name='droplet'  color='black' />
                        <Text style={{fontSize:20}}>100%</Text>
                    </View>

                    <View>
                        <Feather style={{alignSelf:'center',fontSize:20}} name='wind'  color='black' />
                        <Text style={{fontSize:20}}>100%</Text>
                    </View>
              
                </View>
               
              </>
            </View>
          )
        }} />
    </View>
    )
  
  }

  const Daily = ({ navigation }) => {
    return (
      <View style={{ flex: 1, paddingTop: 30, height:100 }}>
        <Text>Hi</Text>
      </View>
    )
  }


  let [index, setIndex] = useState(0)
  const Tab = createMaterialTopTabNavigator();
  const imageListRef = React.useRef()
  const contentRef = React.useRef()
  const scrollRef = React.useRef()
  const scrollY = React.useRef(new Animated.Value(0)).current
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true },
  )
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  React.useEffect(() => {
    scrollY.addListener(v => {
      if (imageListRef.current) {
        imageListRef.current.scrollToOffset({ offset: v.value, animated: false })
        scrollRef.current.scrollToOffset({ offset: v.value, animated: false })
      }
    })
  })

  return (
    
    <View style={{ flex: 1 }}>
         <View style={{ height: deviceHeight / 2 }}>
              <ImageCard/>
              <View style={{ alignSelf: 'center', borderRadius: 10, height: 100, width: 90, bottom: 50 }}>
                  <ImageContent />
              </View>
        </View>
        <View style={{top:-50, flex:1}}>
          <NavigationContainer >
            <Tab.Navigator tabBarOptions={{showLabel:false,indicatorStyle:{width:3,backgroundColor:'black'}, style:{} }}  >
              <Tab.Screen name="Cty" component={City}  />
              <Tab.Screen name="Daily" component={Daily} tabBarOptions={{showLabel:true}}  />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  temperatureText: {
    fontSize: 90,
    fontWeight: Platform.OS === 'ios' ? '100' : '100',
    color: 'black',
    textAlign: 'center',
 
    
},
})
