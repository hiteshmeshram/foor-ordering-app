// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCicEO5BeFhxQXugC7unoV32Vlaz2tndVQ",
  authDomain: "food-app-c2176.firebaseapp.com",
  projectId: "food-app-c2176",
  storageBucket: "food-app-c2176.appspot.com",
  messagingSenderId: "57661986433",
  appId: "1:57661986433:web:dc1ddb262be7fd7313df80",
  measurementId: "G-RZGENKNSQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);