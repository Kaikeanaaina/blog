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
        default:
            return state
    }
}

// 4 - helper function
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    }
}
// this fires up the function
// goes into the reducer and does the reducer actions

//5 - creates the Context and Provider
// 1st argument - reducer used
// 2nd argument - helper functions, where we add all the different functions we want
// 3rd argument - initial state devalue
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost },
    []
)