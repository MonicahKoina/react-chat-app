import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvpfo2kUoQou5wcxTQZQXxJtp0IiduAvA",
    authDomain: "qonvoo-8ca15.firebaseapp.com",
    projectId: "qonvoo-8ca15",
    storageBucket: "qonvoo-8ca15.appspot.com",
    messagingSenderId: "544073045947",
    appId: "1:544073045947:web:c44be025e15b6add26169e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

export default app;
