import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbscreen from './screens/fb';
import inscreen from './screens/in';
import { createAppContainer } from 'react-navigation';

export default function App() {

  

  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
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

const AppTabNavigator = createBottomTabNavigator({

  facebookScreen:{
    screen:fbscreen,
    navigationOptions:{
      tabBarLabel:'Face Book'
    }
  },

  instagramScreen:{
    screen:inscreen,
    navigationOptions:{
      tabBarLabel:'Insta'
  }

  }

})

const AppContainer = createAppContainer(AppTabNavigator)
