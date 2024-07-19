/* Appear */

//Declaro variable para la clase "appear"
let appearElement = document.querySelectorAll('.appear')

//Evento de "escucha" a la ventana 
window.addEventListener('scroll', () =>{
    //se ejecuta para cada elemento con la clase appear
    appearElement.forEach( (appear) =>{
        //Si el elemento esta visible se resta 150 a la altura de la ventana
        if (appear.getBoundingClientRect().top < window.innerHeight - 150 ) {
            appear.style.opacity = '1'  //y aparece el elemento 
           //Si el elemento no esta visible se remueve el atributo style
        } else {
            appear.removeAttribute('style')
        }
    } )

})