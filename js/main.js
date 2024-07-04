var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var btnSighUp = document.getElementById('btnSighUp')
var alertMassege = document.getElementById('alertMassege')


var dataList = []
if (localStorage.getItem('users') != null) {
    dataList = JSON.parse(localStorage.getItem('users'))
}

function signUp() {

    var data = {
        name: signupName.value,
        email: signupEmail.value,
        passsword: signupPassword.value,
    }
    if (checkInput() == true) {
        alert('All Inputs Requerd', 'bg-danger')
    } else {
        if (checkEmailExist() == true) {
            alert('Email Already Exist', 'bg-warning')
        } else {
            dataList.push(data)
            console.log(dataList);
            localStorage.setItem('users', JSON.stringify(dataList))
            alert('success', 'bg-info')
            clear()
        }

    }


}

function alert(text, color) {
    alertMassege.classList.remove('d-none')
    alertMassege.classList.add(color)
    alertMassege.innerHTML = text
}



function clear() {
    signupName.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
}

function checkInput() {
    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value == '') {
        return true
    } else
        return false

}

function checkEmailExist() {
    for (var i = 0; i < dataList.length; i++) {
        if (dataList[i].email == signupEmail.value) 
            return true
        }
    
}

btnSighUp.addEventListener('click',signUp)

