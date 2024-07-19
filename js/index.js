'use strict'

/* Función de acordeón */

let pestaña = document.querySelectorAll('.faq__titulo') /* Pestaña del acordeón */
let content = document.querySelectorAll('.faq__bloque') /* Bloque contenedor del acordeón */


pestaña.forEach((titulo, i) => { 
    // Elimina la clase 'active' de todos los bloques
    pestaña[i].addEventListener('click', () => { 

        content.forEach((contenido, i) => { 
            content[i].classList.remove('active'); 
        })

        // Añade la clase 'active' al bloque correspondiente al título clicado
        content[i].classList.add('active'); 
    })
})

/* Parallax */
