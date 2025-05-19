// // src/firebaseConfig.js

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// // Your Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyCuIyL0U0AKq1Cjpuh8L0ddrisZPczI-Nk",
//   authDomain: "agrorental-37467.firebaseapp.com",
//   projectId: "agrorental-37467",
//   storageBucket: "agrorental-37467.firebasestorage.app",
//   messagingSenderId: "523393640911",
//   appId: "1:523393640911:web:73b153790d0647057ccaba",
//   measurementId: "G-9K65BH1G38"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // ✅ Export auth instance
// export const auth = getAuth(app);


// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuIyL0U0AKq1Cjpuh8L0ddrisZPczI-Nk",
  authDomain: "agrorental-37467.firebaseapp.com",
  projectId: "agrorental-37467",
  storageBucket: "agrorental-37467.appspot.com",
  messagingSenderId: "523393640911",
  appId: "1:523393640911:web:73b153790d0647057ccaba",
  measurementId: "G-9K65BH1G38"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
