import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDW-MdbAXho2jSD9UC9eFxQ6XM4k3EByBM",
  authDomain: "netflix-9cf7c.firebaseapp.com",
  databaseURL: "https://netflix-9cf7c.firebaseio.com",
  projectId: "netflix-9cf7c",
  storageBucket: "netflix-9cf7c.appspot.com",
  messagingSenderId: "1084901430497",
  appId: "1:1084901430497:web:1894bd73a4200bfa8e53a0",
  measurementId: "G-SRZVH8WMDG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };