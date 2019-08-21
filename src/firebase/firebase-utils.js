import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyCpEbHfMfMScL4d8icagCWIn_IijGSY3ok",
  authDomain: "quickstart-1549200994486.firebaseapp.com",
  databaseURL: "https://quickstart-1549200994486.firebaseio.com",
  projectId: "quickstart-1549200994486",
  storageBucket: "",
  messagingSenderId: "796832409487",
  appId: "1:796832409487:web:b5958184e6115dbc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
