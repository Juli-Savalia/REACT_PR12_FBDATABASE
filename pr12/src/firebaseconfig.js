// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKv2h_QB5j3NpBRAxlb8EdQmjvWlZHQMg",
  authDomain: "fir-firestore-16db0.firebaseapp.com",
  projectId: "fir-firestore-16db0",
  storageBucket: "fir-firestore-16db0.appspot.com",
  messagingSenderId: "448943632503",
  appId: "1:448943632503:web:6300abc98f1a44026a1672",
  measurementId: "G-GRV2BK09ZC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);