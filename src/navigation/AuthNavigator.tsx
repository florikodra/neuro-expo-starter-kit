import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >   
            <Stack.Screen name="UserLogin" component={LoginScreen} />
        </Stack.Navigator>
    )
}