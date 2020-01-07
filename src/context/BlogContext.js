//1
import React, { useReducer } from 'react';
//2
import createDataContext from './createDataContext'

//3
// this is my reducer function
const blogReducer = (state, action) => {
    switch (action.type) {
        // 8
        case 'add_blogpost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog Post #${state.length + 1}`
                }
            ]
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
            //the filter still create a new array,
            // filter will go through the old arra to check if the id matches
            // if false, it removes the object
            // then returns a brand new state array
        default:
            return state
    }
}

// 4 - helper function
const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    }
}
// this fires up the function
// goes into the reducer and does the reducer actions

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

//5 - creates the Context and Provider
// 1st argument - reducer used
// 2nd argument - helper functions, where we add all the different functions we want
// 3rd argument - initial state devalue
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
)