function preload(){}

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background("black");  
 rect(150,250,100,125);
  fill("white");
rect(25,100,30,300);
fill("red");
rect(55,250,70,150);
fill("white");
rect(125,200,150,225);
fill("red");
rect(275,250,70,150);
fill("white");
rect(345,100,30,300);
fill("red");
triangle(25,100,40,70,55,100);
triangle(125,200,200,50,275,200);
triangle(345,100,360,70,375,100);
}