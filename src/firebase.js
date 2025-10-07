import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export async function ensureAnonAuth() {
  if (auth.currentUser) return auth.currentUser.uid
  await signInAnonymously(auth)
  return await new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) { resolve(u.uid); unsub() }
    })
  })
}

export async function saveSelfAssessment(uid, payload) {
  // Kolekcijų struktūra: users/{uid}/assessments/self
  const ref = doc(db, 'users', uid, 'assessments', 'self')
  await setDoc(ref, { ...payload, ts: serverTimestamp() }, { merge: true })
}
