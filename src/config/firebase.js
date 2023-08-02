// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
// import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD21XOctL3YOe0qhUMzpQCkAZOzemekk3Q",
  authDomain: "tour-travel-e017d.firebaseapp.com",
  projectId: "tour-travel-e017d",
  storageBucket: "tour-travel-e017d.appspot.com",
  messagingSenderId: "725765248791",
  appId: "1:725765248791:web:b2bc9e164b38c9bc2c0952"
};

// Initialize Firebase
export const app=initializeApp(firebaseConfig);

export const db = getFirestore();

