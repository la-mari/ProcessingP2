console.log("js page linked");
var x = 0;

function setup() {
	createCanvas(600, 600);
}



function draw(){
	background(255);
	// for(var i=0; i<width; i++){
	// 	//to produce gradient
	// 	//stroke takes value between 0-255
	// 	stroke(i/width * 255); 
	// 	line(i, 0, i, height);
	// }

	for (var i=0; i<width; i+=50){
		for (var j=0; j<height; j+=50){
			ellipse(i, j, 20, 20);
		}
	}
}