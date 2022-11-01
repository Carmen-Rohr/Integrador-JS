const formulario = document.getElementById("form-centrado");

function calcular() {           
    var form = document.getElementById("form-centrado");
    var cant = parseInt(document.getElementById("cantidad").value);   


    const nombreIngresado = document.getElementById('nombre');
    const apellidoIngresado = document.getElementById('apellido');
    const direcciónEmail = document.getElementById('correo');

    //validación del formulario

    //Validacion de nombre y apellido
    if ((nombre.value === "") && (apellido.value === "")) {
      alert("Para continuar deberá ingresar el nombre y apellido");
      nombre.focus();      
    } else {
        if (nombre.value === "") {
            alert("Para continuar, ingrese el nombre");
            nombre.focus();
        }  else 
        if (apellido.value === "") {
            alert("Para continuar, ingrese el apellido");
            apellido.focus();
        } else 
            //Valido el correo electronico
            emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            
            if ((correo.value==="") || (emailRegex.test(correo.value))) {
    
                //Validacion de cantidad 
                if (isNaN(cant)) {
                    alert('Para continuar, ingrese la cantidad');
                    cantidad.focus()
                }  else 
                    if (cant==0) {
                        alert('La cantidad ingresada debe ser mayor que 0. Ingresela nuevamente');
                        cantidad.focus()
                 } else {
                     //Calculo del total a pagar           
                    var idcategoria = document.getElementById("catSelect");
                    var categ = parseInt(idcategoria.options[idcategoria.selectedIndex].value);  
                    
                    var total=0;
                    if (isNaN(categ)) {
                        categ=0;
                    }
                    
                    switch(categ) {
                        case 0:
                            //sin descuento
                            total = cant * 200;            
                            break;
                        case 1:
                            //Estudiante 80% descuento
                            total= (cant * 200)-(cant*200*0.8);            
                            break;
                        case 2:
                            //Trainee 50% descuento
                            total= (cant * 200)-(cant*200*0.5);            
                            break;
                        case 3:
                            //Junior 15% descuento
                            total= (cant * 200)-(cant*200*0.15);            
                            break; 
                    }
                    
                    document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + total;      
                 }
            } else {
                alert("El correo ingresado no es valido, por favor ingreselo nuevamente");
                correo.focus();
            }     
        }    
}

//Limpia los campos del formulario
function limpiar(){
    formulario.reset();
    document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $";
}


//Agrega evento onclick al boton borrar
document.getElementById("btn-borrar").onclick = function(){ 
    limpiar(); 
}

//Agrega evento onclick al boton resumen
document.getElementById("btn-resumen").onclick = function(){ 
    calcular(); 
}

