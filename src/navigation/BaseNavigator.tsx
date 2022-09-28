import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BaseTabNavigator from './BaseTabNavigator';

const Stack = createNativeStackNavigator();

export default function () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >   
            <Stack.Screen name="BaseNavigator" component={BaseTabNavigator} />
            
        </Stack.Navigator>
    )
}