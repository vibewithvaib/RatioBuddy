import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Check if config is valid (not placeholders)
const isFirebaseConfigValid = 
  firebaseConfig.projectId && 
  !firebaseConfig.projectId.includes('remixed-project-id') &&
  firebaseConfig.apiKey &&
  !firebaseConfig.apiKey.includes('remixed-api-key');

let app;
if (isFirebaseConfigValid) {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
}

export const auth = isFirebaseConfigValid ? getAuth(app) : null;
export const db = isFirebaseConfigValid ? getFirestore(app, firebaseConfig.firestoreDatabaseId) : null;
export const googleProvider = new GoogleAuthProvider();

export const isFirebaseEnabled = isFirebaseConfigValid;

export const signIn = async () => {
  if (!isFirebaseEnabled || !auth) {
    console.warn('Firebase is not enabled. Mocking sign in.');
    return { user: { uid: 'mock-user', email: 'mock@example.com', displayName: 'Guest User' } };
  }
  return signInWithPopup(auth, googleProvider);
};

export const logOut = async () => {
  if (!isFirebaseEnabled || !auth) return;
  return signOut(auth);
};
