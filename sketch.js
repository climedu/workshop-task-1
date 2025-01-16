function setup() {
	  createCanvas(400, 400);
	  background(255, 253, 208);
	  angleMode(DEGREES);
	  let centerY = height / 2; // Center of the canvas
	
	  // Organized version with color alternation
	  for (let i = 0; i < 9; i++) {
	    let x = i * 50; // Calculate the x position
	    let colorChoice = (i % 2 === 0) ? color("green") : color("red"); // Alternate colors
	    geometry(x, centerY, random(50, 150), colorChoice);
	  }
	}
	
	function draw() {}
	
	function geometry(x, y, size, whatever) {
	  fill(whatever); // Set the fill color
	  noStroke();
	
	  //lower rect
	  rect(x,225, 50, size);
	  //upper rect
	  rect(x,225 - 50 - size,50, size);
	  //upper half circle
	  arc(x + 25, 225 -50, 50,50,0,180);
	  //lower half circle
	  arc(x+25, 225, 50,50,180,0);
      
	  
}