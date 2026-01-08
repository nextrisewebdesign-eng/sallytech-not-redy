
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * 🔓 HOW TO FIX PERMISSIONS ERROR:
 * 
 * 1. Go to Firebase Console -> Firestore Database -> Rules.
 * 2. Paste this exactly:
 * 
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     match /laptops/{laptopId} {
 *       allow read: if true;
 *       allow write: if request.auth != null;
 *     }
 *   }
 * }
 * 
 * 3. Click "Publish".
 */

const firebaseConfig = {
  apiKey: "AIzaSyBUPTYRA9UX4KG7Vj7C87IMVCKZTDb1OVk",
  authDomain: "sally-website-ready-to-go.firebaseapp.com",
  projectId: "sally-website-ready-to-go",
  storageBucket: "sally-website-ready-to-go.firebasestorage.app",
  messagingSenderId: "295201469200",
  appId: "1:295201469200:web:cfce0c4c014e57c92c6b95"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
