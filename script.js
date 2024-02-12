function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(255, 160, 255);
  // add your drawing code here ...
  //Ears
  stroke(255, 160, 255);
  arc(225, 120, 100, 100, HALF_PI, TWO_PI);
  arc(375, 120, 100, 100, PI, HALF_PI);
  stroke(252, 137, 185);
  fill(252, 137, 185);
  ellipse(225, 120, 75);
  ellipse(375, 120, 75);
  //Face
 fill(222, 44, 147);
  ellipse(300, 200, 175);
  //eyes
  stroke(0);
  ellipse(250, 190, 50);
  ellipse(350, 190, 50);

  
 


}