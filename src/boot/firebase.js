import { boot } from 'quasar/wrappers'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhvzrnVIVO7Cw76EnAuboMytMsmxxp8tc",
  authDomain: "m-health-v2.firebaseapp.com",
  projectId: "m-health-v2",
  storageBucket: "m-health-v2.appspot.com",
  messagingSenderId: "735249998972",
  appId: "1:735249998972:web:3aca95344aaf800f0195f9",
  measurementId: "G-D8ZHV2008E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
