import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyAWwiDXSKzI4KsLSJeQyNzI8x12dlZk3ec",
  authDomain: "clothio-aada9.firebaseapp.com",
  databaseURL: "https://clothio-aada9.firebaseio.com",
  projectId: "clothio-aada9",
  storageBucket: "",
  messagingSenderId: "863204590604",
  appId: "1:863204590604:web:f3dc004c200a6a45"
};

firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
