import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../configs/colors';
import { Feather } from '@expo/vector-icons';

const TabBottomButton = ({onPress, selected, iconName}) => {
    
    const backgroundBtnColor = selected ? colors.gray : colors.white;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.container, backgroundColor: backgroundBtnColor}}>
                <Feather name={iconName} color={selected ? colors.white : colors.inActiveTintColor } size={27} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 70,
        borderRadius: 15,
        bottom: 30,
        borderColor: colors.light,
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})


export default TabBottomButton;