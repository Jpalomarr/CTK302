let state = 0;



function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
    background("grey") ;
    text("How does a computer get drunk?", width / 2, height / 2,);
    break;

    case 1: 
    background("blue");
    text(" It takes screen shots", width / 2, height / 2);

    break;
    
    
  }
}

function mouseReleased(){
  state++;
  if (state>1) state = 0;
}
