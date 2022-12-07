// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SZlgz-wp7n3nDyssvhSeMXO9JDTOpQY",
  authDomain: "social-media-app-e8fc1.firebaseapp.com",
  projectId: "social-media-app-e8fc1",
  storageBucket: "social-media-app-e8fc1.appspot.com",
  messagingSenderId: "38400378020",
  appId: "1:38400378020:web:dda4b7d22247a2fd8e9231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Returns the Auth instance associated with the provided @firebase/app#FirebaseApp. If no instance exists, initializes an Auth instance with platform-specific default dependencies.
export const auth = getAuth(app)

//Provider for generating an an OAuthCredential for ProviderId.GOOGLE.
export const provider = new GoogleAuthProvider();

//Returns the existing default Firestore instance that is associated with the default @firebase/app#FirebaseApp
export const db = getFirestore(app)
