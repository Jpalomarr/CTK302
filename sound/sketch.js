let inspire ;

function preload() {
  inspire=loadSound("assets/inspire.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  inspire.play() ;
  
}

function draw() {
  background("black");
  fill ("white"); 
  text("the name of the song is called inspire", 10, 10, 400, 400)
}

function mouseReleased() {
  if (inspire.isPlaying()) {
    inspire.pause() ;
  } else {
    inspire.play() ;
  }


}



function touchStarted() {
  getAudioContext().resume();
}
