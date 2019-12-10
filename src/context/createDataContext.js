//1
import React, { useReducer } from 'react'

//2
export default (reducer, actions, initialState) => {
    //3
    // a pipe, an object responsible for giving information 
    // from blog post provider to any children
    //ACTIONS - the 2nd argument, describe how we are going to change the state
    const Context = React.createContext()

    //4
    const Provider = ({ children }) => {
        //this is the blog provider from the toptop level
        // we create an component, that will take another component as an argument
        // not using export default
        //can think of the return like
        // 'return <BlogContext.Provider>{children}</BlogContext.Provider>'
        // can't pass down an value object yet

        //5 - needs a state, a reducer, and a dispatch
        const [state, dispatch] = useReducer(reducer, initialState)
        //blogPosts can be seen as "state"
        //dispatch is like fire up this function
        // the first argumment "blogReducer" is the reducer we use
        // the second argument "[]" will be our initial state object
        // // by default we don't have any blog at all

        //7 - the tricky nasty and high level code
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        //6
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
        //// the value layout is how you pass data and functions down to the children
        // {data: blogPosts, addBlogPost: addBlogPost}
    }

    //7
    return { Context, Provider }
};