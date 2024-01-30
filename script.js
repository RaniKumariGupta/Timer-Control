const timerDisplay = document.getElementById('timer');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const actionLog = document.getElementById('action-log');

let timerValue = 0;
let timerInterval;

function updateTimer() {
  if(timerValue <60){

    timerDisplay.textContent = timerValue + ' seconds';
  }else{
    
    timerDisplay.textContent = Math.floor(timerValue/60) +  ' minutes '+timerValue%60 +"seconds";
  }
}

function addToLog(action) {
  const logEntry = document.createElement('li');
  const currentTime = new Date().toLocaleTimeString();
  if(timerValue <60){

    logEntry.textContent = currentTime + ' - ' + action + ' to ' + timerValue + ' seconds';
  }else{
    logEntry.textContent = currentTime + ' - ' + action + ' to ' + Math.floor(timerValue/60) +  ' minutes '+timerValue%60 +" seconds";

  }
  actionLog.appendChild(logEntry);
}
function startTimer() {
  timerInterval = setInterval(function() {
    timerValue++;
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

increaseBtn.addEventListener('click', function() {
  timerValue += 10;
  addToLog('Increased timer by 10 seconds');
  updateTimer();
});

decreaseBtn.addEventListener('click', function() {
  if (timerValue >= 10) {
    timerValue -= 10;
    addToLog('Decreased timer by 10 seconds');
  } else {
    timerValue = 0;
    addToLog('Timer reset');
  }
  updateTimer();
});

resetBtn.addEventListener('click', function() {
  timerValue = 0;
  stopTimer();
  startTimer()
  addToLog('Timer reset');
  updateTimer();
});

startTimer(); 

