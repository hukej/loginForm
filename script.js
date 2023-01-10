function validate(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if ( login == "root" && password == "toor"){
        alert ("Login successfully");
        window.location = "correct.html";
        return false;
    }

    else if(login!="root" && password != "toor"){
        alert("Wrong login and password");
    }

    else if (login!="root"&&password == "toor"){
        alert("Wrong login");
    }

    else{
        alert("Wrong password");
    }
}