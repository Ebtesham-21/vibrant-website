import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB6b6T4I7XaQJYkNhNDnXQ8JQBtc9QYfbE",
    authDomain: "vibrant-newsletter.firebaseapp.com",
    projectId: "vibrant-newsletter",
    storageBucket: "vibrant-newsletter.appspot.com",
    messagingSenderId: "276893297585",
    appId: "1:276893297585:web:aea617aba78aab69eb2b90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
