console.log("js page linked");

var option = 1;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
}



function draw(){
	background(255);
	var density = map(mouseX, 0, width, 20, 50);
	var density2 = map(mouseY, 0, width, 20, 200);
	// for(var i=0; i<width; i++){
	// 	//to produce gradient
	// 	//stroke takes value between 0-255
	// 	stroke(i/width * 255); 
	// 	line(i, 0, i, height);
	// }

	if(option==1){
		for (var x=50; x<=width-50; x+=density){
			for (var y=50; y<=height-50; y+=density2){
		//grid of X's
			line(x-5, y-5, x+5, y+5);
			line(x+5, y-5, x-5, y+5);
			}
		}
	}

	else if(option==2){
		// var count = 0;
		for (var x=50; x<=width-50; x+=density){
			for (var y=50; y<=height-50; y+=density2){
				//vanishing point
				// strokeWeight(count*0.02);
				line(x, y, width/2, height/2);
				// count++;
			}
		}
	}

	else if(option==3){
		for (var x=50; x<=width-50; x+=density){
			for (var y=50; y<=height-50; y+=density2){
				ellipse(x, y, 40, 40);
			}
		}
	}

	else if(option==4){
		for (var x=50; x<=width-50; x+=density){
			for (var y=50; y<=height-50; y+=density2){
				for (var i=0; i<16; i+=4){
					line(x+i, y, x+i, y+12);
				}
				line(x, y, x+12, y+12);
			}
		}
	}

	else if(option==5){
		var count = 0;
		for (var x=50; x<=width-50; x+=density){
			for (var y=50; y<=height-50; y+=density2){
				strokeWeight(count*0.02);
				ellipse(x, y, 20, 20);
				count++;
			}
		}
	}

	else if(option==6){
	w = width/1024;
	h = height/768;
	noStroke();
	background(209, 255, 45);

	//leftdino
	beginShape();
	fill(255, 191, 0);
	vertex(100*w, 240*h);
	vertex(200*w, 180*h);
	vertex(220*w, 120*h);
	vertex(160*w, 40*h);
	vertex(420*w, 120*h);
	vertex(320*w, 160*h);
	vertex(400*w, 180*h);
	vertex(280*w, 200*h);
	vertex(260*w, 240*h);
	endShape();
	fill(255, 255, 255);
	ellipse (305*w, 118*h, 40*w, 20*h);
	fill(0);
	ellipse(310*w, 120*h, 16*w, 16*h);

	// rightdino
	fill(0, 182, 255);
	beginShape();
	vertex(740*w, 240*h);
	vertex(720*w, 180*h);
	vertex(580*w, 160*h);
	vertex(680*w, 140*h);
	vertex(500*w, 100*h);
	vertex(840*w, 20*h);
	vertex(780*w, 100*h);
	vertex(820*w, 180*h);
	vertex(920*w, 240*h);
	endShape();
	fill(255, 255, 255);
	ellipse(695*w, 93*h, 20*w, 30*h)
	fill(0)
	ellipse(693*w, 101*h, 16*w, 16*h)
	}
}

function mousePressed(){
	console.log(option);
	option++;
	if(option > 6){
		option =1;
	}
}