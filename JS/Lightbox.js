const imagenes = document.querySelectorAll('.IMG-Galeria')
const imagenesl = document.querySelector('.agregar-img')
const contenedorl = document.querySelector('.imagen-light')
const menu1 = document.querySelector('.menu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        showImg(imagen.getAttribute('src'))
        
    })
})

contenedorl.addEventListener('click', (e)=>{
    if(e.target !== imagenesl){
        contenedorl.classList.toggle('show')
        imagenesl.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
})

const showImg = (imagen)=>{
    imagenesl.src = imagen;
    contenedorl.classList.toggle('show')
    imagenesl.classList.toggle('showImage')
    menu1.style.opacity = '0'
}

