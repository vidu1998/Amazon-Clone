
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNtK-21QfmA27N0fCCfwW4HA0Hcc3aCwI",
    authDomain: "clone-8e2f1.firebaseapp.com",
    projectId: "clone-8e2f1",
    storageBucket: "clone-8e2f1.appspot.com",
    messagingSenderId: "561938695476",
    appId: "1:561938695476:web:e39cb43b4ebb61eff0d161"
  }; 

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export{db,auth}