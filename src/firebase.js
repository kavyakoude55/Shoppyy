
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALW0b2BlR5WhENlgiJdw8OA5k7XT8k1Ak",
  authDomain: "shoppyy-b5306.firebaseapp.com",
  projectId: "shoppyy-b5306",
  storageBucket: "shoppyy-b5306.firebasestorage.app",
  messagingSenderId: "1087633046888",
  appId: "1:1087633046888:web:f01c189498dd2a0311aadd",
  measurementId: "G-C1L5TQFMJZ",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
