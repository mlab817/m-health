import { boot } from 'quasar/wrappers'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const REACT_APP_FIREBASE_API_KEY="AIzaSyCQDrm9QA0koQnqE_mdb0kYzZRgG1o4HCE",
  REACT_APP_FIREBASE_AUTH_DOMAIN="my-application-bd25c.firebaseapp.com",
  REACT_APP_FIREBASE_PROJECT_ID="my-application-bd25c",
  REACT_APP_FIREBASE_STORAGE_BUCKET="my-application-bd25c.appspot.com",
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1098051849887,
  REACT_APP_FIREBASE_MESSAGING_APP_ID="1:1098051849887:web:ae2bb49ea400513f0f1caa"

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_MESSAGING_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
