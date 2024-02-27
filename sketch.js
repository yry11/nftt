let circles = [];
let lastGenerated = 0;
let circleCount = 10;
let currentCircleIndex = 0;
let noiseOffset = 0;
let shapes = [];

const flowerArray = [ 5, 4, 6];
let flowerSize;

var NORTH = 0;
var NORTHEAST = 1;
var EAST = 2;
var SOUTHEAST = 3;
var SOUTH = 4;
var SOUTHWEST = 5;
var WEST = 6;
var NORTHWEST = 7;
var direction;
var posX;
var posY;

let count = 0;

function setup() {
  createCanvas(600, 600);
 //drawingContext.shadowColor = color(0, 0, 5, 50);
  noStroke();
  posX = width / 2;
  posY = height / 2;

  rectMode(CENTER);
  smooth();
  noStroke()
  flowerSize = random(40, 130);
  blendMode(SOFT_LIGHT)
  
  let randomSchemeIndex = Math.floor(Math.random() * colorScheme.length);
//let randomScheme = colorScheme[randomSchemeIndex];

// 从该方案中随机选择一个颜色

  for (let i = 0; i < 600; i++) {
// 随机选择一个配色方案
    
    let randomScheme = colorScheme[randomSchemeIndex];
let randomColorIndex = Math.floor(Math.random() * randomScheme.colors.length);
   let randomColorWithAlpha = randomScheme.colors[randomColorIndex] + "10"; // 这里添加的 "80" 表示透明度为 50%

     fill(randomColorWithAlpha)
  
    pattern(random(width), random(height), random(10, 100), random(3, 10))//边 背景
  }
  angleMode(DEGREES);

  for (let i = 0; i < 10; i++) {
    shapes.push(new Shape());
  }
}

function pattern(x, y, radius, edge) {
  let angle = TWO_PI / edge;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  var  stepSizes = [50,20,10,40,30];
   stepSize=(random(stepSizes))
  
  var diameterr = [10,15,20,25];
  diameter=(random(diameterr))
}

function draw() {

 for (var i = 0; i <= 2 ; i++) {
    noStroke();
    direction = int(random(0, 8));
//   var  stepSize =floor(random(20,25));
  
    if (direction == NORTH) {
      posY -= stepSize;
    } else if (direction == NORTHEAST) {
      posX += stepSize;
      posY -= stepSize;
    } else if (direction == EAST) {
      posX += stepSize;
    } else if (direction == SOUTHEAST) {
      posX += stepSize;
      posY += stepSize;
    } else if (direction == SOUTH) {
      posY += stepSize;
    } else if (direction == SOUTHWEST) {
      posX -= stepSize;
      posY += stepSize;
    } else if (direction == WEST) {
      posX -= stepSize;
    } else
if (direction == NORTHWEST) {
      posX -= stepSize;
      posY -= stepSize;
    }

   if (posX > width) posX = 0- stepSize;
    if (posX < 0- stepSize) posX = width;
    if (posY < 0- stepSize) posY = height;
    if (posY > height) posY = 0- stepSize;
   
    // filler.setAlpha(20)
    // fill(filler);

      let randomSchemeIndex = Math.floor(Math.random() * colorScheme.length);
    let randomScheme = colorScheme[randomSchemeIndex];
   let randomColorIndex = Math.floor(Math.random() * randomScheme.colors.length);
 let randomColorWithAlpha = randomScheme.colors[randomColorIndex] + "20"; // 这里添加的 "80" 表示透明度为 50%

   // randomColor.setAlpha(15)
     fill(randomColorWithAlpha)
   ellipse(posX + stepSize, posY + stepSize, diameter, diameter);

 }
 //walker_1(posX + stepSize, posY + stepSize, diameter, diameter);
 
    for (let i = 0; i < shapes.length; i++) {
    shapes[i].move();
     if (i < 4)
      shapes[i].display1();
    else shapes[i].display();
  }
   if (random() > 0.7 && frameCount > 1200) {
     noLoop();
     	granulate(28)
      }
//  if(random() > 0.7) {
//   if(frameCount >1300) {
// 		noLoop();
    
//     	granulate(28)
  if (random() <= 0.7 && frameCount > 1200) {
     noLoop();
     //	granulate(28)
     
  }
}


