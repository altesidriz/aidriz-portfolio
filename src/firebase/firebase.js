import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "images-6e809.firebaseapp.com",
  projectId: "images-6e809",
  storageBucket: "images-6e809.appspot.com",
  messagingSenderId: "383355911884",
  appId: "1:383355911884:web:0449e55f0e25233f134c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, ref, getDownloadURL };