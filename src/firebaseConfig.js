import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAPFXyn1E9PZIDm8XJXNG4HnA8-bJaBI4",
  authDomain: "react-exam-ba1a9.firebaseapp.com",
  projectId: "react-exam-ba1a9",
  storageBucket: "react-exam-ba1a9.firebasestorage.app",
  messagingSenderId: "746115971183",
  appId: "1:746115971183:web:8a52b53482217dde3bb59a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);