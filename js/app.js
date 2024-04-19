
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
