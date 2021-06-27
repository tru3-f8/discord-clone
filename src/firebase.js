import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXZGOjSm4q6YVNNpuL8t0UUjEhx33QcQE",
    authDomain: "discord-clone-d2061.firebaseapp.com",
    projectId: "discord-clone-d2061",
    storageBucket: "discord-clone-d2061.appspot.com",
    messagingSenderId: "997228515148",
    appId: "1:997228515148:web:47a26b8691c590f59e09e9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvided();

  export { auth, provider };
  export default db;