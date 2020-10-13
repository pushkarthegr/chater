name = localStorage.getItem("ChaterzName");
password = localStorage.getItem("ChaterzPassword");

function login1(){
    if(document.getElementById("name").value == name && document.getElementById("password").value == password){
        window.location = "room.html"
    }
    else{
        document.getElementById("alert").innerHTML = "You can try signing in again.Something went wrong";
    }
}
