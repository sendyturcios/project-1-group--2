//<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCxoOkbYb4THdBdjBsbc2Q1MuF6ce00XOg",
    authDomain: "supplementmeadmin.firebaseapp.com",
    databaseURL: "https://supplementmeadmin.firebaseio.com",
    projectId: "supplementmeadmin",
    storageBucket: "",
    messagingSenderId: "570895877852"
  };
  firebase.initializeApp(config);

  let fdataAdmin = firebase.database().ref();

let questions = {
    "questions" : []
}