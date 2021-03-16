import firebase from 'firebase';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDfbRKo6-WB6Oih8JVpbO-g0xn0k_iUcfw",
  authDomain: "burger-app-d29f0.firebaseapp.com",
  projectId: "burger-app-d29f0",
  storageBucket: "burger-app-d29f0.appspot.com",
  messagingSenderId: "570826552007",
  appId: "1:570826552007:web:76e4dc02070d5cbab3c4e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
