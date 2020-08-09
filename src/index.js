import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    // Your web app's Firebase configuration
  
    apiKey: "AIzaSyBYi3SV-pd0R5dP5TkV1Fpq6kMNq_AuxuM",
    authDomain: "evernote-clone-c40a0.firebaseapp.com",
    databaseURL: "https://evernote-clone-c40a0.firebaseio.com",
    projectId: "evernote-clone-c40a0",
    storageBucket: "evernote-clone-c40a0.appspot.com",
    messagingSenderId: "777794901902",
    appId: "1:777794901902:web:e50b9e97aa6b43c5e236df",
    measurementId: "G-7RSH0NSTNF"
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
