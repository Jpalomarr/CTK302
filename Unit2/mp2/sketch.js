let state = -1;
let s1, s2, s3;
let timer = 0;
let i1, i2, i3;

function preload(){
  s1 = loadSound("assets/alter.mp3");
  s2 = loadSound("assets/amazing.mp3");
  s3 = loadSound("assets/kendrick.mp3");
  

}
function setup() {
  createCanvas(800, 800);
  i1 = loadImage("assets/tame.jpg");
  i2 = loadImage("assets/kanye.jpg");
  i3 = loadImage("assets/ken.jpg");
  imageMode(CENTER);
}

function draw() {

  background(100);
  
  switch (state) {
     case -1:
      text("click to begin", 300, 300);
      break;

    case 0: 

      if (!s1.isPlaying()) {
        s1.play();
        s2.pause();
        s3.pause();
  

      }
      background("red");
      image(i1, width / 2, height / 2, 800, 800);
      fill ("red");
      text("the first song is now playing. Tame impala - Alter Ego", 150, 300);
      text('from the album InnerSpeaker', 150, 311);
      text('Created in 2010, its the first album he made and then has made an additional 3 albums since then.', 145, 321);
      break;

    case 1:
      if (!s2.isPlaying()) {
        s2.play();
        s1.pause();
        s3.pause();
      }
      background("blue");
      image(i2, width / 2, height / 2, 800, 800);
      text("the second song is now playing. Kanye West - Amazing", 150, 200);
      text('from the album 808s & heartbreak', 150,220);
      text('Created in 2008, its the fourth album he made and then has made an additional 8 albums since then.', 145, 240);

      break;

    case 2:
      if (!s3.isPlaying()) {
        s3.play();
        s2.pause();
        s1.pause();
      }
      background("green");
      image(i3, width / 2, height / 2, 800, 800);
      text("the final song is now playing. Kendrick Lamar - Sing About Me ", 150, 200);
      text('from one of his most popular albums titled Good Kid Mad City', 150, 220);
      text('Created in 2012, its the 2nd album hes made 3 albums since then.', 145, 235);

      break;

  }
  timer++ ;
if (timer > 20 * 60) {
  timer = 0; 
  state++
  if (state > 2) {
    state = 0;
  }
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