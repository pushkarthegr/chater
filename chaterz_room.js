
var firebaseConfig = {
    apiKey: "AIzaSyByVshYif3-IBm1scaC8E6dbJvI2hAUMYU",
    authDomain: "chaterz-d1e56.firebaseapp.com",
    databaseURL: "https://chaterz-d1e56.firebaseio.com",
    projectId: "chaterz-d1e56",
    storageBucket: "chaterz-d1e56.appspot.com",
    messagingSenderId: "247244392130",
    appId: "1:247244392130:web:baf77356e3d5fe85f29d5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function start(){
    name = localStorage.getItem("ChaterzName");
    document.getElementById("welcome_person").innerHTML = 'Hi, '+name+"!";

    local2 = localStorage.getItem("chaterz_2")
    local1 = localStorage.getItem("chaterz_1");
    document.getElementById("history_list").innerHTML = "<div id="+local1+" onclick='moveToRoom(this.id)'>"+local1+"<br><hr></div>"+"<div id="+local2+" onclick='moveToRoom(this.id)'>"+local2+"<br><hr></div>";

    document.getElementById("setting_name").value = localStorage.getItem("ChaterzName");
    document.getElementById("setting_password").value = localStorage.getItem("ChaterzPassword");

    document.getElementById("color1").value = localStorage.getItem("color1");
    document.getElementById("color2").value = localStorage.getItem("color2");
    document.getElementById("color3").value = localStorage.getItem("color3");
    document.getElementById("textColor").value = localStorage.getItem("color4");

    color = localStorage.getItem("color2");
    console.log(color)
    if(color == null){
      document.body.style.backgroundColor = "#808080";
      document.getElementById("setButton").style.backgroundColor = "#808080";
      document.getElementById("logButton").style.backgroundColor = "#808080";

      document.getElementById("form-color").style.backgroundColor = "#000000";
      document.getElementById("main-div").style.backgroundColor = "#000000";
      document.getElementById("setButton").style.color = "#000000";
      document.getElementById("logButton").style.color = "#000000";

      document.getElementById("history_list").style.backgroundColor = "#363434";
      document.getElementById("room_list").style.backgroundColor = "#363434";

      document.body.style.color = "#FFFFFF";
      document.getElementById("history_list").style.color = "#FFFFFF";
      document.getElementById("room_list").style.color = "#FFFFFF";
    }
}
function logout(){
    window.location = "index.html";
    localStorage.removeItem("chaterz_room");
}
function random(){
  number = Math.floor(Math.random()*10000000000);//this will get a ten digit code <<

  document.getElementById("room_name").value = number;
}
  function roomIn(){
    room = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room).update({
        purpose : "adding room",
        people : 0
    });
    localStorage.setItem("chaterz_room",room_name);
    window.location = "chaterz_chat.html";// <<< this line will come afterwards.
    
    local2 = localStorage.setItem("chaterz_2",localStorage.getItem("chaterz_1"))
    local1 = localStorage.setItem("chaterz_1",room);
    document.getElementById("history_list").innerHTML = "<div id="+local1+" onclick='moveToRoom(this.id)'>"+local1+"<br><hr></div>"+"<div id="+local2+" onclick='moveToRoom(this.id)'>"+local2+"<br><hr></div>";
  }

  function getData(){
    firebase.database().ref("/").on('value',function(snapshot){
    document.getElementById("room_list").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='roomName' id="+Room_names+" onclick='moveToRoom(this.id)'>#"+Room_names+"<br><hr></div>";
    document.getElementById("room_list").innerHTML+= row;
    console.log( document.getElementById("room_list").innerHTML);
   });});}
getData();

   function moveToRoom(roomN){
     room = roomN;
     localStorage.setItem("chaterz_room",roomN);
      window.location = "chaterz_chat.html"; //<<< this line will come afterwards.
    
      local2 = localStorage.setItem("chaterz_2",localStorage.getItem("chaterz_1"))
      local1 = localStorage.setItem("chaterz_1",roomN);
      document.getElementById("history_list").innerHTML = "<div id="+local1+" onclick='moveToRoom(this.id)'>"+local1+"<br><hr></div>"+"<div id="+local2+" onclick='moveToRoom(this.id)'>"+local2+"<br><hr></div>"
   }

   function settings(){
      localStorage.setItem("color1", document.getElementById("color1").value);
      localStorage.setItem("color2", document.getElementById("color2").value);
      localStorage.setItem("color3", document.getElementById("color3").value);
      localStorage.setItem("textColor",document.getElementById("textColor").value);

     if(document.getElementById("setting_password").value == document.getElementById("setting_passwordConform").value){

      localStorage.setItem("ChaterzName",document.getElementById("setting_name").value);
      localStorage.setItem("ChaterzPassword",document.getElementById("setting_password").value);

      document.getElementById("setting_name").value = localStorage.getItem("ChaterzName");
      document.getElementById("setting_password").value = localStorage.getItem("ChaterzPassword");
      document.getElementById("setting_passwordConform").value = localStorage.getItem("ChaterzPassword");

      alert("Password and Username is changing.");
     }else{
      alert("something went wrong in values in password.");

     }
   }
   color1 = localStorage.getItem("color1");
   color2 = localStorage.getItem("color2");
   color3 = localStorage.getItem("color3");
   color4 = localStorage.getItem("textColor");

   document.body.style.backgroundColor = color1
   document.getElementById("setButton").style.backgroundColor = color1
   document.getElementById("logButton").style.backgroundColor = color1

   document.getElementById("form-color").style.backgroundColor = color2;
   document.getElementById("main-div").style.backgroundColor = color2;
   document.getElementById("setButton").style.color = color2;
   document.getElementById("logButton").style.color = color2;

   document.getElementById("history_list").style.backgroundColor = color3;
   document.getElementById("room_list").style.backgroundColor = color3;

   document.body.style.color = color4;
   document.getElementById("history_list").style.color = color4;
   document.getElementById("room_list").style.color = color4;
