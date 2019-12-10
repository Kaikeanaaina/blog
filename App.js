import React from 'react';
import IndexScreen from './src/screens/IndexScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator)

export default () => {
  // this allows us to customize our component
  // instead of the usual 'export default createAppContainer(navigator)  
  return <Provider>
    <App />
  </Provider>
}