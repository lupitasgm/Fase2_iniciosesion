// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3yR0YZ44kgXIc_Q6aoaoVTrHZVhqUGAc",
  authDomain: "proyectodps-bcd3c.firebaseapp.com",
  projectId: "proyectodps-bcd3c",
  storageBucket: "proyectodps-bcd3c.appspot.com",
  messagingSenderId: "73397413440",
  appId: "1:73397413440:web:9c4417c5ef1c682de9a1a5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase