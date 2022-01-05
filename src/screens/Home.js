import React from 'react'
import { View, Text, SafeAreaView,Button, StyleSheet,Dimensions } from 'react-native'
import SlideIn from '../components/home/SlideIn'

const  DATA=[
    {'temp':'20','city':'London'},
    {'temp':'30','city':'Paris'}, 
    {'temp':'40','city':'New York'},
    {'temp':'50','city':'Berlin'},]


export default function Home({navigation}) {
    return (
        <View style={{flex:1, alignSelf:'center', backgroundColor:'#f8f8ff'}}>
        
            {DATA.map((item,index)=>{
                return(
                    <SlideIn key={index} index temp ={item.temp} name={item.city}/>
                )
            })}
         
     
         <Button title='click me' onPress={()=>navigation.navigate('TabNavigator')}></Button>
            
        </View>
        
    )
}



// const SlideIn = ({name}) => {
//     return(
//         <Animated.View
//             entering={SlideInLeft}
//             style={styles.card}>
//             <Text style={{textAlign:'center'}}>{name} {'\u00b0'}</Text>
//         </Animated.View>
//     )
// }