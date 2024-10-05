function val(){
    var name=document.getElementById("name").value;
    var pass=document.getElementById("Password").value;

    var na=localStorage.getItem("Name");
    var pa=localStorage.getItem("password");

    if(name==na&&pass==pa){
        window.location.href="../HTML/image.html"
    }
    else{
        alert("invalid username or password")
        window.location.href="../index.html"
    }
}