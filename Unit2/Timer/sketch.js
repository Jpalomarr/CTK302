let state = 0;
let timer = 0 ;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  switch(state) {
    case 0:
      background("red");
      text("this is on a morning", 100, 100);
      
      // put image and text
      
      timer++ ;
      if (timer > 3*60) {
        timer = 0 ;
        state = 1 ;
      }
      break;
      
      case 1:
      background("blue");
           // put image and text
      
      timer++ ;
      if (timer > 7*60) {
        timer = 0 ;
        state = 2 ;
      }
      break;
      
      case 2:
      background("green");
           // put image and text
      
      timer++ ;
      if (timer > 5*60) {
        timer = 0 ;
        state = 0 ;
      }
      break;
  }
}