coad = false;
code = Math.floor(Math.random()*10000);
console.log(code);

function sign(){
    console.log(document.getElementById("email").value);
    if(coad == false){
        if(document.getElementById("name").value == ""){
            document.getElementById("alert").innerHTML = "Type the name";
        }else if(document.getElementById("password").value == ""){
            document.getElementById("alert").innerHTML = "Type the name";
        }else if(document.getElementById("password").value !== document.getElementById("Confo_password").value){
            document.getElementById("alert").innerHTML = "Passwords don't match";
        }else if(document.getElementById("email").value == ""){
            document.getElementById("alert").innerHTML = "bad email address";
        }else{
            coad = true;
            document.getElementById("codeDiv").style.display = "block";
            Email.send({
                SecureToken : "42969494-9bf8-4b44-aa55-4db9944c1620",
                To : document.getElementById("email").value,
                From : "noobe.bot2@gmail.com",
                Subject : "The Chaterz Code",
                Body : "The code is "+code
            }).then(
              message => alert("The code is sent.")
            );
        }
    }else{
        if(document.getElementById("name").value == ""){
            document.getElementById("alert").innerHTML = "Type the name";
        }else if(document.getElementById("password").value == ""){
            document.getElementById("alert").innerHTML = "Type the name";
        }else if(document.getElementById("password").value !== document.getElementById("Confo_password").value){
            document.getElementById("alert").innerHTML = "Passwords dont match";
        }else if(document.getElementById("email").value == ""){
            document.getElementById("alert").innerHTML = "Email address is must";
        }else if(document.getElementById("code").value == code){
            localStorage.setItem("ChaterzName",document.getElementById("name").value);
            localStorage.setItem("ChaterzPassword",document.getElementById("password").value);
            localStorage.setItem("ChaterzEmail",document.getElementById("email").value);
            window.location = "index.html";
        }else{
            
        }
    }
}
