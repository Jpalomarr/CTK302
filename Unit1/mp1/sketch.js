function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}


function draw() {
  background(100);

  if (mouseIsPressed) {
    
    background("blue");
    fill("red");
    rect(437, 451, 120, 120);
    rect(440, 555, 120, 120);
    rect(441, 659, 120, 120);
    rect(319, 431, 120, 120);
    rect(546, 430, 120, 120);

    fill("orange");
    ellipse(0, 0, 200, 200);

    fill(100, 200, 80);
  rect(0, 800, 2000, 220);

  textSize(20);
  //textAlign(CENTER);
  fill(255);
  text('His name is shape changer!', 150, 20);
  text('He has the ability to change into any object of his choosing whenever he wants', 150, 40);
  text('It could be circles or any object he can hide into', 150, 60);
  text('nobody will be able to spot his next move with his powers!', 150, 80);
       
  } else {
    // when the mouse isn't pressed!
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
    textSize(15);
    //textAlign(CENTER);
    fill(255);
    text('His name is shape changer!', 20, 20);
    text('He has the ability to change into any object of his choosing whenever he wants', 20, 40);
    text('It could be circles or any object he can hide into', 20, 60);
    text('nobody will be able to spot his next move with his powers!', 20, 80);


  }
  
  // this shows mouse location - comment it out when you're done!

  fill(0);
 // text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
