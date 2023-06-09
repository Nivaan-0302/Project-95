var firebaseConfig = {
    apiKey: "AIzaSyDTiiV_lWv3EcUTuLmvt_Atjz1M1NkIfn0",
    authDomain: "project-c94-a42e3.firebaseapp.com",
    databaseURL: "https://project-c94-a42e3-default-rtdb.firebaseio.com",
    projectId: "project-c94-a42e3",
    storageBucket: "project-c94-a42e3.appspot.com",
    messagingSenderId: "397168280704",
    appId: "1:397168280704:web:08a846c2d091cf33945265",
    measurementId: "G-LE26S13NNY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   
  function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

