// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgDJPcpSDRZFfaSPDtCvFj5wPp0B5vv-I",
  authDomain: "client-deposits-system.firebaseapp.com",
  projectId: "client-deposits-system",
  storageBucket: "client-deposits-system.appspot.com",
  messagingSenderId: "707567133467",
  appId: "1:707567133467:web:e5a0229982a018a78229be",
  measurementId: "G-PT01SQ3T5S"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();
