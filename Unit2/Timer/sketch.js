let state = 0;
let timer = 0 ;
let i1, i2, i3;



function setup() {
  createCanvas(400, 400);
  i1 = loadImage ("assets/morning.jpg")
  i2 = loadImage ("assets/afternoon.jpg")
  i3 = loadImage ("assets/evening.jpg")

  imageMode(CENTER);
}

function draw() {
  background(220);
  
  switch(state) {
    case 0:
      background("red");
      text("this is on a morning", 280, 280);
      
     image(i1, width / 2, height / 2 - 120, 200, 200);
      
      timer++ ;
      if (timer > 3*60) {
        timer = 0 ;
        state = 1 ;
      }
      break;
      
      case 1:
      background("blue");
      text("this is in the afternoon", 280, 280);
      
      
      image(i2, width / 2, height / 2 - 120, 200, 200);
      
      timer++ ;
      if (timer > 7*60) {
        timer = 0 ;
        state = 2 ;
      }
      break;
      
      case 2:
      background("green");
         text("this is in the evening", 280, 280);
         image(i3, width / 2, height / 2 - 120, 200, 200);

      
      timer++ ;
      if (timer > 5*60) {
        timer = 0 ;
        state = 0 ;
      }
      break;
  }
}