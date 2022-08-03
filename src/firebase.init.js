// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAUMVcCeHe3nOmOx-WsvIKPNEBgUQITdk",
    authDomain: "gym-training-service.firebaseapp.com",
    projectId: "gym-training-service",
    storageBucket: "gym-training-service.appspot.com",
    messagingSenderId: "768667507455",
    appId: "1:768667507455:web:032c4457b336e26dca4aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;