// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdShSY0UmeX0IK5sJBBZKBFctfEvDGkH8",
  authDomain: "abdullah-portfolio-786.firebaseapp.com",
  projectId: "abdullah-portfolio-786",
  storageBucket: "abdullah-portfolio-786.appspot.com",
  messagingSenderId: "1069106740751",
  appId: "1:1069106740751:web:205e70ab78241761a7ad7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
