import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN6IZOBk-4VwaNg-tllE2OgQeWCKzWQqc",
  authDomain: "love-lines-1b9e3.firebaseapp.com",
  databaseURL: "https://love-lines-1b9e3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "love-lines-1b9e3",
  storageBucket: "love-lines-1b9e3.appspot.com",
  messagingSenderId: "434656858604",
  appId: "1:434656858604:web:50e0f9520e76c065b7f0c9"
};
const app = initializeApp(firebaseConfig);

//export const db = getFirestore(app);
//const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();