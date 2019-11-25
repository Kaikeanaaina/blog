import React, { useContext } from 'react'
// useContext is function that says
// look for some context object
// give us access to things' values props
// whenever we want to pass down information
// useContext is what we use
import { View, Text, StyleSheet } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const value = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen
