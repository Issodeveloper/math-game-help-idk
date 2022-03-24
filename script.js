let answer;
let elementOne;
let elementTwo;
let answered = 1;
let howManyQuestions = 15;
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;
let finalTime;
let isDarktime = true;
const question = document.getElementById('question');
const beginningUI = document.getElementById('beginningUI');
const inputAnswer = document.getElementById('inputAnswer');


function start(){
    beginningUI.style.display = 'none';
    question.style.display = 'block';
    inputAnswer.style.display = 'block';
    document.getElementById('questionTrack').style.display = 'block';
    document.getElementById('questionTrack').innerHTML = '1/' + howManyQuestions;
    document.getElementById('stopwatch').style.display = 'block';

    startTimer();

    generate();

    inputAnswer.onkeyup = function() {
        if (this.value == answer) {
            if(answered >= howManyQuestions + 1){
                stop();
                stopTimer();
            }
            generate();
            inputAnswer.value = '';
            answered++;
        }
    };
}


function generate() {
  document.getElementById('questionTrack').innerHTML = answered + '/' + howManyQuestions

  switch(Math.floor(Math.random() * 3) + 1) {
    case 1:
        elementOne = Math.floor(Math.random() * 50) + 1;
        elementTwo = Math.floor(Math.random() * elementOne) + 1;
        question.innerHTML = elementOne.toString() + ' + ' + elementTwo.toString();
        answer = elementOne + elementTwo;
        break;
    case 2:
        elementOne = Math.floor(Math.random() * 50) + 1;
        elementTwo = Math.floor(Math.random() * elementOne) + 1;
        question.innerHTML = elementOne.toString() + ' - ' + elementTwo.toString();
        answer = elementOne - elementTwo;
        break;
    case 3:
        elementOne = Math.floor(Math.random() * 10) + 1;
        elementTwo = Math.floor(Math.random() * 10) + 1;
        question.innerHTML = elementOne.toString() + ' x ' + elementTwo.toString();
        answer = elementOne * elementTwo;
        break; 
    }
}

function stop(){
    question.style.display = 'none';
    inputAnswer.style.display = 'none';
    document.getElementById('questionTrack').style.display = 'none';
    document.getElementById('stopwatch').style.display = 'none';
    document.getElementById('endingText').style.display = 'block';
    document.getElementById('scoreText').style.display = 'block';

    document.getElementById('scoreText').innerHTML = 'Your final time was ' + finalTime;
}

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    document.getElementById('stopwatch').innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 10);

    finalTime = hr + ':' + min + ':' + sec;
  }
}