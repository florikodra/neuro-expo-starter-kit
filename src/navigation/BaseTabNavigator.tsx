import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

//Import Screens
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ExampleScreen from '../screens/ExampleScreen';

const Tab = createBottomTabNavigator()

const BaseTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    paddingTop: 10,
                    paddingBottom: 10,
                    height: 60,
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen name="About" component={AboutScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="grid" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen name="Example" component={ExampleScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="heart" color={color} size={size} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default BaseTabNavigator;