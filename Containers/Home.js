import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// imports for navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../Screens/Feed'
import Rooms from '../Screens/Rooms'

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false }}  />
            <Tab.Screen name="Rooms" component={Rooms} options={{ headerShown: false }} />
        </Tab.Navigator>
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
