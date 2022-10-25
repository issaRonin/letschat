// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDMyWPtw_xKm76oI-tO6B-EjUMeOFpVn7U",
    authDomain: "letschat-34606.firebaseapp.com",
    databaseURL: "https://letschat-34606-default-rtdb.firebaseio.com",
    projectId: "letschat-34606",
    storageBucket: "letschat-34606.appspot.com",
    messagingSenderId: "1074604320050",
    appId: "1:1074604320050:web:f7acb825bdc1250768632b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
 console.log("Room Name -" + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
 //End code
   });});}
getData();
  function addRoom()
{
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding room"
    });
}
function redirectToRoomName()
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logOut()
{
  localStorage.removeItem(user_name);
  localStorage.removeItem(room_name);
  window.location = "index.html";
}
