import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import AppStack from './Navigation/stack';

export default function App() {
  return (
    <AppStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});