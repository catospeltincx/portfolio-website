let cx1, cy1, ax1, ax2, tx1, ty2, ox1, oy2, bolx1, boly1, bolx2, boly2;

function setup() {
  let cnv1 = createCanvas(321, 208);
  cnv1.position(25, 25);
  textSize(18);
  frameRate(1);
}

function draw() {
  //steeds 5px meer geven
  cx1 = random(75, 80);
  cy1 = random(9, 100);

  ax1 = random(151, 156);
  ay1 = random(150, 198);

  tx1 = random(161, 166);
  ty1 = random(9, 50);

  ox1 = random(236, 242);
  oy1 = random(100, 200);

  bolx1 = random(110, 120);
  boly1 = random(100, 125);

  bolx2 = random(265, 285);
  boly2 = random(30, 170);

  background(6, 160, 88);
  //C
  noFill(0);
  stroke(0);
  beginShape();
  //vertex(75, 9);
  vertex(cx1, cy1);
  vertex(28, 9);
  vertex(9, 66);
  vertex(9, 142);
  vertex(28, 198);
  vertex(75, 198);
  endShape(CLOSE);

  //A
  beginShape();
  vertex(132, 9);
  vertex(104, 9);
  vertex(85, 142);
  vertex(85, 198);
  //vertex(151, 198);
  vertex(ax1, ay1);
  vertex(151, 142);
  endShape(CLOSE);

  //T
  beginShape();
  vertex(227, 9);
  //vertex(161, 9);
  vertex(tx1, ty1);
  vertex(161, 66);
  vertex(180, 198);
  vertex(208, 198);
  vertex(227, 66);
  endShape(CLOSE);

  //O
  beginShape();
  vertex(293, 9);
  vertex(258, 9);
  vertex(236, 66);
  //vertex(236, 141);
  vertex(ox1, oy1);
  vertex(258, 198);
  vertex(293, 198);
  vertex(312, 142);
  vertex(312, 66);
  endShape(CLOSE);

  //bol1
  noStroke();
  fill(0);
  ellipse(bolx1, boly1, 30, 30);

  //bol2
  ellipse(bolx2, boly2, 30, 30);
}
