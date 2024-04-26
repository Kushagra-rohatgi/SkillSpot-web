
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR-mVT0kOoGFUXbrs7y_wPtfZ6699OwIo",
  authDomain: "kyttech-contacts.firebaseapp.com",
  projectId: "kyttech-contacts",
  storageBucket: "kyttech-contacts.appspot.com",
  messagingSenderId: "612852566144",
  appId: "1:612852566144:web:e86b396ccff9b1aae3be65",
  measurementId: "G-PQ2ES3YYBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);