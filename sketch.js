// Sketch 1
new p5((p) => {
  p.setup = function() {
      p.createCanvas(200, 100);
  };

  p.draw = function() {
      p.background('rgb(0,255,0)');
      p.ellipse(50, 50, 80, 80);
      p.rect(110, 8, 80, 80);
  };
}, 'sketch1-container');

// Sketch 2
new p5((p) => {
  p.setup = function() {
      p.createCanvas(1000, 200);
  };

  p.draw = function() {
      p.background(255);
      p.noStroke();

      p.fill(255, 169, 169, 153);
      p.ellipse(110, 60, 100, 100);

      p.fill(167, 255, 166, 153);
      p.ellipse(75, 125, 100, 100);

      p.fill(169, 168, 255, 153);
      p.ellipse(150, 125, 100, 100);
  };
}, 'sketch2-container');

new p5((p) => {
  p.setup = function() {
      p.createCanvas(200, 100);
  };

  p.draw = function() {
      p.background('#222222');
      p.fill('rgb(246,255,0)');
      p.arc(50, 50, 80, 80, 85.5, p.PI - p.QUARTER_PI, p.PIE);
      
      p.fill('rgb(255,0,0)');
      p.ellipse(150, 48, 80, 80);
      p.noStroke();
      p.rect(110, 50, 80, 40);
      
      p.ellipseMode(p.RADIUS);  
      p.fill(255);  
      p.ellipse(130, 48, 13, 13); 
      p.ellipse(170, 48, 13, 13);

      p.ellipseMode(p.CENTER);  
      p.fill('rgb(0, 0, 255)');  
      p.ellipse(130, 48, 15, 15);  
      p.ellipse(170, 48, 15, 15);
  };
}, 'sketch3-container');

// Sketch 4
new p5((p) => {
  p.setup = function() {
      p.createCanvas(200, 200);
  };

  p.star4 = function(x, y) {
      p.beginShape();
      p.vertex(x + 50, y - 10);
      p.vertex(x + 15, y + 5);
      p.vertex(x + 30, y + 40);
      p.vertex(x, y + 20);
      p.vertex(x - 30, y + 40);
      p.vertex(x - 15, y + 5);
      p.vertex(x - 48, y - 9);
      p.vertex(x - 10, y - 10);
      p.vertex(x, y - 50);
      p.vertex(x + 10, y - 10);
      p.endShape(p.CLOSE);
  };

  p.draw = function() {
      p.background('rgb(0, 0, 153)');
      p.strokeWeight(3);
      p.stroke(255, 255, 255);
      p.fill('rgb(0, 153, 0)');
      p.ellipse(100, 100, 100, 100);
      p.fill('rgb(255, 0, 0)');
      p.star4(100, 100); // Correctly calling star4 function
  };
}, 'sketch4-container');