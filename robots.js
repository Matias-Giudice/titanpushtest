// Clases
class Random {
    static get(inicio, final) {
        return Math.floor(Math.random() * final) + inicio; // Devuelve un número aleatorio entre un rango.
    }
}
class FrameSky {
    constructor(x, y) {
        this.x = 0; // La coordenada x para el punto de comienzo del rectángulo.
        this.y = 0; // La coordenada y para el punto de comienzo del rectángulo.
        this.width = 500; // La anchura del rectángulo.
        this.height = 230; // La altura del rectángulo.
    }
    draw() {
        ctx.fillStyle = "#1BEEE1"; // Color del rectángulo.
        ctx.fillRect(this.x, this.y, this.width, this.height); // Posición y tamaño donde se va a dibujar el rectángulo.
    }
}
class FrameLand {
    constructor(x, y) {
        this.x = 0; // La coordenada x para el punto de comienzo del rectángulo.
        this.y = 230; // La coordenada y para el punto de comienzo del rectángulo.
        this.width = 500; // La anchura del rectángulo.
        this.height = 150; // La altura del rectángulo.
    }
    draw() {
        ctx.fillStyle = "#07E722"; // Color del rectángulo.
        ctx.fillRect(this.x, this.y, this.width, this.height); // Posición y tamaño donde se va a dibujar el rectángulo.
    }
}
class Square {
    constructor(x, y) {
        this.x = x; // La coordenada x para el punto de comienzo del rectángulo.
        this.y = y; // La coordenada y para el punto de comienzo del rectángulo.
        this.width = 10; // La anchura del rectángulo.
        this.height = 10; // La altura del rectángulo.
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height); // Posición y tamaño donde se va a dibujar el rectángulo.
    }
    hitBorder() {
        // Verifica si los puntos (x,y) del rectángulo son mayores o menores a esos puntos especifícos.
        return this.x < 0 || this.x > 490 || this.y < 0 || this.y > 290;
    }
}
class RobotOne {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0)); // Crea el rectángulo de forma aleatoria dentro de esas coordenadas.
    }
    draw() {
        ctx.fillStyle = "#3A3ADA"; // Color del rectángulo.
        this.head.draw(); // Dibuja el rectángulo con el método draw() de la clase Square.
    }
    right() {
        this.head.x += 10; // Aumenta 10 píxeles al punto x del rectángulo.
    }
    left() {
        this.head.x -= 10; // Disminuye 10 píxeles al punto x del rectángulo.
    }
    dead() {
        return this.head.hitBorder(); // Devuelve el método hitBorder() de la clase Square.
    }
}
class RobotTwo {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0)); // Crea el rectángulo de forma aleatoria dentro de esas coordenadas.
    }
    draw() {
        ctx.fillStyle = "#F5FF58"; // Color del rectángulo.
        this.head.draw(); // Dibuja el rectángulo con el método draw() de la clase Square.
    }
    right() {
        this.head.x += 10; // Aumenta 10 píxeles al punto x del rectángulo.
    }
    left() {
        this.head.x -= 10; // Disminuye 10 píxeles al punto x del rectángulo.
    }
    dead() {
        return this.head.hitBorder(); // Devuelve el método hitBorder() de la clase Square.
    }
}
class Parachute {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0)); // Crea el rectángulo de forma aleatoria dentro de esas coordenadas.
    }
    draw() {
        ctx.fillStyle = "#FF0000"; // Color del rectángulo.
        this.head.draw(); // Dibuja el rectángulo con el método draw() de la clase Square.
    }
}
// Funciones
function Draw() { // Dibuja los objetos.
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Cuadro de limpieza para dar el efecto de animación(movimiento).
    sky.draw();
    land.draw();
    robotOne.draw();
    robotTwo.draw();
    parachuteOne.draw();
    parachuteTwo.draw();
}

function hit(a, b) { // Evalua que si los objetos están chocando, tengan un atributo (x, y, width, height) para poder verificar.
    var hit = false;
    // Colisiones horizotales.
    if (b.x + b.width >= a.x && b.x < a.x + a.width) {
        // Colisiones verticales.
        if (b.y + b.height >= a.y && b.y < a.y + a.height) {
            hit = true;
        }
    }
    return hit;
}

function HitBorder() {
    // Si cumple con la condición que el robot este chocando con el borde, mostrará un mensaje y detendrá la animación.
    if (robotOne.dead() || robotTwo.dead()) {
        console.log("Se acabo.");
        window.clearInterval(animation);
    }
}

function SkipNext() {
    // Si cumple con la condición que alguno de los robots este colisionando con alguno de los paracaídas, mostrará un mensaje.
    if (hit(parachuteOne.head, robotOne.head) || hit(parachuteOne.head, robotTwo.head) || hit(parachuteTwo.head, robotOne.head) || hit(parachuteTwo.head, robotTwo.head)) {
        console.log("Hay un paracaídas.");
    }
}

function HitRobot() {
    // Si cumple con la condición que los robots colisionen entre ellos, mostrará un mensaje y detendrá la animación.
    if (hit(robotTwo.head, robotOne.head)) {
        console.log("Colisión entre robots.");
        window.clearInterval(animation);
    }
}
const canvas = document.getElementById("canvas"); // Referencia al elemento por su ID.
const ctx = canvas.getContext("2d"); // Manipulacion del documento canvas para dibujar en el
const sky = new FrameSky(); // Se crea un nuevo objeto.
const land = new FrameLand(); // Se crea un nuevo objeto.
const robotOne = new RobotOne(); // Se crea un nuevo objeto.
const robotTwo = new RobotTwo(); // Se crea un nuevo objeto.
const parachuteOne = new Parachute(); // Se crea un nuevo objeto.
const parachuteTwo = new Parachute(); // Se crea un nuevo objeto.
window.addEventListener("keydown", function(event) { // Registra un evento (en este caso keydown) a un objeto en específico.
    // keyCode = Representa un código numérico que identifica el valor no modificado de la tecla presionada.
    if (event.keyCode === 37) return robotOne.left(); // Si cumple con la condición, retorna el método left() del objeto.
    if (event.keyCode === 39) return robotOne.right(); // Si cumple con la condición, retorna el método right() del objeto.
    if (event.keyCode === 65) return robotTwo.left(); // Si cumple con la condición, retorna el método left() del objeto.
    if (event.keyCode === 68) return robotTwo.right(); // Si cumple con la condición, retorna el método right() del objeto.
});
const animation = setInterval(function() { // Devuelve la función que será ejecutada cada intervalo de tiempo (milisegundos).
    Draw(); // Función dibujar.
    HitBorder(); // Función choque con bordes.
    SkipNext(); // Función colisión robot con paracaídas.
    HitRobot(); // Función colisión robot con robot.
}, 1000 / 5);