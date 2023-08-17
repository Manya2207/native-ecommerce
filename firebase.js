// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6LYeWGIGuGGSKagNc1KmlmX2HYNN0lZk",
  authDomain: "fir-auth-5057a.firebaseapp.com",
  projectId: "fir-auth-5057a",
  storageBucket: "fir-auth-5057a.appspot.com",
  messagingSenderId: "747331089919",
  appId: "1:747331089919:web:96433da80625b36c2a23ca"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export {auth}
