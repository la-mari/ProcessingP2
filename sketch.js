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

	else if(option==4){
		for (var x=50; x<=width-50; x+=50){
			for (var y=50; y<=height-50; y+=50){
				for (var i=0; i<16; i+=4){
					line(x+i, y, x+i, y+12);
				}
				line(x, y, x+12, y+12);
			}
		}
	}

	else if(option==5){
		var count = 0;
		for (var x=50; x<=width-50; x+=50){
			for (var y=50; y<=height-50; y+=50){
				strokeWeight(count*0.02);
				ellipse(x, y, 20, 20);
				count++;
			}
		}
	}

	else if(option==6){
	background(209, 255, 45);

	//leftdino
	beginShape();
	fill(255, 191, 0);
	vertex(100, 240);
	vertex(200, 180);
	vertex(220, 120);
	vertex(160, 40);
	vertex(420, 120);
	vertex(320, 160);
	vertex(400, 180);
	vertex(280, 200);
	vertex(260, 240);
	endShape();
	fill(255, 255, 255);
	ellipse (305, 118, 40, 20);
	fill(0);
	ellipse(310, 120, 16, 16);

	// rightdino
	fill(0, 182, 255);
	beginShape();
	vertex(740, 240);
	vertex(720, 180);
	vertex(580, 160);
	vertex(680, 140);
	vertex(500, 100);
	vertex(840, 20);
	vertex(780, 100);
	vertex(820, 180);
	vertex(920, 240);
	endShape();
	fill(255, 255, 255);
	ellipse(695, 93, 20, 30)
	fill(0)
	ellipse(693, 101, 16, 16)
	}
}

function mousePressed(){
	console.log(option);
	option++;
	if(option > 6){
		option =1;
	}
}