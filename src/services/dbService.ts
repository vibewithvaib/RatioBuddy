import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  addDoc, 
  onSnapshot,
  getDocFromServer
} from 'firebase/firestore';
import { db, auth, isFirebaseEnabled } from '../firebase';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth?.currentUser?.uid,
      email: auth?.currentUser?.email,
      emailVerified: auth?.currentUser?.emailVerified,
      isAnonymous: auth?.currentUser?.isAnonymous,
      tenantId: auth?.currentUser?.tenantId,
      providerInfo: auth?.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function testConnection() {
  if (!isFirebaseEnabled || !db) return false;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    return true;
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. ");
    }
    return false;
  }
}

// User Profile & Mastery
export async function setupUser(user: any) {
  if (!isFirebaseEnabled || !db) {
    const localUser = sessionStorage.getItem(`ratiobuddy_user_${user.uid}`);
    if (!localUser) {
      const initialState = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        mastery: {},
        xp: 0,
        level: 0
      };
      sessionStorage.setItem(`ratiobuddy_user_${user.uid}`, JSON.stringify(initialState));
    } else {
      const data = JSON.parse(localUser);
      data.lastActive = new Date().toISOString();
      sessionStorage.setItem(`ratiobuddy_user_${user.uid}`, JSON.stringify(data));
    }
    return;
  }

  const userRef = doc(db, 'users', user.uid);
  try {
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      const initialState = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        mastery: {},
        xp: 0,
        level: 0
      };
      await setDoc(userRef, initialState);
    } else {
      await updateDoc(userRef, {
        lastActive: new Date().toISOString()
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
  }
}

export async function getUserState(uid: string) {
  if (!isFirebaseEnabled || !db) {
    const localUser = sessionStorage.getItem(`ratiobuddy_user_${uid}`);
    return localUser ? JSON.parse(localUser) : null;
  }

  const userRef = doc(db, 'users', uid);
  try {
    const userDoc = await getDoc(userRef);
    return userDoc.exists() ? userDoc.data() : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `users/${uid}`);
  }
}

export async function saveUserState(uid: string, state: any) {
  if (!isFirebaseEnabled || !db) {
    const localUser = sessionStorage.getItem(`ratiobuddy_user_${uid}`);
    if (localUser) {
      const data = JSON.parse(localUser);
      const updated = { ...data, ...state, lastActive: new Date().toISOString() };
      sessionStorage.setItem(`ratiobuddy_user_${uid}`, JSON.stringify(updated));
      // Trigger a storage event for local "onSnapshot" simulation
      window.dispatchEvent(new Event('storage'));
    }
    return;
  }

  const userRef = doc(db, 'users', uid);
  try {
    await updateDoc(userRef, {
      ...state,
      lastActive: new Date().toISOString()
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `users/${uid}`);
  }
}

export async function clearAllData() {
  sessionStorage.removeItem('ratiobuddy_reset_done_v2');
  sessionStorage.removeItem('ratiobuddy_reset_done_v1');
  
  if (!isFirebaseEnabled || !db || !auth) {
    const uid = 'mock-user';
    const localUser = sessionStorage.getItem(`ratiobuddy_user_${uid}`);
    if (localUser) {
      const data = JSON.parse(localUser);
      data.mastery = {};
      data.xp = 0;
      data.level = 0;
      data.lastActive = new Date().toISOString();
      sessionStorage.setItem(`ratiobuddy_user_${uid}`, JSON.stringify(data));
      window.dispatchEvent(new Event('storage'));
    }
    return;
  }

  if (auth.currentUser) {
    const userRef = doc(db, 'users', auth.currentUser.uid);
    try {
      const initialState = {
        mastery: {},
        xp: 0,
        level: 0,
        lastActive: new Date().toISOString()
      };
      await updateDoc(userRef, initialState);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${auth.currentUser.uid}`);
    }
  }
}

// Interaction Logs
export async function logInteraction(uid: string, interaction: any) {
  if (!isFirebaseEnabled || !db) {
    const logs = JSON.parse(sessionStorage.getItem('ratiobuddy_logs') || '[]');
    logs.push({ ...interaction, userId: uid, timestamp: new Date().toISOString() });
    sessionStorage.setItem('ratiobuddy_logs', JSON.stringify(logs.slice(-100))); // Keep last 100
    return;
  }

  try {
    await addDoc(collection(db, 'interactions'), {
      ...interaction,
      userId: uid,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, 'interactions');
  }
}

export function subscribeToUserState(uid: string, callback: (data: any) => void) {
  if (!isFirebaseEnabled || !db) {
    const handler = () => {
      const localUser = sessionStorage.getItem(`ratiobuddy_user_${uid}`);
      if (localUser) callback(JSON.parse(localUser));
    };
    window.addEventListener('storage', handler);
    // Initial call
    handler();
    return () => window.removeEventListener('storage', handler);
  }

  const userRef = doc(db, 'users', uid);
  return onSnapshot(userRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data());
    }
  }, (error) => {
    handleFirestoreError(error, OperationType.GET, `users/${uid}`);
  });
}
