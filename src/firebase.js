
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQ_UNDRAqVYayROalTlP5zTKukMw6IysU",
    authDomain: "clone-5ec40.firebaseapp.com",
    projectId: "clone-5ec40",
    storageBucket: "clone-5ec40.appspot.com",
    messagingSenderId: "430719982250",
    appId: "1:430719982250:web:21f7b86a4c4efc45fcced3",
    measurementId: "G-35C3TVFF6S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};