let x = 0 ;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/mugs.ttf");
}

function draw() {
  background (100);
  fill ("white"); 
  textFont(f1, 48);
  textSize(128);
  text("boooo", x, 200);
  x +=5
  if (x > width) {
    x = -500;
  }

}
