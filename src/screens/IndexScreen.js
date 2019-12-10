import React, { useContext } from 'react'
// useContext is function that says
// look for some context object
// give us access to things' values props
// whenever we want to pass down information
// useContext is what we use
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'
// this could be use if you have multiple Context, that data is flowing from
// ie
    // import { Context as BlogContext } from '../context/BlogContext'
    // import { Context as ImageContext } from '../context/ImageContext'

const IndexScreen = () => {
    const { state, addBlogPost} = useContext(Context);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen
