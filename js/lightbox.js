const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburger1 = document.querySelector('.hamburguer');


imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    aparecerImagen(imagen.getAttribute('src'))
  })
});

// Función para cerrar la imagen
contenedorLight.addEventListener('click', (e) => {
  if(e.target !== imagenesLight){
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburger1.style.opacity = '1'
  }
})


// Función para mostrar la imagen agregando las clases  show y showImage
const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle('show')
  imagenesLight.classList.toggle('showImage')
  hamburger1.style.opacity = '0'
}