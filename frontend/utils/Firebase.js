import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart.firebaseapp.com",
  projectId: "loginonecart",
  storageBucket: "loginonecart.firebasestorage.app",
  messagingSenderId: "242165258894",
  appId: "1:242165258894:web:0155a2ced93e20073247df"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

