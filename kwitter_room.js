const firebaseConfig = {
  apiKey: "AIzaSyC_IU4AvZd2sNsnmgaV1ujOcIZVuWZC6dM",
  authDomain: "kwitter-db-add40.firebaseapp.com",
  databaseURL: "https://kwitter-db-add40-default-rtdb.firebaseio.com",
  projectId: "kwitter-db-add40",
  storageBucket: "kwitter-db-add40.appspot.com",
  messagingSenderId: "589339952433",
  appId: "1:589339952433:web:66141cf5466b923e64dc10"
};

//// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionando nome da sala"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() 
{  
    firebase.database().ref("/").on('value', function(snapshot) 
    { 
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
        { 
            childKey  = childSnapshot.key;
            Room_names = childKey;
            //Comece a programar 
            console.log("Nome da sala: " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Programe até aqui
        });
    });
}

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
