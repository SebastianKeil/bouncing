
function setup() {
  createCanvas(400, 800);
  b = new Ball(200,20,20);
  gravitation = createVector(0, 0.1);
}

function draw() {
  background(220);
  
  b.force(gravitation);
  b.move();
  b.show();
}