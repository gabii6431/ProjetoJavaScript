$("#btnLogin").on("click",function(){
    if(document.getElementById('usuario').value == "admin" && document.getElementById('senha').value == "admin")
    {
        window.location.href = "home.html";
    }
    else
    {
        document.getElementById('usuario').value = "";
        document.getElementById('senha').value = "";
        document.getElementById('div-Usuario').style.visibility = 'visible';
    }
});