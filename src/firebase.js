import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5Ha5jQVJwfViis5l0yuI-WH64zHir0AU",
    authDomain: "vibrant-website-93153.firebaseapp.com",
    projectId: "vibrant-website-93153",
    storageBucket: "vibrant-website-93153.appspot.com",
    messagingSenderId: "632184336513",
    appId: "1:632184336513:web:4dc106c31bff333db45d80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
