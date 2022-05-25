const menu = document.querySelector('.menu');
const menuv = document.querySelector('.menu-navegacion');
const ola = "Hola";
const scriptURL = 'https://script.google.com/macros/s/AKfycbwhg-IqAX_-0eeSbz8rhN94Nv0Mz-PvYg9JUu3aOvp7xOq7yOk5XeDd0LbMvzr1_U2i8w/exec';
const form = document.forms['submit-form'];
const form2 = document.forms['submit-form2'];
const form3 = document.forms['submit-form3'];
const form4 = document.forms['submit-form4'];
const form5 = document.forms['submit-formON'];
const form6 = document.forms['submit-formOFF'];

var cont = 5;
var on = 0;
var off = -1;

function clicker() {
    cont -= 1;
    document.getElementById("cont").innerHTML = cont;
    if (cont == 4){
        let aux = document.querySelector('#F1');
        aux.style.visibility = 'visible';
        let aux1 = document.querySelector('#F2');
        aux1.style.visibility = 'hidden';
    }else if (cont==3){
        let aux = document.querySelector('#F2');
        aux.style.visibility = 'visible';
        let aux2 = document.querySelector('#F3');
        aux2.style.visibility = 'hidden';
    }else if (cont==2){
        let aux = document.querySelector('#F3');
        aux.style.visibility = 'visible';
        let aux3 = document.querySelector('#F4');
        aux3.style.visibility = 'hidden';
    }else if (cont==1){
        let aux = document.querySelector('#F4');
        aux.style.visibility = 'visible';
    }
    
}

//console.log(menu)
//console.log(menuv)
form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log('pulpada');
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
form2.addEventListener('submit', e=>{
    e.preventDefault()
    console.log('paloma');
    fetch(scriptURL,{method: 'POST', body: new FormData(form2)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
form3.addEventListener('submit', e=>{
    e.preventDefault()
    console.log('pollo');
    fetch(scriptURL,{method: 'POST', body: new FormData(form3)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
form4.addEventListener('submit', e=>{
    e.preventDefault()
    console.log('pulpo');
    fetch(scriptURL,{method: 'POST', body: new FormData(form4)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

form5.addEventListener('submit', i=>{
    i.preventDefault()
    console.log('lulada');
    fetch(scriptURL,{method: 'POST', body: new FormData(form5)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
form6.addEventListener('submit', k=>{
    k.preventDefault()
    console.log('Chocolate');
    fetch(scriptURL,{method: 'POST', body: new FormData(form6)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

$(document).ready(function() {

    $('#submit-all').click(function(){

        $('.submit-button').trigger("click");

    });
});

menu.addEventListener('click',()=>{
    menuv.classList.toggle("spread")
})

window.addEventListener('click',e=>{
    if(menuv.classList.contains('spread') && e.target != menuv && e.target != menu    ){
            menuv.classList.toggle('spread')
    }
})


