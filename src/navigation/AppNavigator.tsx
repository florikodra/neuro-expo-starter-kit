import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BaseNavigator from './BaseNavigator';

export default function () {
    return (
        <NavigationContainer>
            <BaseNavigator />
        </NavigationContainer>
    )
}