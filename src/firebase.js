// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgKKgbL4Al9N9Tac-KXfw0pFdMltsQJdI",
  authDomain: "elite-trainer-exchange.firebaseapp.com",
  projectId: "elite-trainer-exchange",
  storageBucket: "elite-trainer-exchange.firebasestorage.app",
  messagingSenderId: "983146446201",
  appId: "1:983146446201:web:b6687d20a2a34817c7c3a8",
  measurementId: "G-WPSM5N882H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { app, analytics, db, storage, auth };
