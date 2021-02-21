import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA_JXoY4TXzmpKHXrlCjDqdC8hRYGpwrF0",
    authDomain: "app-nysl-t4.firebaseapp.com",
    databaseURL: "https://app-nysl-t4-default-rtdb.firebaseio.com",
    projectId: "app-nysl-t4",
    storageBucket: "app-nysl-t4.appspot.com",
    messagingSenderId: "1012176606697",
    appId: "1:1012176606697:web:220cace5474fc022f26778"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  firebaseApp.firestore().settings({timestampsInSnapshots:true})

  export default firebaseApp.firestore()
  

