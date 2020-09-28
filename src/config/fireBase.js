import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA2eKfSbYcw2WMJygv7cgz7Bgax5TSbTg4",
  authDomain: "breakingbad-b05ad.firebaseapp.com",
  databaseURL: "https://breakingbad-b05ad.firebaseio.com",
  projectId: "breakingbad-b05ad",
  storageBucket: "breakingbad-b05ad.appspot.com",
  messagingSenderId: "127380617634",
  appId: "1:127380617634:web:d2fa4d201031376b915afb",
  measurementId: "G-H6VMKDSRJD",
};

const fire = firebase.initializeApp(config);
export default fire;
