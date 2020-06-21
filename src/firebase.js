import firebase from "firebase/app";
import "@firebase/auth";
import store from "./store";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
}
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

firebase.auth().onAuthStateChanged(user => {
  store.commit("updateUser", { user });
});