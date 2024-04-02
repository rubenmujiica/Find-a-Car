


function esNumerico(elem){
    let expresionNumerica = /^[0-9]+$/;
    if(elem.value.match(expresionNumerica)){
         return true;
    }else{
         Swal.fire({
               title: "¡Formulario incorrecto!",
               text: "Por favor, inserte solo números para seleccionar el número de plazas que desea.",
               icon: "error"
          });
         return false;
    }
}

/* Comprueba que el nombre solo tiene caracteres alfabeticos */
function solocaracteres(elem){
     let espacio = /^[a-zA-Z]+\s[a-zA-Z]+$/;
     if(elem.value.match(espacio)){
          return true;
     }else{
          Swal.fire({
               title: "¡Formulario incorrecto!",
               text: "Por favor, inserte su nombre, seguido de un espacio y su apellido.",
               icon: "error"
          });
          return false;
     }
}

/* Comprueba que el nombre solo tiene caracteres alfabeticos */
function solocaractereslugar(elem){
     let espacio = /^[a-zA-Z]+$/;
     if(elem.value.match(espacio)){
          return true;
     }else{
          
          Swal.fire({
               title: "¡Formulario incorrecto!",
               text: "Por favor, inserte solo caracteres alfabéticos para el lugar de recogida del vehículo.",
               icon: "error"
          });
          return false;
     }
}

function correoElectronico(elem){
     let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(elem.value.match(correo)){
          return true;
     }else{
          Swal.fire({
               title: "¡Formulario incorrecto!",
               text: "El correo electrónico no es válido.",
               icon: "error"
          });
          return false;
     }
}

function tipodeVehiculo(elem){
     let val = elem.value;
     if(val == -1){
          Swal.fire({
               title: "¡Formulario incorrecto!",
               text: "Por favor, elija un tipo de vehículo.",
               icon: "error"
          });
          return false;
     }
     else{
          return true;
     }

}

function comprobarNumPlazas(p, t){
     let val = t.value;
     
     if(val == 1 && p > 4 || val == 2 && p > 5 || val == 3 && p > 5 || val == 4 && p > 5 || val == 5 && p > 5 || val == 6 && p > 5 || val == 7 && p > 9){
          Swal.fire({
               title: "¡Formulario incorrecto!",
               text: "El número de plazas introducido supera el número de plazas del vehículo seleccionado.",
               icon: "error"
          });
          return false;
     }
     else{
          return true;
     }
     
}

function comprobarFecha(reco, actual, dev){
     if(reco < actual || dev < reco){
          Swal.fire({
               title: "¡Formulario incorrecto!",
               text: "La fecha seleccionada debe ser posterior a la actual y la fecha de devolución posterior a la de recogida.",
               icon: "error"
          });
          return false;
     }
     else{
          return true;
     }
}

/* Solo deja seleccionar un checkbox */
function limitarSeleccion(checkbox) {
     var checkboxes = document.getElementsByName('grupo');
     // Desactivar los otros checkboxes si este checkbox ha sido seleccionado
     if (checkbox.checked) {
       for (var i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i] !== checkbox) {
           checkboxes[i].checked = false;
         }
       }
     }
   }



document.addEventListener("DOMContentLoaded", function() {
     let formContacto = document.getElementById("form_contact");

     formContacto.addEventListener("submit", function(event) {
          /* Numero de plazas debe ser un valor numerico */
          let plaza = document.getElementById("plazas");
		let resplaza = esNumerico(plaza);
          /* El nombre debe tener solo caracteres */
          let nombre = document.getElementById("nombre");
          let Nombre = solocaracteres(nombre);
          /* El lugar debe tener solo caracteres */
          let lugar = document.getElementById("lugar");
          let Lugar = solocaractereslugar(lugar);
          /* El correo debe ser valido */
          let correoelec = document.getElementById('correo');
          let Correo = correoElectronico(correoelec);
          /* Debe seleccionar uno tipo de vehiculo */
          let tipo = document.getElementById('Tipo');
          let TipoVeh = tipodeVehiculo(tipo);

          /* La fecha debe ser posterior a la fecha actual y la fecha de devolucion posterior a la de devolucion */
          let input6 = document.getElementById('recogida');
          let input7 = document.getElementById('devolucion');
          let fechaRecogida = new Date(input6.value);
          let fechaDevolucion = new Date(input7.value);
          let fechaActual = new Date();
          let Fecha = comprobarFecha(fechaRecogida, fechaActual, fechaDevolucion);

          /* Comprobar que el numero de plazas esta en cnsonancia con el coche seleccionado */
          let numPlazasCoche = comprobarNumPlazas(plaza.value, tipo);

          /* Comprobar que hay seleccionado un checkbox */
          let checkboxes = document.getElementsByName('grupo');
          let seleccionado = false;
  
          
          for (let i = 0; i < checkboxes.length; i++) {
               if (checkboxes[i].checked) {
                    seleccionado = true;
               break;
               }
          }
  
          
          if (!seleccionado) {
               Swal.fire({
                    title: "¡Formulario incorrecto!",
                    text: "Debes seleccionar un intervalo de horas.",
                    icon: "error"
               });
          } 
     
          // Validar el input (puedes agregar tus propias reglas de validación)
          if (Lugar) {
               lugar.style.border = '3px solid green'; // Establecer borde verde
          } else {
               lugar.style.border = '3px solid red'; // Establecer borde rojo
          }  


          if (Nombre) {
               nombre.style.border = '3px solid green'; // Establecer borde verde
          } else {
               nombre.style.border = '3px solid red'; // Establecer borde rojo
          } 
          
          if (resplaza && numPlazasCoche) {
              plaza.style.border = '3px solid green'; // Establecer borde verde
          } else {
               plaza.style.border = '3px solid red'; // Establecer borde rojo
          }  

          if (TipoVeh && numPlazasCoche) {
               tipo.style.border = '3px solid green'; // Establecer borde verde
          } else {
               tipo.style.border = '3px solid red'; // Establecer borde rojo
          }  
          
          if (Fecha) {
               input6.style.border = '3px solid green'; // Establecer borde verde
               input7.style.border = '3px solid green'; // Establecer borde verde
          } else {
               input6.style.border = '3px solid red'; // Establecer borde rojo
               input7.style.border = '3px solid red'; // Establecer borde rojo
          }  

          if (Correo) {
               correoelec.style.border = '3px solid green'; // Establecer borde verde
          } else {
               correoelec.style.border = '3px solid red'; // Establecer borde rojo
          } 

          
          
          
          if (resplaza && Nombre && Lugar && TipoVeh && Fecha && Correo && numPlazasCoche && seleccionado) {
               event.preventDefault(); // Detener el envío del formulario
               Swal.fire({
                    title: "¡Formulario correcto!",
                    text: "Se han enviado los datos.",
                    icon: "success"
               });
               document.getElementById('form_contact').reset(); // Reiniciar el formulario
          }
		else{
			  event.preventDefault(); // Detener el envío del formulario
		  }
          
          

     });
});


   