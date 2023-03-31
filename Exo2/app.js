var login = document.getElementById('login');
var mdp = document.getElementById('mdp');
var message = document.getElementById("message");
var envoie = document.getElementById("envoie");

envoie.addEventListener('click', function(){
    if(login.value == 'web' && mdp.value == '1234'){
        message.innerHTML = "Login correct";
        message.style.color = "green";
    } else {
        document.getElementById("message").innerHTML = "Login incorrect";
        message.style.color = "red";     
    }
})
