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
import {Feather} from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost} = useContext(Context);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item}) => {
                    return <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Feather style={styles.icon} name="trash" />
                    </View>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen


//https://github.com/expo/vector-icons
//this is where all the icons will be stored for use 