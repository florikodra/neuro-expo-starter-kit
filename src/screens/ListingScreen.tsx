import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


export default () => {

    return (
        <View style={styles.container}>
            <Text>Listing Screen</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});