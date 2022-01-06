import React,{useEffect} from 'react'
import { View, Text, SafeAreaView,Button, StyleSheet,Dimensions } from 'react-native'
import SlideIn from '../components/home/SlideIn'
import Feather from 'react-native-vector-icons/Feather'

const  DATA=[
    {'temp':'20','city':'London','forecast':'Cloudy'},
    {'temp':'37','city':'Paris','forecast':'Sunny'},
    {'temp':'40','city':'New York','forecast':'Snow'},
    {'temp':'43','city':'New York','forecast':'Rainy'}
  ]



 
export default function Home({navigation,navigationOptions}) {
    useEffect(()=>{
        navigation.setOptions({
            title: `cliMate`,
            headerRight: () => <Feather name='search' style={{marginRight:20}} size={20} color='black' />,
            headerLeft: () => <Feather name='list' style={{marginLeft:20}} size={20} color='black' />
          })
     })   


    return (
        <View style={{flex:1, alignSelf:'center', backgroundColor:'#f8f8ff'}}>
        
            {DATA.map((item,index)=>{
                return(
                    <SlideIn key={index} index temp ={item.temp} name={item.city} forecast={item.forecast}/>
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