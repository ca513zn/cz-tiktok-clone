import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsjbEaLhZAeDvZvA5rzVdygJM8yN7eBwQ",
  authDomain: "cz-tiktok-clone.firebaseapp.com",
  databaseURL: "https://cz-tiktok-clone.firebaseio.com",
  projectId: "cz-tiktok-clone",
  storageBucket: "cz-tiktok-clone.appspot.com",
  messagingSenderId: "866516570903",
  appId: "1:866516570903:web:8cd71ffdcaa9207bfddd52",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
