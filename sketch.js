let xb = 300;
let yb = 200;
let diametro = 15;
let raio = diametro / 2;
let vxb = 6;
let vyb = 6;

let xr = 5;
let yr = 150;
let lr = 7;
let ar = 80;

let xri = 585;
let yri = 150;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr, yr);
  mostraraquete(xri, yri);
  mexeraquete();
  mexeraqueteinimiga();
  quicabolaraquete();
}

function mostrabola() {
  circle(xb, yb, diametro);
}

function mexebola() {
  xb += vxb;
  yb += vyb;
}

function quicabola() {
  if (xb + raio > width || xb - raio < 0) {
    vxb *= -1;
  }
  if (yb + raio > height || yb - raio < 0) {
    vyb *= -1;
  }
}

function mostraraquete(x, y) {
  rect(x, y, lr, ar);
}

function mexeraquete() {
  if (keyIsDown(UP_ARROW))
    //s
    yr -= 10;

  if (keyIsDown(DOWN_ARROW)) yr += 10;
}
function mexeraqueteinimiga() {
  if (keyIsDown(87))
    //s
    yri -= 10;

  if (keyIsDown(83)) yri -= 10;
}
