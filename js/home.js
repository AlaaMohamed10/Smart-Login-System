var welcomeMassage = document.getElementById('welcomeMassage')


if(localStorage.getItem('userName')!=null){
    welcomeMassage.innerHTML=`Welcom ${localStorage.getItem('userName')}`
}