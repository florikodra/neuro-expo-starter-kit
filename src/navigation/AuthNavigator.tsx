import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Screens
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';
import VerifyAccountScreen from '../screens/Auth/VerifyAccountScreen';


const Stack = createNativeStackNavigator();

export default function () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >   
            <Stack.Screen name="UserLogin" component={LoginScreen} />
            <Stack.Screen name="UserSignUp" component={SignUpScreen} />
            <Stack.Screen name="UserPasswordReset" component={ResetPasswordScreen} />
            <Stack.Screen name="UserVerifyAccount" component={VerifyAccountScreen} />
        </Stack.Navigator>
    )
}