import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 
AIzaSyBMQH3QZ-OFDouHinQYfvcr7U5bwW6tsoY,
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "YOUR_APP_ID"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)




















<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBMQH3QZ-OFDouHinQYfvcr7U5bwW6tsoY",
    authDomain: "add-app-918dd.firebaseapp.com",
    projectId: "add-app-918dd",
    storageBucket: "add-app-918dd.firebasestorage.app",
    messagingSenderId: "836119169709",
    appId: "1:836119169709:web:aa0a1d3c38cd1ca9195424",
    measurementId: "G-6GP6T2DG61"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
