import * as firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
     apiKey: "AIzaSyAU2lkCky6sWC0YTOcRSJSdl9OYjvZfGlw",
     authDomain: "storyhub-fcddd.firebaseapp.com",
     databaseURL: "https://storyhub-fcddd.firebaseio.com",
     projectId: "storyhub-fcddd",
     storageBucket: "storyhub-fcddd.appspot.com",
     messagingSenderId: "16310220857",
     appId: "1:16310220857:web:d2fd2df22a4209034075e8"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore();