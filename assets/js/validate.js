function vali(){
    var email=document.getElementById("email").value;
    console.log(email);
    var regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regEx.test(email)) { 
        alert("Invalid Email");
    }
}