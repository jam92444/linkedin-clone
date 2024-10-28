// Importing the required functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAj8ZFGQIOxYJ65fQWjMswHyeF76Xp_sw",
  authDomain: "linkedin-clone-5af34.firebaseapp.com",
  projectId: "linkedin-clone-5af34",
  storageBucket: "linkedin-clone-5af34.appspot.com",
  messagingSenderId: "523123601543",
  appId: "1:523123601543:web:0f60aa70ce916f60ea0822",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

// Exporting services
export { auth, storage, provider };
export default db;
