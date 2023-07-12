//ball variables
let xB = 360
let yB = 240
let rB = 6
let xVB = 4
let yVB = 4

//racket 1 variables
let xR1 = 2
let yR1 = 210
let wR1 = 8
let hR1 = 60
let yVR1 = 10

//racket 2 variables
let xR2 = 708
let yR2 = 210
let wR2 = 8
let hR2 = 60
let yVR2 = 10

//Placar do Jogo
let MP = 0
let OP = 0

//sons do jogo
let raquetada
let ponto

//screen size
function setup() {
  createCanvas(720, 480);
}

function draw() {
  background(0); //background color
  showball()
  showracket1()
  showracket2()
  moveball()
  moveracket1()
  moveracket2()
  hitracket1()
  hitracket2()
  hitwall()
  placar()
  pontos()
 
}

function showball(){
  circle(xB,yB,2*rB);
}

function showracket1(){
  rect(xR1,yR1,wR1,hR1)
}

function showracket2(){
  rect(xR2,yR2,wR2,hR2)
}

function moveball(){
  xB += xVB;
  yB += yVB; 
}

function moveracket1(){
  if (keyIsDown(UP_ARROW)){
  yR1 -= yVR1;
    if (yR1 < 0){
      yR1 = 0
    }
  }
  if (keyIsDown(DOWN_ARROW)){
  yR1 += yVR1;
    if (yR1> 420){
      yR1 = 420
    }
  }
}

function moveracket2(){
  yR2 = (yB-(hR2/2))
    if (yR2 < 0){
      yR2 = 0  
    }
    if (yR2 > 420) {
        yR2 = 420
    }
}

function hitwall(){
   if ((xB+rB) > width ||
      (xB-rB) < 0){
      xVB *= -1;
      
  }
  if ((yB+rB) > height ||
      (yB-rB) < 0){
      yVB *= -1;
      
  }
}

function hitracket1(){
   if ((xB-rB) < (xR1+wR1) &&
     (yB-rB) > (yR1) &&
     (yB+rB) < (yR1+hR1)) {
     xVB *= -1;
     raquetada.play();
   }
}

function hitracket2(){
   if ((xB+rB) > (xR2) &&
     (yB-rB) > (yR2) &&
     (yB+rB) < (yR2+hR2)) {
     xVB *= -1;
     raquetada.play();
   }
}

function placar(){
  textAlign(CENTER)
  textSize(30)
  fill(255)
  text(MP, 320, 30)
  text(OP, 400, 30)
}

function pontos(){
  if (xB > 715){
    MP += 1
    ponto.play();
  }
  if (xB < 5) {
    OP += 1 
    ponto.play();
  }
}

function preload() {
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}
