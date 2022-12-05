// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0; 
let temperature = 0;
let humidity = 0;
let i1;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/Naperville.jpg");
  imageMode(CENTER);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Naperville,IL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=da83b7ffeb0648f8b3bb2e43a12d4bef" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;

}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      
      
      let bg = 0;
      
      let temp = 0 ;
      if (temperature < 50) {
         bg = map(temperature, 0, 50, 0, 255) ;
        background (0, 0, bg) ;
        
      }else{
        // we are going to do red
          bg = map(temperature, 0, 100, 0, 255) ;
        background (bg, 0, 0);
      
      }
      
      image(i1, width / 2, height / 2, 800, 800);
      fill("green");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
       text("temperature is " + temperature, 20, 60);
       text("humidity is " + humidity + "%", 20, 80);
 

      // cloud
      fill("white");
     
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
