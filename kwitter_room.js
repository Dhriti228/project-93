
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD-E1rT_YObDez-RPkDtRX6_uRUF5NC5v0",
      authDomain: "kwitter-30b4e.firebaseapp.com",
      databaseURL: "https://kwitter-30b4e-default-rtdb.firebaseio.com",
      projectId: "kwitter-30b4e",
      storageBucket: "kwitter-30b4e.appspot.com",
      messagingSenderId: "576571486530",
      appId: "1:576571486530:web:0b706d466c1e629f2218db"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
