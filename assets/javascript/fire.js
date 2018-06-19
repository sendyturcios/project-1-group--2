//<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDYpKXPd-2TB3hbTCxs1o_3WFPWFV2pYMU",
    authDomain: "supplementme-207623.firebaseapp.com",
    databaseURL: "https://supplementme-207623.firebaseio.com",
    projectId: "supplementme-207623",
    storageBucket: "",
    messagingSenderId: "403853956534"
};
firebase.initializeApp(config);

let fdata = firebase.database().ref();

let questions = {
    "questions" : []
}