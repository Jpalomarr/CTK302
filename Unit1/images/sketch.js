let i1, i2, i3; 

function setup() {
  createCanvas(500, 500);
  il= loadImage("assets/download.jpg");
  i2= loadImage("assets/gibson-brand-new-gibson-sg-standard-heritage-cherr.jpg");
  i3= loadImage("assets/jdSKEGxpE8aNXVZXMq7sVB.jpg");
  imageMode(CENTER);
}

function draw() {
  image(i1, width / 2, height / 2 - 120, 100, 100);
  image(i2, width / 2, height / 2, 100, 100);
  image(i3, width / 2, height / 2 + 100, 100, 100);

}
