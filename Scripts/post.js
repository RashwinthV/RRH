function post(){
    var name=document.getElementById("uname").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("number").value;
    var passw=document.getElementById("pass").value;

    localStorage.setItem("Name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("contact",phone);
    localStorage.setItem("password",passw);
    window.location.href="../HTML/verify.html"


}