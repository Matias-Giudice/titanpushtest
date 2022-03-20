/*
    La función 'validarFechaNacimiento()', obtiene la fecha actual y pide la fecha de nacimiento a la persona, luego calcula la edad de la 
    persona y valida que la fecha de nacimiento ingresada no tenga algún error, si lo tiene lo muestra por consola, si esta todo bien retorna
    la edad.
*/
function validarFechaNacimiento() {
    let fecha = new Date();
    let anioActual = fecha.getFullYear();
    let diaActual = fecha.getDate();
    let mesActual = fecha.getMonth() + 1; 

    let anioNacimiento = prompt('¿Cuál es tu año de nacimiento?');
    let mesNacimiento = prompt('¿Cuál es tu mes de nacimiento?');
    let diaNacimiento = prompt('¿Cuál es tu dia de nacimiento?');

    let edad = anioActual - anioNacimiento;

    if (anioNacimiento < 1) {
        console.log("Error al ingresar el año.");        
    } else {
        if (mesNacimiento < 1 || mesNacimiento > 12) {
            console.log("Error al ingresar el mes.");  
        } else {
            if (mesNacimiento == 1 || mesNacimiento == 3 || mesNacimiento == 5 || mesNacimiento == 7 || 
                mesNacimiento == 8 || mesNacimiento == 10 || mesNacimiento == 12) {
                diasMes = 31;
            } else {
                if (mesNacimiento == 2) {
                    if (anioNacimiento % 4 == 0 && anioNacimiento % 100 != 0 || anioNacimiento % 400 == 0) {
                        console.log("Naciste en año bisiesto.");
                        diasMes = 29;
                    } else {
                        console.log("Naciste en año no bisiesto.");
                        diasMes = 28;
                    }
                } else {
                    diasMes = 30;
                }
            }
            if (diaNacimiento < diasMes) {
                if (mesActual < mesNacimiento) {
                    edad = edad - 1;
                }else if (mesActual === mesNacimiento){
                    if (diaActual < diaNacimiento) {
                        edad = edad - 1;
                    }
                }
                return edad;
            } else {
                console.log("Error al ingresar el día.");
            }            
        }
    }    
}
/*
    La función 'puedeJubilarse()', recibe el valor que retorna la función 'validarFechaNacimiento()' y lo guarda en edad, luego pide el género, 
    años de aporte jubilatorios a la persona. Verifica el género ingresado no tenga algún error, si lo tiene lo muestra por consola, si esta todo
    bien sigue con la operación, luego lo mismo con años de aporte jubilatorios, si se cumplen ambas partes pasa a la última fase, en la cual,
    verifica que la edad y los años de aporte jubilatorios sean los requeridos para poder jubilarse, si lo cumple retorna true, sino lo cumple
    retorna false.
*/
function puedeJubilarse() {
    let edad = validarFechaNacimiento(); 
    let genero = prompt('¿Cuál es tu género? [Masculino o Femenino]');
    let aniosAporteJubilatorios = prompt('¿Cuántos años de aporte jubilatorios tiene?');
    if (genero == "Masculino" || genero == "masculino") {
        if (aniosAporteJubilatorios < 30) {
            console.log("Error al ingresar el aporte o no cumple con los años de aporte jubilatorios requeridos.");  
        } else {
            if (edad >= 65 && aniosAporteJubilatorios >= 30) { 
                return true;
            } else { 
                return false;
            }
        }        
    } else if (genero == "Femenino" || genero == "femenino") { 
        if (aniosAporteJubilatorios < 30) {
            console.log("Error al ingresar el aporte o no cumple con los años de aporte jubilatorios requeridos.");   
        } else {
            if (edad >= 60 && aniosAporteJubilatorios >= 30) { 
                return true;
            } else { 
                return false;
            }
        }
        
    } else {
        console.log("Error al ingresar el género.");        
    }
}

var comprobarJubilacion = puedeJubilarse(); 
console.log(comprobarJubilacion);