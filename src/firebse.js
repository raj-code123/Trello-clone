import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6e4RBHgT4a64t0G0mMp78u4c77jn3-rM",
    authDomain: "trello-clone-58871.firebaseapp.com",
    projectId: "trello-clone-58871",
    storageBucket: "trello-clone-58871.appspot.com",
    messagingSenderId: "471138329553",
    appId: "1:471138329553:web:973a8008ced4d776bf36f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, db, timestamp };