import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/components/Login'
import Home from './src/components/Home'

const Stack = createStackNavigator()

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App