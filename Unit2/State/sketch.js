let state = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(100);
  
  switch (state) {
    case 0:
      background("red");
      //text("0", 100, 100);
        // text("case 0", 100, 100);
          for (let j = 0; j <= height; j += 25) {
      for (let i = 0; i <= width; i += 25) {
        rect(i, j, 20, 20);
      }
 }
      
      break;

    case 1:
      background("blue");
      //text("1", 100, 100);
       for (let j = 0; j <= height; j += 25) {
      for (let i = 0; i <= width; i += 25) {
        circle(i, j, 10, 10);
      }
 }
      
      break;

    case 2:
      background("green");
      //text("2", 100, 100);
      for (let j = 0; j <= height; j += 25) {
      for (let i = 0; i <= width; i += 25) {
        circle(i, j, 50, 50);
      }
    }
      
      
      break;
      
        case 3:
        background("black");
      //text("2", 100, 100);
      for (let j = 0; j <= height; j += 25) {
      for (let i = 0; i <= width; i += 25) {
        rect(i, j, 50, 50);
      }
    }
      
      
      
      break;
      
        case 4:
      background("yellow");
      //text("2", 100, 100);
                for (let j = 0; j <= height; j += 25) {
      for (let i = 0; i <= width; i += 25) {
        rect(i, j, 40, 40);
      
      
      break;
      }
                }



  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}