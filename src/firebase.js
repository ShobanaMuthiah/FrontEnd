// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bloghut-90c7c.firebaseapp.com",
  projectId: "bloghut-90c7c",
  storageBucket: "bloghut-90c7c.appspot.com",
  messagingSenderId: "844149857755",
  appId: "1:844149857755:web:0e8b5fbdcaabd62521dbfe"
};


export const app = initializeApp(firebaseConfig);