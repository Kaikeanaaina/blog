import React, { useReducer } from 'react';

const BlogContext = React.createContext();
// a pipe, an object responsible for giving information 
// from blog post provider to any children

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}`}]
        default:
            return state
    }
}

export const BlogProvider = ({children}) => {
    //this is the blog provider from the toptop level
    // we create an component, that will take another component as an argument
    // not using export default
    //can think of the return like
    // 'return <BlogContext.Provider>{children}</BlogContext.Provider>'
    // can't pass down an value object yet

    const [blogPosts, dispatch] = useReducer(blogReducer, [])
    //blogPosts can be seen as state

    const addBlogPost = () => {
        dispatch({type:'add_blogpost'})
    }

    // the value layout is how you pass data and functions down to the children
    // {data: blogPosts, addBlogPost: addBlogPost}
    return (<BlogContext.Provider value={{data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>)
}

export default BlogContext;