import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAHw5JU6RH6g8_-fIQBSeJ1n1nFTlmBgfk",
    authDomain: "cred-e307a.firebaseapp.com",
    projectId: "cred-e307a",
    storageBucket: "cred-e307a.appspot.com",
    messagingSenderId: "326029274448",
    appId: "1:326029274448:web:6e7072291043e4d3e49055",
    measurementId: "G-B19RKEZJKH"
};

export default firebase.initializeApp(firebaseConfig);
