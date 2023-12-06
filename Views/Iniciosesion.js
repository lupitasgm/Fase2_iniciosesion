import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';
import styles from '../Styles/styles';

import appFirebase from '../credenciales'
import {getFirestore} from 'firebase/firestore'
import { FirebaseError, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, initializeAuth } from 'firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes  } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';

const db = getFirestore(appFirebase)
const auth = getAuth(appFirebase);

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '73397413440-07j4vv3vs9q132mjm13ofsatavc3fc23.apps.googleusercontent.com',
    });
  }

  googleLogin = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const firebaseUserCredential = await auth().currentUser.linkWithCredential(googleCredential);
      return auth().signInWithCredential(googleCredential);
      this.props.navigation.navigate('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Inicio de sesión con Google cancelado');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('El inicio de sesión con Google está en progreso');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Los servicios de Google Play no están disponibles');
      } else {
        Alert.alert('Error al iniciar sesión con Google: ' + error.message);
        console.log(Error.toString());
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Foro 2</Text>
        <Text style={styles.text}>Inicio de sesión con Google y Firebase</Text>
        <GoogleSigninButton
          style={styles.GButton}
          onPress={() => this.googleLogin()} />

      </View>
    );
  }

}
export default LoginScreen;
