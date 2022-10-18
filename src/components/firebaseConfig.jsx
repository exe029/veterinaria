// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCm9Q_VnO8wfDEU5nWBVS-x9sXXf4lTY7k",
authDomain: "coderhouse-ecommerce-vete.firebaseapp.com",
projectId: "coderhouse-ecommerce-vete",
storageBucket: "coderhouse-ecommerce-vete.appspot.com",
messagingSenderId: "230005284402",
appId: "1:230005284402:web:d0f9b96558245d8ca7262b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);