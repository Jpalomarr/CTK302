let state = -1;
let s1, s2, s3;

function preload(){
  s1 = loadSound("assets/elevate.mp3");
  s2 = loadSound("assets/perception.mp3");
  s3 = loadSound("assets/slowmotion.mp3");
  

}
function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(100);
  
  switch (state) {
     case -1:
      text("please click to begin", 300, 300);
      break;

    case 0: 

      if (!s1.isPlaying()) {
        s1.play();

      }
      background("red");
      text("the first song is now playing", 300, 300);
      break;

    case 1:
      if (!s2.isPlaying()) {
        s2.play();
      }
      background("blue");
      text("the second song is now playing", 300, 300);
      break;

    case 2:
      if (!s3.isPlaying()) {
        s3.play();
      }
      background("green");
      text("the final song is now playing", 300, 300);
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}