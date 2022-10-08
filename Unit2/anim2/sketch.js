let x = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  push();
  translate(0, x) ;
avatar() ;

x+=5;
if (x> width) {
  x=-300
}
pop();

}


function avatar () {
   // This is the hands
   fill("black");
  
   ellipse(387, 187, 100, 100);
    ellipse(391, 245, 100, 100);
    ellipse(396, 331, 100, 100);
    ellipse(402, 423, 100, 100);
    ellipse(407, 487, 100, 100);
    ellipse(358, 524, 100, 100);
    ellipse(470, 523, 100, 100);
    ellipse(525, 564, 100, 100);
    ellipse(296, 565, 100, 100);
    ellipse(333, 334, 100, 100);
    ellipse(261, 340, 100, 100);
    ellipse(467, 327, 100, 100);
    ellipse(470, 523, 100, 100);
    ellipse(538, 334, 100, 100);

}