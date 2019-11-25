import React from 'react';

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
    return <BlogContext.Provider value={[1,2,3]}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;