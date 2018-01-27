import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  thumbnailIcon: {
    width: 50,
    height: 50,
  },
});

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
  navigationOptions: {
    headerTitle: 'Reddit Hotリスト',
    headerStyle: {
      backgroundColor: '#ccc',
    },
  },
});

export default App;