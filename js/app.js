
import { validar } from "./validaciones.js";

import { mensajeEnviado } from "./mensaje-enviado.js";

/*captura todos los imputs y le agrega un
escuchador a cada uno, luego lo manda a calida*/

const inputs = document.querySelectorAll(".input-padron");

inputs.forEach( (input) => {
    input.addEventListener("blur",(evento)=> {
        validar(evento.target);
    });

});

/*Escucha el boton por si no hay ningun
campo llleno, imprime los errores*/
document.querySelector(".enviar").addEventListener("click", (event) =>{
    inputs.forEach( (input) => {
        validar(input);
        });
});

/*escucha el formulario. Si hace submit, hace un preventdefaul para que no refresque la pantalla. Valida las entradas e imprime mensaje de "enviado"*/

/*document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    fetch("https://formsubmit.co/alex.aguilar.sv@outlook.es", {method : "POST"}).then((respuesta) => {
        document.querySelector("form").reset();
        mensajeEnviado();
    }).catch((error) => alert(error));
    
});*/


/*escucha el formulario. Si hace submit, hace un preventdefaul para que no refresque la pantalla. Valida las entradas e imprime mensaje de "enviado"*/

/*document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    fetch("https://formsubmit.co/alex.aguilar.sv@outlook.es", {method : "POST",
    body: new FormData(event.target)
    }).then((respuesta) => {
        document.querySelector("form").reset();
        mensajeEnviado();
    }).catch((error) => alert(error));
    

});*/
