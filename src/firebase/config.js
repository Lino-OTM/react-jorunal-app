// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = getEnvironments();

// Your web app's Firebase configuration

// Dev/Prod
// const firebaseConfig = {
// apiKey: "AIzaSyB34TYCG1o4CrqmovIQgYTKeJXj5crexmY",
// authDomain: "react-curso-ab1b8.firebaseapp.com",
// projectId: "react-curso-ab1b8",
// storageBucket: "react-curso-ab1b8.appspot.com",
// messagingSenderId: "720720222874",
// appId: "1:720720222874:web:3690845c751691c1f3dd23",
// };

// Testing
// const firebaseConfig = {
// apiKey: "AIzaSyBJ82zZqfS06npbkfJv8bQIsxx5jGlnLs0",
// authDomain: "react-testing-89efd.firebaseapp.com",
// projectId: "react-testing-89efd",
// storageBucket: "react-testing-89efd.appspot.com",
// messagingSenderId: "292082595550",
// appId: "1:292082595550:web:3aba5e2f731a9cb4a7744f",
// measurementId: "G-WHMW7H072M"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
