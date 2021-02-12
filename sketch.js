//initialize variable
//blue bubble
var x1 = 400;
var y1 = 200;

//green bubble
var x2 = 200;
var y2 = 400;

//pink bubble
var x3 = 600;
var y3 = 500;

//yellow bubble
var x4 = 800;
var y4 = 600;

//purple bubble
var x5 = 200;
var y5 = 0;

//red bubble
var x6 = 400;
var y6 = 300;

var moveUpr;
var moveUpg;
var moveUpy;
var moveUppu;
var moveRightb;
var moveRightp;
var moveRighty;
var moveRightpu;

function setup() {
  createCanvas(800, 600); 
  moveUp = false;
}

function draw() {
  background(255,233,236);
  
  //blue bubble
  fill(0,0,205);
  ellipse(x1,y1,150,150);
  
  //green bubble
  fill(50,205,50);
  ellipse(x2, y2, 95, 95);
  
  //pink bubble
  fill(255,0,255);
  ellipse(x3, y3, 100, 100);
  
  //yellow bubble
  fill(255,255,0);
  ellipse(x4, y4, 115, 115);
  
  //purple bubble
  fill(148,0,211);
  ellipse(x5, y5, 90, 90);
  
  //red bubble
  fill(255,0,0);
  ellipse(x6, y6, 100, 100);

  //drop at 3* speed
  y5 += 3;  

  //BLUE BUBBLE
  
  //move vertically at 2*speed but stay inside canvas
  if (moveRightb) {
    x1 -= 3;
  } else {
    x1 += 3;
  }
  
  //change direction if reach bottom
  if (x1 > width - 75) { //width - ball radius of 50
    moveRightb = true;
  }
  //change direction if reached top
  if (x1 < 50) { //0 + ball radius of 50
    moveRightb = false;
  }
  
  //GREEN BUBBLE
  //move up at 4*speed but stay inside canvas
  if (moveUpg) {
      y2 -= 4;
    } else {
      y2 += 4;
    }
  //change direction if reached bottom
  if (y2 > height - 50) { //height - ball radius of 50
  moveUpg = true;
  }
  //change direction if reached top
  if (y2 < 50) { //0 + ball radius of 50
  moveUpg = false;
  }
  
  //PINK BUBBLE
  //move vertically at 5*speed but stay inside the canvas
  if (moveRightp) {
    x3 -= 5;
  } else {
    x3 += 5;
  }
  //change direction if reached bottom
  if (x3 > width - 50) { //height - ball radius of 50
    moveRightp = true;
  }
  //change direction if reached top
  if (x3 < 50) {  //0 + ball radius of 50
    moveRightp = false;
  }

  //YELLOW BUBBLE
  //move vertically at 4* speed but stay inside canvas
  if (moveUpy) {
      y4 -= 4;
    } else {
      y4 += 4;
    }
//change direction if reached bottom
  if (y4 > height - 50) { //height - ball radius of 50
  moveUpy = true;
  }
  //change direction if reached top
  if (y4 < 50) { //0 + ball radius of 50
  moveUpy = false;
  }

  //move vertically at 2*speed but stay inside canvas
  if (moveRighty) {
    x4 -= 2;
  } else {
    x4 += 2;
  }
  //change direction if reach bottom
  if (x4 > width - 50) { //width - ball radius of 50
    moveRighty = true;
  }
  //change direction if reached top
  if (x4 < 50) { //0 + ball radius of 50
    moveRighty = false;
  }
  
  //PURPLE BUBBLE
  //move vertically at 8* speed but stay inside canvas
  if (moveUppu) {
      y5 -= 8;
    } else {
      y5 += 8;
    }
//change direction if reached bottom
  if (y5 > height - 50) { //height - ball radius of 50
  moveUppu = true;
  }
  //change direction if reached top
  if (y5 < 50) { //0 + ball radius of 50
  moveUppu = false;
  }

  //move vertically at 4*speed but stay inside canvas
  if (moveRightpu) {
    x5 -= 4;
  } else {
    x5 += 4;
  }
  //change direction if reach bottom
  if (x5 > width - 50) { //width - ball radius of 50
    moveRightpu = true;
  }
  //change direction if reached top
  if (x5 < 50) { //0 + ball radius of 50
    moveRightpu = false;
  }
  
  //RED BUBBLE
  //move vertically at 3*speed but stay inside the canvas
  if (moveUpr) {
    y6 -= 3;
  } else {
    y6 += 3;
  }
  //change direction if reached bottom
  if (y6 > height - 50) { //height - ball radius of 50
    moveUpr = true;
  }
  //change direction if reached top
  if (y6 < 50) {  //0 + ball radius of 50
    moveUpr = false;
  }
}