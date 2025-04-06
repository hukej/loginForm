let login = document.querySelector("#login")
let password = document.querySelector("#password")

const validate = () => {

    if ( login.value == "root" && password.value == "toor"){
        alert ("Login successfully!!!\nSECRET DATA :O")
    }
    else{
        alert("Try again!")
    }
}

let btn = document.querySelector("#btn")
btn.addEventListener("click", validate)