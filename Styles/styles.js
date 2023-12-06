import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: {
      height: '30%',
      width: '100%',
    },
    logor: {
      height: '50%',
      width: '50%',
      justifyContent: 'center',
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      minWidth: '60%',
      padding: 30,
    },
    containerimgr: {
      flex: 1,
      backgroundColor: 'white',
      minWidth: '60%',
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      marginBottom: 20,
      color: '#015657',
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      color: '#015657',
    },
    text2: {
      fontSize: 16,
      color: '#015657',
      textAlign: 'center',
    },
    textlink: {
      fontSize: 16,
      color: '#89C400',
      textAlign:'center',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#D1C6C6',
      backgroundColor:'#D1C6C6',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
    loginButton: {
      backgroundColor: '#89C400', 
      padding: 12, 
      width: '100%',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    GButton: {
      padding: 12, 
      width: '100%',
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 10,
      TextColor: '#705C5C',
    },
    menuButton: {
      backgroundColor: '#DDE5F1',
      padding: 18,
      width: '90%',
      textAlign: 'center',
      margin: 12,
      alignItems: 'center',
    },
    backButton: {
      backgroundColor: '#015657', 
      padding: 12, 
      width: '100%',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 5,
    },
    buttonText: {
      color: 'white', 
      fontSize: 14, 
      fontFamily: 'Arial',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default styles;