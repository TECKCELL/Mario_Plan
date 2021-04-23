 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 
 // Your web app's Firebase configuration
 var config= {
    apiKey: "AIzaSyC2W0V2y1f07w5iTnFeejnBEQFv6YFEi0U",
    authDomain: "marioplan-fe7df.firebaseapp.com",
    projectId: "marioplan-fe7df",
    storageBucket: "marioplan-fe7df.appspot.com",
    messagingSenderId: "22424682461",
    appId: "1:22424682461:web:435b9b033a6860a3950034"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapShots:true})

  export default firebase;