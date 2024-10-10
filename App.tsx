import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ChefLogin from './screens/ChefLogin';
import ChefMenu from './screens/ChefMenu';
import MenuPage from './screens/MenuPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChefLogin" component={ChefLogin} />
        <Stack.Screen name="ChefMenu" component={ChefMenu} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
