import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBpNiM8NfFv_7FiWysoIG28GIItObLdZDA",
    authDomain: "project-71-21e8a.firebaseapp.com",
    projectId: "project-71-21e8a",
    storageBucket: "project-71-21e8a.appspot.com",
    messagingSenderId: "215209964690",
    appId: "1:215209964690:web:a0218a0e7728aae483e24b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
