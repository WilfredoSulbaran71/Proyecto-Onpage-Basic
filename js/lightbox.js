const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLigth = document.querySelectorAll('.agregar-imagen')
const contenedorLigth = document.querySelectorAll('.imagen-light')
console.log(imagenes);
console.log(imagenesLigth);
console.log(contenedorLigth);
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

const aparecerImagen = (imagen)=>{
    console.log(imagen)
    imagenesLigth.src = imagen;
    contenedorLigth.classList.toggle('show');
    //imagenesLigth.classList.toggle('showImage')
}