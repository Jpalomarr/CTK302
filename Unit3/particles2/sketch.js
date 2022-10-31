let cars = [] ;
function setup() {
  createCanvas(500, 500);

  // Spawn one object

  //for (let i = 0 ; i < 20 ; i++)  {
  //cars.push(new Car());
  //}
  noStroke() ;
}

function draw() {
  background("black");
  cars.push(new Car());

  for (let i = 0 ; i < cars.length; i++){
  cars[i].display();
  cars[i].move();
  if (cars[i].a <= 0) {
    cars.splice(i, 1);
  }
  fill('white') ;
  text(cars.x, 100, 100 ) ;
  }
}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(100, 100) ;  // initialize your attributes here
    this.vel = createVector(random(10), random(10)) ;  // initialize your attributes here
    this.r = 50 ; 
    this.g = 200 ;
    this.b = random(200) ;
    this.a = random(200, 255) ;
    this.s = random(100, 200) ;
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a) ;
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5 ;
    //if (this.pos.x > width) this.pos.x = 0 ;
    //if (this.pos.x < 0) this.pos.x = width ;
    //if (this.pos.y > height) this.pos.y = 0 ;
    //if (this.pos.y < 0) this.pos.y = height;
  }
  
}