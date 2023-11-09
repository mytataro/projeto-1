function setup() {
    createCanvas(400, 400);
    background("beige");
  }
  
  function draw() {
    stroke("black");
    fill("white");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  