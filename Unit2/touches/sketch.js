let numberOfTouches ;
let i1, i2, i3;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage ("assets/lonely.jpg")
  i2 = loadImage ("assets/fingers.jpg")
  i3 = loadImage ("assets/three.jpg")
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no one is touching the screen at this moment", 5, 22) ; 
      break ;
      
      case 1: 
       text("it's kind of lonely here, will someone soon touch the screen", 5, 22) ; 
       image(i1, width / 2, height / 2 - 120, 100, 100);
      break ;
      
      case 2:
      text("two fingers are touching the screen now", 5, 22) ; 
      image(i2, width / 2, height / 2, 100, 100);
      break ;
      
      case 3:
     text("four fingers are touching the screen now insted of two", 5, 22) ; 
     image(i3, width / 2, height / 2 + 100, 100, 100);
      break ;
    
      
  }
  
}