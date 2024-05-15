function showQuestion(){
function generateMathQuestion() {
	
  var operators = ['+', '-', '*', '/'];
  var operator = operators[Math.floor(Math.random() * operators.length)];
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var question = num1 + " " + operator + " " + num2 + " = ?";
  var correctAnswer, incorrectAnswer1, incorrectAnswer2;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = num1 / num2;
      break;
  }

   do {
    incorrectAnswer1 = correctAnswer + Math.floor(Math.random() * 5) + 2;
  } while (incorrectAnswer1 === correctAnswer);
  
  do {
    incorrectAnswer2 = correctAnswer - Math.floor(Math.random() * 4) + 1;
  } while (incorrectAnswer2 === correctAnswer || incorrectAnswer2 === incorrectAnswer1 || incorrectAnswer2 === incorrectAnswer1);

  return {
    question: question,
    correctResponse: correctAnswer,
    incorrectResponse1: incorrectAnswer1,
    incorrectResponse2: incorrectAnswer2
  };
}
var player = GetPlayer();
var setVar = player.SetVar;
var mathQuestion = generateMathQuestion();
setVar("question","Q: " + mathQuestion.question);
setVar("incorrectResponse1", mathQuestion.incorrectResponse1);
setVar("incorrectResponse2", mathQuestion.incorrectResponse2);
setVar("correctResponse", mathQuestion.correctResponse);
}

var BTNSound = document.getElementById("BTNsound"); 
var BGsound = document.getElementById("BGmusic"); 
var CorrectSound = document.getElementById("Correct"); 
var IncorrectSound = document.getElementById("Incorrect"); 
var DiceSound = document.getElementById("Dice"); 
var CardSound = document.getElementById("Card"); 
var FighterSound = document.getElementById("Fighter"); 

function pride(){confetti({
  particleCount: 50,
  spread: 70,
  origin: { y: 0.6 },
});}

function clickSound(){
	
	BTNSound.currentTime = 0;
	BTNSound.play();
	
}
function Correctsound(){
	
	pride();
	CorrectSound.currentTime = 0;
	CorrectSound.play();
	
	
}
function Incorrectsound(){

	IncorrectSound.currentTime = 0;
	IncorrectSound.play();
	
}
function cardSound(){
	
	CardSound.currentTime = 0;
	CardSound.play();
	
}
function fighterSound(){
	
	FighterSound.currentTime = 0;
	FighterSound.play();	
}
function diceSound(){
	
	DiceSound.currentTime = 0;
	DiceSound.play();	
}
function mute(){
	
	BGsound.volume = 0;

}
function unmute(){
	
  BGsound.volume = 1;
	// Play the audio
  BGsound.play();

  // When the audio ends, replay it
  BGsound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);	
	
}



function fireworks(){
const duration = 5 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

 
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}
window.InitUserScripts = function()
{
var player = GetPlayer();
var setVar = player.SetVar;
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function addJsPDF(callback) {
  if (typeof jsPDF === 'undefined') {
    var confettiScript = document.createElement('script');
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js';
    confettiScript.async = true;
    confettiScript.onload = callback;
    document.head.appendChild(confettiScript);
  } else {
    callback();
  }
}
addJsPDF();

}

window.Script2 = function()
{
  clickSound();
}

window.Script3 = function()
{
  clickSound();
}

window.Script4 = function()
{
  unmute();
}

window.Script5 = function()
{
  clickSound();
}

window.Script6 = function()
{
  mute();
}

window.Script7 = function()
{
  unmute();
}

window.Script8 = function()
{
  clickSound();
}

window.Script9 = function()
{
  clickSound();
}

window.Script10 = function()
{
  clickSound();
}

window.Script11 = function()
{
  clickSound();
}

window.Script12 = function()
{
  mute();
}

window.Script13 = function()
{
  unmute();
}

window.Script14 = function()
{
  fighterSound();
}

window.Script15 = function()
{
  fighterSound();
}

window.Script16 = function()
{
  mute();
}

window.Script17 = function()
{
  unmute();
}

window.Script18 = function()
{
  clickSound();
}

window.Script19 = function()
{
  clickSound();
}

window.Script20 = function()
{
  clickSound();
}

