var level;
var check_level;
var letter;
var answer;
var score;
//var inner_text = "";
var random = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
//소문자 0~25 대문자 26~51 숫자 52~61
var range = new Array("25", "51", "61");

var start, pause, stop; //control btn
var time;

function StartGame(){
	start = document.getElementById("start");
	pause = document.getElementById("pause");
	stop = document.getElementById("stop");

	start.disabled = true;
	pause.disabled = false;
	stop.disabled = false; 

	check_level = document.getElementsByName("level");

	//document.getElementById("level_radio").disabled = true;

	for(var i=0;i<check_level.length;i++){
		check_level[i].disabled = true;
		if(check_level[i].checked === true){
			level = check_level[i].value;
			//alert(level); 
		}
	}

	score = document.getElementById("score");
	score.innerHTML = "0";

	answer = document.getElementById("answer");
	document.getElementById("answer").focus();
	answer.readOnly = false;

	RunGame();
}

function RunGame(){
	letter = document.getElementById("letter"); 

	var rand_index = random[Math.round(Math.random()*range[level])];

	if(letter.innerHTML.length < 10){
		console.log(letter.innerHTML.length)
		//letter.innerHTML = inner_text + rand_index;
		//inner_text = letter.innerHTML;
		letter.innerHTML += rand_index;
		RangeCheck(); 
		time = setTimeout("RunGame()", 500);
	}else
		EndGame();
}

function EndGame(){
	level = undefined;
	//inner_text = "";
	letter.innerHTML = "";
	start.disabled = false;
	pause.disabled = true;
	stop.disabled = true;
	for(var i=0;i<check_level.length;i++)
		check_level[i].disabled = false;
	answer.value = "";
	answer.readOnly = true;
}

function RangeCheck(){
	console.log(answer.value);

	for(var i=0;i<range[level];i++){
		if(answer.value == random[i]){
			CompareLetter(random[i]);
			break;
		}
	}
	answer.value = "";
}

function CompareLetter(user_answer){
	//window.onkeydown = function(event){
		//console.log("keycode : "+event.keyCode);
	//}

	if(user_answer == letter.innerHTML.substring(0,1)){
		letter.innerHTML = letter.innerHTML.substring(1,letter.innerHTML.length-1);
		score.innerHTML = parseInt(score.innerHTML) + 10;
	}else
		score.innerHTML = parseInt(score.innerHTML) - 5;
}

function PauseGame(){
	start.disabled = false;
	pause.disabled = true;
	stop.disabled = false;
	answer.readOnly = true;
	clearTimeout(time);
}

function StopGame(){
	clearTimeout(time);
	EndGame();
}