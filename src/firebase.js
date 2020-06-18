(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyC2Zea8l8qLEpAKTFCTfBJkRRkN7p95TmQ",
    authDomain: "listaiagc.firebaseapp.com",
    databaseURL: "https://listaiagc.firebaseio.com",
    projectId: "listaiagc",
    storageBucket: "listaiagc.appspot.com",
    messagingSenderId: "359053456623",
    appId: "1:359053456623:web:a657ebb3eaca17e229171a",
    measurementId: "G-1NRRC8H4CY",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.database();
})();