window.Script21 = function()
{
  clickSound();
}

window.Script22 = function()
{
  mute();
}

window.Script23 = function()
{
  unmute();
}

window.Script24 = function()
{
  fighterSound();
}

window.Script25 = function()
{
  diceSound();
}

window.Script26 = function()
{
  fighterSound();
}

window.Script27 = function()
{
  mute();
}

window.Script28 = function()
{
  unmute();
}

window.Script29 = function()
{
  clickSound();
}

window.Script30 = function()
{
  Incorrectsound();
}

window.Script31 = function()
{
  Correctsound();
}

window.Script32 = function()
{
  Correctsound();
}

window.Script33 = function()
{
  showQuestion();
}

window.Script34 = function()
{
  clickSound();
}

window.Script35 = function()
{
  showQuestion();
}

window.Script36 = function()
{
  clickSound();
}

window.Script37 = function()
{
  clickSound();
}

window.Script38 = function()
{
  clickSound();
}

window.Script39 = function()
{
  mute();
}

window.Script40 = function()
{
  unmute();
}

window.Script41 = function()
{
  mute();
}

window.Script42 = function()
{
  unmute();
}

window.Script43 = function()
{
  clickSound();
}

window.Script44 = function()
{
  clickSound();
}

window.Script45 = function()
{
  clickSound();
}

window.Script46 = function()
{
  clickSound();
}

window.Script47 = function()
{
  mute();
}

window.Script48 = function()
{
  unmute();
}

window.Script49 = function()
{
  fighterSound();
}

window.Script50 = function()
{
  diceSound();
}

window.Script51 = function()
{
  mute();
}

window.Script52 = function()
{
  unmute();
}

window.Script53 = function()
{
  clickSound();
}

window.Script54 = function()
{
  Incorrectsound();
}

window.Script55 = function()
{
  Correctsound();
}

window.Script56 = function()
{
  showQuestion();
}

window.Script57 = function()
{
  clickSound();
}

window.Script58 = function()
{
  showQuestion();
}

window.Script59 = function()
{
  clickSound();
}

window.Script60 = function()
{
  clickSound();
}

window.Script61 = function()
{
  clickSound();
}

window.Script62 = function()
{
  mute();
}

window.Script63 = function()
{
  unmute();
}

window.Script64 = function()
{
  mute();
}

window.Script65 = function()
{
  unmute();
}

window.Script66 = function()
{
  clickSound();
}

window.Script67 = function()
{
  clickSound();
}

window.Script68 = function()
{
  clickSound();
}

window.Script69 = function()
{
  clickSound();
}

window.Script70 = function()
{
  mute();
}

window.Script71 = function()
{
  unmute();
}

window.Script72 = function()
{
  fighterSound();
}

window.Script73 = function()
{
  diceSound();
}

window.Script74 = function()
{
  mute();
}

window.Script75 = function()
{
  unmute();
}

window.Script76 = function()
{
  clickSound();
}

window.Script77 = function()
{
  Incorrectsound();
}

window.Script78 = function()
{
  Correctsound();
}

window.Script79 = function()
{
  showQuestion();
}

window.Script80 = function()
{
  clickSound();
}

window.Script81 = function()
{
  showQuestion();
}

window.Script82 = function()
{
  clickSound();
}

window.Script83 = function()
{
  clickSound();
}

window.Script84 = function()
{
  clickSound();
}

window.Script85 = function()
{
  mute();
}

window.Script86 = function()
{
  unmute();
}

window.Script87 = function()
{
  mute();
}

window.Script88 = function()
{
  unmute();
}

window.Script89 = function()
{
  clickSound();
}

window.Script90 = function()
{
  clickSound();
}

window.Script91 = function()
{
  clickSound();
}

window.Script92 = function()
{
  clickSound();
}

window.Script93 = function()
{
  mute();
}

window.Script94 = function()
{
  unmute();
}

window.Script95 = function()
{
  fighterSound();
}

window.Script96 = function()
{
  diceSound();
}

window.Script97 = function()
{
  mute();
}

window.Script98 = function()
{
  unmute();
}

window.Script99 = function()
{
  clickSound();
}

