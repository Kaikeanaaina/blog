//1
import React, { useReducer } from 'react';

//2
const BlogContext = React.createContext();
// a pipe, an object responsible for giving information 
// from blog post provider to any children

//5
// this is my reducer function
const blogReducer = (state, action) => {
    switch (action.type) {
        // 8
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}`}]
        default:
            return state
    }
}

    //3
export const BlogProvider = ({children}) => {
    //this is the blog provider from the toptop level
    // we create an component, that will take another component as an argument
    // not using export default
    //can think of the return like
    // 'return <BlogContext.Provider>{children}</BlogContext.Provider>'
    // can't pass down an value object yet

    //6 - needs a state, a reducer, and a dispatch
    const [blogPosts, dispatch] = useReducer(blogReducer, [])
    //blogPosts can be seen as "state"
    //dispatch is like fire up this function
    // the first argumment "blogReducer" is the reducer we use
    // the second argument "[]" will be our initial state object
    // // by default we don't have any blog at all

    // 7
    const addBlogPost = () => {
        dispatch({type:'add_blogpost'})
    }
    // this fires up the function
    // goes into the reducer and does the reducer actions

    //4
    // the value layout is how you pass data and functions down to the children
    // {data: blogPosts, addBlogPost: addBlogPost}
    return (<BlogContext.Provider value={{data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>)
}

//2.5
export default BlogContext;