// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHRi8ySihUAj9N6RUQ9LjrSdOcywVIx_Y",
  authDomain: "mern-book-store-192e1.firebaseapp.com",
  projectId: "mern-book-store-192e1",
  storageBucket: "mern-book-store-192e1.appspot.com",
  messagingSenderId: "978491969425",
  appId: "1:978491969425:web:e0640094a67c5eaae41430",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
