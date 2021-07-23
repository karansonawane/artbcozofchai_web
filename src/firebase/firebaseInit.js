import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBN1nqpvWQtcvk_OjvF5CYEMsP2t-L6_cE",
  authDomain: "artbcozofchai.firebaseapp.com",
  projectId: "artbcozofchai",
  storageBucket: "artbcozofchai.appspot.com",
  messagingSenderId: "1023093622656",
  appId: "1:1023093622656:web:367abb42105c0d4357e365"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
