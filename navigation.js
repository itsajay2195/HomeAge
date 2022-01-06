import React,{useEffect} from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Home} from './src/screens/Home';
import Daily from './src/screens/Daily';
import City from './src/screens/City';
import { setNavigator } from './src/navigationRef';
import Header from './src/components/details/Header';

export default function RootNavigation() {
    const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();

    // const screenOptions = {
    //     headerShown: false
    // }
    function WeatherDetails({navigation}) {
        useEffect(() => {
            navigation.setOptions({
                headerStyle: { backgroundColor: '#f8f8ff' },
                headerTitle:'Weather Details',
                header: () => (
                    // <View style={{height:600,backgroundColor: '#24242C'}}>
                    //   <SafeAreaView><Text> Hi</Text></SafeAreaView>
                    // </View>
                    <Header />
                  ), })
        })
        return (
            <Tab.Navigator >
                <Tab.Screen name="City" component={City} />
                <Tab.Screen name="Daily" component={Daily} />
            </Tab.Navigator>
        );
    }

    return (
            <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
                <Stack.Navigator initialRouteName="Home" >
                    <Stack.Screen name='Home' component={Home} ></Stack.Screen>
                    <Stack.Screen
                        name="TabNavigator"
                        component={WeatherDetails}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                elevation: 0,
                                backgroundColor: '#24242C',
                                
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    )
}