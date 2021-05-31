//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCe_PAAmf7Ke0NvTXyc8yUlVVefCtDjIVY",
    authDomain: "kwitter-project-1-7778e.firebaseapp.com",
    databaseURL: "https://kwitter-project-1-7778e-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1-7778e ",
    storageBucket: "kwitter-project-1-7778e.appspot.com",
    messagingSenderId: "614333216893",
    appId: "1:614333216893:web:fa3c58941efbca72b71914",
    measurementId: "G-5ZLEGVQLRN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  
}