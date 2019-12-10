var level;
var check_level;
var score;
var start, pause, stop; //control btn
var inTimer;
var start_count;
var fadeflag, restartflag;
var count_num;
var opac_level;
var earthworm, apple;
var direction = "right";

function StartGame(){
	start = document.getElementById("start");
	pause = document.getElementById("pause");
	stop = document.getElementById("stop");

	start.disabled = true;
	pause.disabled = false;
	stop.disabled = false; 

	check_level = document.getElementsByName("level");

	for(var i=0;i<check_level.length;i++){
		check_level[i].disabled = true;
		if(check_level[i].checked === true){
			level = check_level[i].value;
		}
	}

	score = document.getElementById("score");
	score.innerHTML = "0";

	fadeflag = 0;
	count_num = 3;
	opac_level = 0;

	start_count = document.getElementById("start_count");
	inTimer = setInterval("Count()",30);

	earthworm = document.getElementById("earthworm");
	earthworm.style.left = 10 + "px";
	earthworm.style.top = 280 + "px";

	apple = document.getElementById("apple");
	apple.style.left = 10 + "px";
	apple.style.top = 280 + "px";
}

function Count(){
	if(count_num > 0) start_count.innerHTML = count_num;
	else if(count_num == 0) start_count.innerHTML = "start";
	else{
		clearInterval(inTimer);
		RunGame();
	}

	if(fadeflag == 0) FadeIn();
	else FadeOut();
}

function FadeIn(){
	if(start_count.style.opacity>1)
		fadeflag = 1;
	else{
		opac_level += 0.1;
		start_count.style.opacity = opac_level;
	}
}

function FadeOut(){
	if(start_count.style.opacity<0){
		fadeflag = 0;
		count_num--;
	}
	else{
		opac_level -= 0.1;
		start_count.style.opacity = opac_level;
	}
}

function RunGame(){
	if(restartflag != 1)
		RandomApple();
	window.onkeydown = function(){SwitchEarthworm()};
	inTimer = setInterval("MoveEarthworm()", level);
}

function SwitchEarthworm(){
	if(event.keyCode == "37")
		direction = "left";
	else if(event.keyCode == "38")
		direction = "up";
	else if(event.keyCode == "39")
		direction = "right";
	else if(event.keyCode == "40")
		direction = "down";
}

function MoveEarthworm(){
	if(direction == "left"){
		//console.log("left "+earthworm.style.left+" "+earthworm.style.top);
		if(earthworm.style.left != "10px")
			earthworm.style.left = parseInt(earthworm.style.left) - 20+"px";
		else
			StopGame();
	}
	else if(direction == "up"){
		//console.log("up"+earthworm.style.left+" "+earthworm.style.top);
		if(earthworm.style.top != "280px")
			earthworm.style.top = parseInt(earthworm.style.top) - 20+"px";
		else
			StopGame();
	}
	else if(direction == "right"){
		//console.log("right"+earthworm.style.left+" "+earthworm.style.top);
		if(earthworm.style.left != "290px")
			earthworm.style.left = parseInt(earthworm.style.left) + 20+"px";
		else
			StopGame();
	}
	else if(direction == "down"){
		//console.log("down"+earthworm.style.left+" "+earthworm.style.top);
		if(earthworm.style.top != "560px")
			earthworm.style.top = parseInt(earthworm.style.top) + 20+"px";
		else
			StopGame();
	}
	EatApple();
}

function MakeEarthworm(){
	var img = document.createElement("img");
	img.src = "earthworm.png";

	document.getElementById("wormGroup").appendChild(img);
}

function RandomApple(){
	apple.style.top = Math.round(Math.random()*14+14)*2 + "0px";
	apple.style.left = Math.round(Math.random()*14+1)*2-1 + "0px";
}

function EatApple(){
	if(earthworm.style.top == apple.style.top && earthworm.style.left == apple.style.left){
		RandomApple();
		MakeEarthworm();
		score.innerHTML = parseInt(score.innerHTML) + 10;
	}
}

function EndGame(){
	level = undefined;
	start.disabled = false;
	pause.disabled = true;
	stop.disabled = true;
	direction = "right";

	for(var i=0;i<check_level.length;i++)
		check_level[i].disabled = false;

	start.onclick = function(){StartGame()};
}

function PauseGame(){
	start.disabled = false;
	pause.disabled = true;
	stop.disabled = false;
	clearInterval(inTimer);

	start.onclick = function(){Restart()};
}

function Restart(){

	start.disabled = true;
	pause.disabled = false;
	stop.disabled = false;

	fadeflag = 0;
	count_num = 3;
	opac_level = 0;
	restartflag = 1;

	start_count = document.getElementById("start_count");
	inTimer = setInterval("Count()",30);
}

function StopGame(){
	clearInterval(inTimer);
	EndGame();
}