let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
let x = 5, y = 0, a=1, xSpeed = 1, ySpeed = 1, string="";

function draw(x, y){
	ctx.clearRect(0,0,800,300);
	ctx.fillStyle = "#1ea8ce";
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
}

function check(){
	if(x+xSpeed>canvas.width-10 || x+xSpeed<0){
		xSpeed = -xSpeed;
	}
	if(y+ySpeed>canvas.height-10 || y+ySpeed<0){
		ySpeed = -ySpeed;
	}
	x+=xSpeed;
	y+=ySpeed;
}

setInterval(function(){
	check();
	draw(x,y);
}, 5);
