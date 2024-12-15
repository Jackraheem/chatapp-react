// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBBrmSyX7mG-PBWHYYqxoIjcIIjUKMd14A",
  authDomain: "chat-8a4f4.firebaseapp.com",
  projectId: "chat-8a4f4",
  storageBucket: "chat-8a4f4.appspot.com",
  messagingSenderId: "716431915335",
  appId: "1:716431915335:web:868cd1a41a01cbfada7462"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const storage = getStorage();
 export const db = getFirestore()