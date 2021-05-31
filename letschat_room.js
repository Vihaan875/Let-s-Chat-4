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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
 });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("welcome_name").innerHTML = "Welcome "+user_name+"!";

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room name",room_name);
  window.location="letschat_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="letschat_page.html";
}