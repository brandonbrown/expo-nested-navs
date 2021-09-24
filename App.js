import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// imports for navigation
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Containers/Home'

import Account from './Screens/Account'
import Settings from './Screens/Settings'
import Messages from './Screens/Messages'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator.
  // We still set default case to control for additional situations where
  // navigation routes are not found
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Feed':
      return 'Feed';
    case 'Rooms':
      return 'Rooms';
    case 'Tea':
      return 'Tea';
    default:
      return 'Custom Home Title';
  }
}

function Main() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={({ route, navigation }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Messages')}
                title="Chat"
              />
            ),
          })}
        />
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
      
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
