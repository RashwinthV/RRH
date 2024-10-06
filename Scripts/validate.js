function val(){
    var name=document.getElementById("name").value;
    var pass=document.getElementById("Password").value;

    var na="rashwinth"
    var pa="123456"

    if(name==na&&pass==pa){
        window.location.href="../HTML/image.html"
    }
    else{
        alert("invalid username or password")
        window.location.href="../index.html"
    }
}