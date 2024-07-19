'use strict'

/* Función de acordeón */

let pestaña = document.querySelectorAll('.faq__titulo') /* Pestaña del acordeón */
let content = document.querySelectorAll('.faq__bloque') /* Bloque contenedor del acordeón */

// Recorrer todos las pestañas
pestaña.forEach((titulo, i) => { 
    // Asignando un click a cada pestaña
    pestaña[i].addEventListener('click', () => { 
        //Recorre todos los bloques
        content.forEach((contenido, i) => { 
            // QUita la clase active de los bloques
            content[i].classList.remove('active'); 
        })

        // Añade la clase 'active' al bloque correspondiente al título clicado
        content[i].classList.add('active'); 
    })
})

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
