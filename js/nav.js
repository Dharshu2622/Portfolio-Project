
var navbar=document.getElementById("nav")
var times=true
function nav(){
    if(times==true){
    navbar.style.display="block"
    navbar.style.transition="0.5s"
    times=false
}
else{
    navbar.style.display="none"
    times=true
}
}