import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from '../Styles/styles';

class Home extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      Email: null,
      Password: null,
      Phone: null,
      uri: null,
    };
  }

  render ( ) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ha iniciado sesión</Text>
      </View>
    );
  };
}

export default Home;