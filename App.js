import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './ScreenProfile';
import StackNav from './StackNav';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <StackNav />
    </Provider >

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
