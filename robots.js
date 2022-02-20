/*Robots
Dos robots deben lanzarse en paracaídas en ubicaciones aleatorias en una línea infinita.
Cuando aterrizan, sus paracaídas se separan y permanecen donde están.

Los robots se pueden programar a partir del siguiente conjunto de instrucciones: 
    - left Ir a la izquierda una unidad
    - right Ir a la derecha una unidad
    - skipNext Omita la siguiente instrucción si hay un paracaídas aquí
    - goto label ir a la etiqueta

Cada una de estas instrucciones puede ir precedida de una etiqueta opcional(label: instruction).
Tu objetivo es programar los robots para que se encuentren(colisionen).
Ambos ejecutan el mismo código.*/
class Random {
    static get(inicio, final) {
        return Math.floor(Math.random() * final) + inicio
    }
}
class FrameSky {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.width = 500
        this.height = 230
    }
    draw() {
        ctx.fillStyle = "#1BEEE1"; // color
        ctx.fillRect(this.x, this.y, this.width, this.height) // cuadro que va a formar la comida
    }
}
class FrameLand {
    constructor(x, y) {
        this.x = 0;
        this.y = 230;
        this.width = 500
        this.height = 150
    }
    draw() {
        ctx.fillStyle = "#07E722"; // color
        ctx.fillRect(this.x, this.y, this.width, this.height) // cuadro que va a formar la comida
    }
}
class Square {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 10
        this.height = 10
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    hitBorder() {
        return this.x < 0 || this.x > 490 || this.y < 0 || this.y > 290
    }
}
class RobotOne {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0))
    }
    draw() {
        ctx.fillStyle = "blue";
        this.head.draw()
    }
    right() {
        this.head.x += 10
    }
    left() {
        this.head.x -= 10
    }
    dead() {
        return this.head.hitBorder()
    }
}
class RobotTwo {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0))
    }
    draw() {
        ctx.fillStyle = "black";
        this.head.draw()
    }
    right() {
        this.head.x += 10
    }
    left() {
        this.head.x -= 10
    }
    dead() {
        return this.head.hitBorder()
    }
}
class Parachute {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0))
    }
    draw() {
        ctx.fillStyle = "#FF0000";
        this.head.draw()
    }
}

function Draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sky.draw();
    land.draw();
    robotOne.draw();
    robotTwo.draw();
    parachuteOne.draw();
    parachuteTwo.draw();
}

function hit(a, b) {
    var hit = false;
    if (b.x + b.width >= a.x && b.x < a.x + a.width) {
        if (b.y + b.height >= a.y && b.y < a.y + a.height) {
            hit = true;
        }
    }
    if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
        if (b.y <= a.y && b.y + b.height >= a.y + a.height) {
            hit = true;
        }
    }
    if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
        if (a.y <= b.y && a.y + a.height >= b.y + b.height) {
            hit = true;
        }
    }
    return hit;
}

function HitBorder() {
    if (robotOne.dead() || robotTwo.dead()) {
        console.log("Se acabo.")
        window.clearInterval(animation)
    }
}

function SkipNext() {
    if (hit(parachuteOne.head, robotOne.head) || hit(parachuteOne.head, robotTwo.head) || hit(parachuteTwo.head, robotOne.head) || hit(parachuteTwo.head, robotTwo.head)) {
        console.log("Hay un paracaidas.")
    }
}

function HitRobot() {
    if (hit(robotTwo.head, robotOne.head)) {
        console.log("Colisión entre robots.")
    }
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sky = new FrameSky();
var land = new FrameLand();
var robotOne = new RobotOne();
var robotTwo = new RobotTwo();
const parachuteOne = new Parachute();
const parachuteTwo = new Parachute();
window.addEventListener("keydown", function(event) {
    event.preventDefault()
    if (event.keyCode === 37) return robotOne.left();
    if (event.keyCode === 39) return robotOne.right();
    if (event.keyCode === 65) return robotTwo.left();
    if (event.keyCode === 68) return robotTwo.right();
    return false
});
const animation = setInterval(function() {
    Draw();
    HitBorder();
    SkipNext();
    HitRobot();
}, 1000 / 5);
//https://www.geeksforgeeks.org/how-to-use-goto-in-javascript/