// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwTCem92IQhvQ0UYJl5KhMZRGC0XlR9cA",
  authDomain: "challenge-767d6.firebaseapp.com",
  projectId: "challenge-767d6",
  storageBucket: "challenge-767d6.appspot.com",
  messagingSenderId: "676576829106",
  appId: "1:676576829106:web:2f3c17fa5ddf770de9b3ab",
  measurementId: "G-HYMKVQDJQH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};
