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

  function addRoom()
{
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}