function granulate(gA){
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let ii = 0; ii < halfImage; ii += 8) {
    grainAmount = random(-gA,gA)
    pixels[ii] = pixels[ii]+gA;
    pixels[ii + 1] = pixels[ii+1]+grainAmount;
    pixels[ii + 2] = pixels[ii+2]+grainAmount;
    pixels[ii + 3] = pixels[ii+3]+gA*5;
  }
  updatePixels();
}


class Shape {
  constructor() {
    this.init();
  }
  init() {
      this.ox = 100
    this.oy = 200
    // this.ox = random(0, 600);
    // this.oy = random(0, 600);
    this.oxRandom = random(-300, 300);
    this.oyRandom = random(-300, 300);
    this.r = [];
    this.rMax = random(40, 100);
    this.rNow = 0;
    this.rCount = 0;
    this.flowerNum = random(flowerArray);
   this.randomSchemeIndex = Math.floor(Math.random() * colorScheme.length);
    this.randomScheme = colorScheme[this.randomSchemeIndex];
    
 this.randomColorIndex = Math.floor(Math.random() *this. randomScheme.colors.length);
    
//      this.xxx = random(1000);
//       this.yyy = random(1000);
    
//     let noiseAlpha = map(noise( this.xxx,  this.yyy), 0, 1, -150, 50); // 使用噪声生成随机透明度
     let randomColorWithAlpha = this.randomScheme.colors[this.randomColorIndex] + "15";
// let randomColorWithNoise = color(randomColorWithAlpha).levels.slice(0, 3).concat(map(noiseAlpha, -50, 50, 0, 255)); // 将随机透明度添加到颜色中

  
  // let randomColorWithAlpha = this.randomScheme.colors[this.randomColorIndex] + "10";
    for (let i = 0; i < 360; i++) {
      this.r.push(this.rMax * sin(i));
    }
   if (random() > 0.7) {
  
  //  this.col = color(randomColorWithAlpha)
this.col = color(235, random(30,215), 96, 10)
    
//    }  
 //    }
 // this.col = color(randomColorWithNoise);

   } else {
   //   this.col = color(randomColorWithNoise)
  this.col = color(randomColorWithAlpha)
 }
 //   this.col = color(20, 171, 20, 10);
//  this.col = color(random(50, 255), 171, random(255), 10);
      this.nx = random(1000);
      this.ny = random(1000);
   
  }

  move() {
      this.ox = map(noise(this.nx), 0, 1, 0, width);
    this.oy = map(noise(this.ny), 0, 1, 0, height);

    this.nx += 0.001;
    this.ny += 0.001;
    
 // this.xxx += 0.001;
 //    this.yyy += 0.001;
    this.rNow = this.rMax * sin(this.rCount);
    this.r = [];
    for (let i = 0; i < 360; i++) {
      this.r.push(this.rNow * sin(i * this.flowerNum));
    }
    this.rCount = this.rCount + 1;
  }

  display() {
    noFill();
    stroke(this.col);

    push();
  //  translate(constrain(this.ox + this.oxRandom, 0, width), constrain(this.oy + this.oyRandom, 0, height));
  translate(this.ox + this.oxRandom, this.oy + this.oyRandom)
    beginShape();
    for (let t = 0; t < 360; t++) {
      let x = this.r[t] * cos(t);
      let y = this.r[t] * sin(t);
      strokeWeight(1);
      vertex(x, y);
    }
    endShape();
    pop();

    if (this.rCount > 100) {
      this.init();
    }
  }



