//<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
// Initialize Firebase

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCxoOkbYb4THdBdjBsbc2Q1MuF6ce00XOg",
    authDomain: "supplementmeadmin.firebaseapp.com",
    databaseURL: "https://supplementmeadmin.firebaseio.com",
    projectId: "supplementmeadmin",
    storageBucket: "supplementmeadmin.appspot.com",
    messagingSenderId: "570895877852"
};
firebase.initializeApp(config);

let fDataAdmin = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("logged in");
    } else {
        // No user is signed in.
        console.log("logged out");
    }
});

let quest = {
    "questions": []
}

function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        //firebase.auth().signInWithEmailAndPassword("dhopper2@sbcglobal.net", "MonkeyCDo").catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}

function getSupplementMeQuestions() {

}

function setSupplementMeQuestions() {
    
    fDataAdmin.ref().update(quest);

}