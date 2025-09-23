import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "ai-ecommerce-6cc76.firebaseapp.com",
  projectId: "ai-ecommerce-6cc76",
  storageBucket: "ai-ecommerce-6cc76.firebasestorage.app",
  messagingSenderId: "78089247912",
  appId: "1:78089247912:web:da8dc5276d988b9b77b69d"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

