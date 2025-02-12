import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "gbc-react-native.firebaseapp.com",
  projectId: "gbc-react-native",
  storageBucket: "gbc-react-native.appspot.com",
  messagingSenderId: "1744968402",
  appId: "1:1744968402:web:feaeeb5431eeea87d32b0b",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const FirebaseAuth = getAuth(app)
