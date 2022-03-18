/*
    Creo la función, la nombro "puedeJubilarse", luego la función toma como parámetros la fecha de nacimiento (dia, mes, anio),
    genero y años de aporte jubilatorios.
*/
function puedeJubilarse(dia, mes, anio, genero, aniosAporteJubilatorios) {
    let edad = 2022 - anio; // Calculo la edad que tiene la persona y la guardo en una variable para usarla como verificación.
    if (genero == "Masculino") { // Verifico que el genero sea masculino.
        // Verifico que la edad de la persona sea mayor o igual que 65 y a la vez, verifico que los años de aporte sean mayores 
        // o igual que 30.
        if (edad >= 65 && aniosAporteJubilatorios >= 30) { // Si cumple la condición, dará como resultado true.
            return true;
        } else { // Si no la cumple, dará como resultado false.
            return false;
        }
    }
    if (genero == "Femenino") { // Verifico que el genero sea femenino.
        // Verifico que la edad de la persona sea mayor o igual que 60 y a la vez, verifico que los años de aporte sean mayores 
        // o igual que 30.
        if (edad >= 60 && aniosAporteJubilatorios >= 30) { // Si cumple la condición, dará como resultado true.
            return true;
        } else { // Si no la cumple, dará como resultado false.
            return false;
        }
    }
}
function validarFechaNacimiento(fechaNacimiento) {
    const fechaActual = new Date();
    const anioActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth());
    const diaActual = parseInt(fechaActual.getDate());

    const anioNaciminto = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = anioActual - anioNaciminto;
    if (mesActual < mesNacimiento) {
        edad = edad - 1;
    }else if (mesActual === mesNacimiento){
        if (diaActual < diaNacimiento) {
            edad = edad - 1;
        }
    }
    return edad;
}
//var persona = puedeJubilarse("11/06/1801", "Femenino", 80); // La variable "persona", obtiene el valor que retorna la función.
var persona = validarFechaNacimiento("23/09/2001");
console.log(persona); // Muestra por la consola