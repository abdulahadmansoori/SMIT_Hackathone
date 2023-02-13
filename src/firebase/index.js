// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV6JQlMRZIwtlfQBJpquOWkyc7KKVA7Ho",
  authDomain: "react-projects-aeb83.firebaseapp.com",
  projectId: "react-projects-aeb83",
  storageBucket: "react-projects-aeb83.appspot.com",
  messagingSenderId: "665315475964",
  appId: "1:665315475964:web:d271323a979cc3be987279",
  measurementId: "G-XX44L4FX00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth};