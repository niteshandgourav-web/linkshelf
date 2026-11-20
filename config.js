// Firebase web config for cloud sync.
// Leave as null to keep links only in this browser (no sign-in).
// To enable sync across devices, replace null with the object Firebase gives you:
//
// export const FIREBASE_CONFIG = {
//   apiKey: "...",
//   authDomain: "your-project.firebaseapp.com",
//   projectId: "your-project",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "...",
//   appId: "..."
// };
//
// These values are not secret — your data is protected by the Firestore rules
// in firestore.rules (each signed-in user can only read and write their own links).

export const FIREBASE_CONFIG = null;
