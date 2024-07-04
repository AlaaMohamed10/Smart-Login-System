var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var btnSighin = document.getElementById('btnSighin')
var alertMassege = document.getElementById('alertMassege')


var signinList = []

if (localStorage.getItem('users') != null) {
    signinList = JSON.parse(localStorage.getItem('users'))

}
function signin() {
    if(checkInput()==true){
        alert('All Inputs Requerd', 'bg-danger')
    }else{
        if (chickEmailPassword() == true) {
            window.location.href = 'home.html'
        } else {
            alert('Email Or Password Not Correct', 'bg-danger')
        }
    }
   
}
////////////////////////////////////////////

function chickEmailPassword() {
    for (var i = 0; i < signinList.length; i++) {
        if (signinList[i].email == signinEmail.value && signinList[i].passsword == signinPassword.value) {
            localStorage.setItem('userName',signinList[i].name)
            return true
        }
    }
}
/////////////////////////////////////////
function alert(text, color) {
    alertMassege.classList.remove('d-none')
    alertMassege.classList.add(color)
    alertMassege.innerHTML = text
}

function checkInput() {
    if (signinEmail.value == '' || signinPassword.value == '') {
        return true
    } else
        return false

}
btnSighin.addEventListener('click', signin)