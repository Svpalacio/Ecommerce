import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8P4k1VW4Yi2TctzXert4AkzQcjIaKpHw",
  authDomain: "ecommerce-sp-5a781.firebaseapp.com",
  projectId: "ecommerce-sp-5a781",
  storageBucket: "ecommerce-sp-5a781.firebasestorage.app",
  messagingSenderId: "907776796513",
  appId: "1:907776796513:web:6d50f6edc89b1eb9734720"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;