 display1() {
    noFill();

    push();
    translate(this.ox + this.oxRandom, this.oy + this.oyRandom);
   // stroke(this.col);
    beginShape();
    for (let t = 0; t < 360; t++) {
      let x = this.r[t] * cos(t);
      let y = this.r[t] * sin(t);
      vertex(x, y);
      push();
      // 修改噪点的颜色
      // stroke(this.col);
     // stroke(255, (25 / 100) * 255);
     // stroke(255, 100);
   //  stroke( 235, random(30,255), 96, 10);
    // stroke(random(50, 255), 171, random(255), 30);
        stroke(this.col);
      strokeWeight(2)
      if (random(1) < 0.4) { point(x, y); }
      pop();
    }
    endShape();
    pop();

    if (this.rCount > 100) {
      this.init();
    }
  }
}
function keyPressed() {
  if (key == 's') {
    save(".png");
  }
}
let colorScheme = [{
		name: "Benedictus",
		colors: ["#f66e7c", "#edbfb2", "#bbf0e3", "#7ed3c0", "#F2E6D8", "#f6d293"],
	},
	{
		name: "Nizami",
		colors: ["#b4f3ed","#ebc560","#6ebdbf","#d6b775","#119190","#cee55e","#e9bda2","#fcb79f"],
	},
	{
		name: "rhea",
		colors: ["#00b191","#87ccef","#9ccca8","#afe8d1","#d1da50","#f3869b","#ffc5c7","#cee55e","#87ccef"],
	},
	{
		name: "rheaa",
	colors: ["#f2eb8a", "#fed000", "#fc8405", "#e2f0f3", "#b3dce0", "#ffc5c7", "#f398c3", "#06b4b0", "#d7b298", "#c2c5a8", "#9fc3b5"],
	},
	{  
	name: "rheaaa",
	colors: ["#deacca", "#f1ad3b", "#fc8405", "#e2f0f3", "#b3dce0", "#ffc5c7", "#f398c3", "#f3a868", "#a5b2c9",  "#777489",],
	},
	{ 
	name: "rheaaaa",
	colors: ["#deacca", "#f1ad3b", "#e2f0f3", "#b3dce0", "#ffc5c7", "#f398c3", "#f3a868", "#a5b2c9",  "#777489","#a0e2e8"],
	},   
	{
	name: "rheaaaa",
	colors: ["#deacca", "#9edecd", "#e2f0f3", "#5099bf", "#ffc5c7", "#feefac", "#ff9a9e", "#ffedd4",  "#00718d","#a0e2e8"],
	},  
	{
	name: "rheaaaa",
	colors: ["#cee55e", "#ddb772", "#f6d293", "#dcc8c9", "#adbbd6", "#626dac","#f1d0b4"],
	},  
	// {
	// name: "rheaaaaa",
	// colors: ["#476b64", "#eee9d7", "#b70d11", "#dcc8c9", "#cd883b", "#135d78","#f1d0b4"],
	// }, 
	{
	name: "rheaaaaaa",
	colors: ["#898272", "#eee9d7", "#c4463d", "#dcc8c9", "#bab9a4", "#9a4439","#f1d0b4","#dcd3c2"],
	}, 
	{
	name: "rrheaaaaaa",
	colors: ["#cee55e", "#eee9d7", "#ffe3b4", "#bed392", "#54935d", "#faf9ee","#f1d0b4","#87b55e"],
	},
	{
	name: "rrhheaaaaaa",
	colors: ["#cee55e", "#a7d2e1", "#ffe3b4", "#bed392", "#acddcf", "#e5e5f3","#f2cddc","#87b55e"],
	},
	{
	name: "rrhhheaaaaaa",
	colors: ["#a2e9e2", "#23e0c4", "#787be1", "#bed392", "#f75f21", "#ed3879","#f2cddc","#f6b7b5"],
	},
	// {
	// name: "rrhhheeaaaaaa",
	// colors: ["#a2e9e2", "#23e0c4", "#cf2525", "#bed392", "#a36050", "#3eb2a4","#505A64","#6e8179","#feefac"],
	// },
                   
                   
                   ];