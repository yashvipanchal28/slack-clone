// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt7MlM7wvsDyxSFsQOLUNJaXZyGLyeY6I",
  authDomain: "slack-clone-dec93.firebaseapp.com",
  projectId: "slack-clone-dec93",
  storageBucket: "slack-clone-dec93.appspot.com",
  messagingSenderId: "657849908279",
  appId: "1:657849908279:web:fd64c5296e9bc99f01d3b2",
  measurementId: "G-S6S3C3GR44"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  //const provider = new firebase.auth.GoogleAuthProvide();

  export {auth, provider};
  export default db;