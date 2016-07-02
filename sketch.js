console.log("js page linked");

var option = 1;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
}



function draw(){
	background(255);
	// for(var i=0; i<width; i++){
	// 	//to produce gradient
	// 	//stroke takes value between 0-255
	// 	stroke(i/width * 255); 
	// 	line(i, 0, i, height);
	// }

	if(option==1){
		for (var x=50; x<=width-50; x+=50){
			for (var y=50; y<=height-50; y+=50){
		//grid of X's
			line(x-5, y-5, x+5, y+5);
			line(x+5, y-5, x-5, y+5);
			}
		}
	}

	else if(option==2){
		// var count = 0;
		for (var x=50; x<=width-50; x+=50){
			for (var y=50; y<=height-50; y+=50){
				//vanishing point
				// strokeWeight(count*0.02);
				line(x, y, width/2, height/2);
				// count++;
			}
		}
	}

	else if(option==3){
		for (var x=50; x<=width-50; x+=50){
			for (var y=50; y<=height-50; y+=50){
				ellipse(x, y, 40, 40);
			}
		}
	}
}

function mousePressed(){
	console.log(option);
	option++;
	if(option > 6){
		option =1;
	}
}