import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ShowScreen = ({ navigation }) => {
    navigation.getParam('id')
    return (
        <View>
            <Text>ShowScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ShowScreen
