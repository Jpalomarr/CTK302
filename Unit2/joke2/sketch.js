let state = 0;
let timer = 0;



function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
    background("grey") ;
    text("Why are cats bad storytellers?", width / 2, height / 2,);
    break;

    case 1: 
    background("blue");
    text("Because they only have one tale", width / 2, height / 2);

    break;
    
    
  }
timer++ ;
if (timer > 4 * 60) {
  timer = 0; 
  state++
  if (state > 2) {
    state = 0;
  }
}


}


