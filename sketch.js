let input;

function setup() {
  createCanvas(windowWidth, 500);
  boids = [];
  background(210,180,220);
  instruccion ();
}
function instruccion(){
  fill(255);
  textSize(24);
  text("Imagen Escrita 2021",10, 30);
  textSize(14);
  text('Cliquea para hacer aparecer una figura',10, 80);
  text('Pulsa espacio para borrar',10, 60);
  
}
function draw() {
/* fill(255);
  textSize(15);
  text('Pulsa espacio para borrar',10, 20);*/
  for (let i = 0; i < boids.length; i++) {
    boids[i].draw();
    boids[i].go();
  }
}
class Boid {
  constructor(x, y, t, a) {
    this.x = x;
    this.y = y;
    this.t = t; //tamaño
    this.a = a; //ángulo
    this.seed = round(random(0, 999999));
  }
  draw() {
    stroke(255,245,230,90);
    
    push();
    translate(this.x, this.y);
    rotate(this.a);
    beginShape();
    vertex(0, this.t * 1.5);
    vertex(this.t * 1.5, 0);
    vertex(-this.t, this.t * 1,5);
    endShape(CLOSE);
    pop();
  }
  go() {
    noiseSeed(this.seed);
    this.a += (noise(millis()/500) - 0.5) * 0.333;

    this.x += cos(this.a) * 2;
    this.y += sin(this.a) * 2;
    this.t *= 0.99999;
    
    if(unoEn(1000)){
      let nuevaRama = new Boid (this.x, this.y, this.t, random(-1,1)*HALF_PI);
      boids.push(nuevaRama);
    }
  }
}

function mousePressed() {
  let b = new Boid(mouseX, mouseY, 10, -HALF_PI);
  boids.push(b);
}
function keyTyped(){
  if(key === " "){
    background(210,180,220);
    instruccion ();
  }
}
function unoEn(num){
  let n = random(0, num);
  if(n < 1){
    return true;
  } else {
    return false;
  }
  }
