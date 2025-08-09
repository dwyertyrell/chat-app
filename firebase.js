import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAH2zD62rjsghuJ2vnOF4nzooUl-osS5sg",
    authDomain: "chat-app-a12bb.firebaseapp.com",
    projectId: "chat-app-a12bb",
    storageBucket: "chat-app-a12bb.firebasestorage.app",
    messagingSenderId: "789584008757",
    appId: "1:789584008757:web:fe3e7818039fbecf87837c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Auth
  const auth = getAuth(app);
  
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app)

  export {db, auth, storage};