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

/* Parallax */