window.Script100 = function()
{
  Incorrectsound();
}

window.Script101 = function()
{
  Correctsound();
}

window.Script102 = function()
{
  showQuestion();
}

window.Script103 = function()
{
  clickSound();
}

window.Script104 = function()
{
  showQuestion();
}

window.Script105 = function()
{
  clickSound();
}

window.Script106 = function()
{
  clickSound();
}

window.Script107 = function()
{
  clickSound();
}

window.Script108 = function()
{
  mute();
}

window.Script109 = function()
{
  unmute();
}

window.Script110 = function()
{
  mute();
}

window.Script111 = function()
{
  unmute();
}

window.Script112 = function()
{
  clickSound();
}

window.Script113 = function()
{
  clickSound();
}

window.Script114 = function()
{
  clickSound();
}

window.Script115 = function()
{
  clickSound();
}

window.Script116 = function()
{
  mute();
}

window.Script117 = function()
{
  unmute();
}

window.Script118 = function()
{
  fighterSound();
}

window.Script119 = function()
{
  diceSound();
}

window.Script120 = function()
{
  mute();
}

window.Script121 = function()
{
  unmute();
}

window.Script122 = function()
{
  clickSound();
}

window.Script123 = function()
{
  Incorrectsound();
}

window.Script124 = function()
{
  Correctsound();
}

window.Script125 = function()
{
  showQuestion();
}

window.Script126 = function()
{
  clickSound();
}

window.Script127 = function()
{
  showQuestion();
}

window.Script128 = function()
{
  clickSound();
}

window.Script129 = function()
{
  clickSound();
}

window.Script130 = function()
{
  clickSound();
}

window.Script131 = function()
{
  mute();
}

window.Script132 = function()
{
  unmute();
}

window.Script133 = function()
{
  mute();
}

window.Script134 = function()
{
  unmute();
}

window.Script135 = function()
{
  clickSound();
}

window.Script136 = function()
{
  clickSound();
}

window.Script137 = function()
{
  clickSound();
}

window.Script138 = function()
{
  clickSound();
}

window.Script139 = function()
{
  mute();
}

window.Script140 = function()
{
  unmute();
}

window.Script141 = function()
{
  fighterSound();
}

window.Script142 = function()
{
  diceSound();
}

window.Script143 = function()
{
  fighterSound();
}

window.Script144 = function()
{
  mute();
}

window.Script145 = function()
{
  unmute();
}

window.Script146 = function()
{
  clickSound();
}

window.Script147 = function()
{
  Incorrectsound();
}

window.Script148 = function()
{
  Correctsound();
}

window.Script149 = function()
{
  showQuestion();
}

window.Script150 = function()
{
  clickSound();
}

window.Script151 = function()
{
  showQuestion();
}

window.Script152 = function()
{
  clickSound();
}

window.Script153 = function()
{
  clickSound();
}

window.Script154 = function()
{
  clickSound();
}

window.Script155 = function()
{
  mute();
}

window.Script156 = function()
{
  unmute();
}

window.Script157 = function()
{
  mute();
}

window.Script158 = function()
{
  unmute();
}

window.Script159 = function()
{
  clickSound();
}

window.Script160 = function()
{
  clickSound();
}

window.Script161 = function()
{
  clickSound();
}

window.Script162 = function()
{
  clickSound();
}

window.Script163 = function()
{
  mute();
}

window.Script164 = function()
{
  unmute();
}

window.Script165 = function()
{
  fighterSound();
}

window.Script166 = function()
{
  diceSound();
}

window.Script167 = function()
{
  mute();
}

window.Script168 = function()
{
  unmute();
}

window.Script169 = function()
{
  clickSound();
}

window.Script170 = function()
{
  fireworks();
}

window.Script171 = function()
{
  clickSound();
}

window.Script172 = function()
{
  clickSound();
}

window.Script173 = function()
{
  clickSound();
}

window.Script174 = function()
{
  clickSound();
}

window.Script175 = function()
{
  clickSound();
}

window.Script176 = function()
{
  clickSound();
}

window.Script177 = function()
{
  clickSound();
}

window.Script178 = function()
{
  mute();
}

window.Script179 = function()
{
  unmute();
}

};
