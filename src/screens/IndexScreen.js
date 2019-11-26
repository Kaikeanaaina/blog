import React, { useContext } from 'react'
// useContext is function that says
// look for some context object
// give us access to things' values props
// whenever we want to pass down information
// useContext is what we use
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={data}
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
