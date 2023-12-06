// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCAaD6N_2p0xRBRpyQ00t2JJrIAN8DdBW0",

  authDomain: "chat-app-50d7c.firebaseapp.com",

  projectId: "chat-app-50d7c",

  storageBucket: "chat-app-50d7c.appspot.com",

  messagingSenderId: "753577104330",

  appId: "1:753577104330:web:d79cc840d0cbb47e6c3533",

  measurementId: "G-XY5FXHSCYM"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app) ;

//export {auth };