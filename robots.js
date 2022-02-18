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
/*class RobotTwo {
    constructor(x, y) {
        this.x = 210;
        this.y = 220;
        this.width = 10
        this.height = 10
    }
    draw() {
        ctx.fillStyle = "#FF33F0"; // color
        ctx.fillRect(this.x, this.y, this.width, this.height) // cuadro que va a formar la comida
    }
}*/
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
    hitParachute() {
        return this.x === this.x && this.y === this.y
    }
}
class RobotOne {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0))
        //this.draw()
        //this.direction = "right"
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
    /*down() {
        this.head.y += 10
    }*/
    /*move() {
        if (this.direction === "right") return this.head.x += 10
        if (this.direction === "left") return this.head.x -= 10
        if (this.direction === "down") return this.head.y += 10
    }*/
    dead() {
        return this.head.hitBorder()
    }
    skipNext() {
        return this.head.hitParachute()
    }
}
class RobotTwo {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0))
        //this.draw()
        //this.direction = "right"
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
    down() {
        this.head.y += 10
    }
    /*move() {
        if (this.direction === "right") return this.head.x += 10
        if (this.direction === "left") return this.head.x -= 10
        if (this.direction === "down") return this.head.y += 10
    }*/
    dead() {
        return this.head.hitBorder()
    }
}
class Parachute {
    constructor() {
        this.head = new Square(Random.get(0, 500), Random.get(220, 0))
        //this.draw()
        //this.direction = "right"
    }
    draw() {
        ctx.fillStyle = "#FF0000";
        this.head.draw()
    }
    /*skipNext() {
        return this.head.hitParachute()
    }*/
    /*constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 10
        this.height = 10
    }
    draw() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    static generate() {
        return new Wall(Random.get(0, 500), Random.get(220, 0))
    }*/
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//var pared = new Pared();
const parachuteOne = new Parachute();
const parachuteTwo = new Parachute();
var land = new FrameLand();
var sky = new FrameSky();
var robotOne = new RobotOne();
var robotTwo = new RobotTwo();
//let walls = []
window.addEventListener("keydown", function(event) {
    event.preventDefault()
    if (event.keyCode === 37) return robotOne.left();
    if (event.keyCode === 39) return robotOne.right();
    if (event.keyCode === 65) return robotTwo.left();
    if (event.keyCode === 68) return robotTwo.right();
    return false
});
/*function clashBorder() {
    if (this.x < 0 || this.x > 490 || this.y < 0 || this.y > 290) {
        alert("YOU LOSE.");
    }
}*/
/*function main() {
    //clashBorder();
    robotOne.move();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    robotOne.draw();
    drawWall()
    if (robotOne.dead()) {
        console.log("Se acabo")
        window.clearInterval(animation)
    }
}*/
const animation = setInterval(function() {
    //clashBorder();
    robotOne.right();
    robotOne.left();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sky.draw();
    land.draw();
    robotOne.draw();
    robotTwo.draw();
    parachuteOne.draw();
    parachuteTwo.draw();
    //drawWall()
    if (robotOne.skipNext() == parachuteOne) {
        console.log("Hay un paracaidas.")
    }
    if (robotOne.dead() || robotTwo.dead()) {
        console.log("Se acabo.")
        window.clearInterval(animation)
    }
}, 1000 / 5);
/*setInterval(function() {
    const wall = Wall.generate()
    walls.push(wall)
}, 4000)*/
/*function drawWall() {
    for (const index in walls) {
        const wall = walls[index]
        wall.draw()
        //if (clash(wall, robotOne.he)) {}
    }
}*/
//https://www.youtube.com/watch?v=JlMEXdtqdxQ
/*ctx.strokeStyle = "red";
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 50, 50);
ctx.fillStyle = "#33ECFF";
ctx.fillRect(0, 0, 500, 300);
ctx.fillStyle = "yellow";
ctx.fillRect(10, 250, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(300, 250, 50, 50);

https://www.youtube.com/watch?v=OUpwaerbUrA
https://www.youtube.com/watch?v=me-l8LGHvVw
*/