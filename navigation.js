import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/screens/Home';
import Daily from './src/screens/Daily';
import City from './src/screens/City';

export default function RootNavigation() {
    const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();

    // const screenOptions = {
    //     headerShown: false
    // }
    function WeatherDetails() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="City" component={City} />
                <Tab.Screen name="Daily" component={Daily} />
            </Tab.Navigator>
        );
    }

    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" >
                    <Stack.Screen name='Home' component={Home}></Stack.Screen>
                    <Stack.Screen
                        name="TabNavigator"
                        component={WeatherDetails}
                        options={{
                            headerShown: true,
                            // headerStyle: {
                            //     elevation: 0,
                            //     backgroundColor: '#24242C',
                            //     titleStyle: 'center',
                            //     shadowColor: '#FF5E2C',
                            //     shadowOpacity: 0,
                            //     borderBottomWidth: 0,
                            //     shadowOffset: {
                            //         height: 0,
                            //         width: 0,
                            //     },
                            //     shadowRadius: 0,
                            // },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    )
}