// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB62jyLF8iXRkhmggt-FQw7LmuEiJVJkrI",
  authDomain: "pawan-gupta-chatmates.firebaseapp.com",
  databaseURL: "http://pawan-gupta-chatmates.firebaseio.com",
  projectId: "pawan-gupta-chatmates",
  storageBucket: "pawan-gupta-chatmates.appspot.com",
  messagingSenderId: "675930200740",
  appId: "1:675930200740:web:31623008016ca2d6d9e431",
  measurementId: "G-1792WVBRSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, db, storage };









