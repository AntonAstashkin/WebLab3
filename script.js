const timerInput = document.getElementById('timer-input');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const countdownEl = document.getElementById('countdown');
let countdownInterval;

function startCountdown() {
  const time = timerInput.value.split('.');
  let seconds = (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2]);
  
  countdownInterval = setInterval(() => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    countdownEl.innerText = `${hours.toString().padStart(2, '0')}.${minutes.toString().padStart(2, '0')}.${secs.toString().padStart(2, '0')}`;
    
    if (seconds === 0) {
      clearInterval(countdownInterval);
    } else {
      seconds--;
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
  countdownEl.innerText = '00.00.00';
}

startBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown);
