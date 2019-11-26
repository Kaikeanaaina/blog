import React, {useState} from 'react';

const BlogContext = React.createContext();
// a pipe, an object responsible for giving information 
// from blog post provider to any children

export const BlogProvider = ({children}) => {
    //this is the blog provider from the toptop level
    // we create an component, that will take another component as an argument
    // not using export default
    //can think of the return like
    // 'return <BlogContext.Provider>{children}</BlogContext.Provider>'
    // can't pass down an value object yet

    const [blogPosts, setBlogPosts] = useState([])

    const addBlogPost = () => {
        setBlogPosts([ ...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`}]);
    }

    // the value layout is how you pass data and functions down to the children
    // {data: blogPosts, addBlogPost: addBlogPost}
    return (<BlogContext.Provider value={{data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>)
}

export default BlogContext;