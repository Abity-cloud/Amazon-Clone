// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyALnRWUwd_ym-_bqefS74kJg0fd5bwjNdY",
    authDomain: "feb20-5107b.firebaseapp.com",
    projectId: "feb20-5107b",
    storageBucket: "feb20-5107b.appspot.com",
    messagingSenderId: "654791913733",
    appId: "1:654791913733:web:30bcfcd2b9e293e8ad476c",
    measurementId: "G-PZW6W07SJK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
