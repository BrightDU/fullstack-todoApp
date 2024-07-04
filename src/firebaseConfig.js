import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCTYIDz6YPT0glrOtzIncw481_hTk3fE5Q",
  authDomain: "fullstack-todoapp-b1dab.firebaseapp.com",
  projectId: "fullstack-todoapp-b1dab",
  storageBucket: "fullstack-todoapp-b1dab.appspot.com",
  messagingSenderId: "1043013957609",
  appId: "1:1043013957609:web:9c9fd489fc0f4fe9f57d78",
  measurementId: "G-K7MWBED906"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };