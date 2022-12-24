import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYi_q0Ws01INLTAHLVBR-1IwOuZN69P8k",
  authDomain: "hackathon-2022-edd8b.firebaseapp.com",
  databaseURL: "https://hackathon-2022-edd8b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hackathon-2022-edd8b",
  storageBucket: "hackathon-2022-edd8b.appspot.com",
  messagingSenderId: "346258028438",
  appId: "1:346258028438:web:b5ecba203117eb70260fb7",
  measurementId: "G-Y67GKV9DGZ"

};

firebase.initializeApp(firebaseConfig);
export default firebase;