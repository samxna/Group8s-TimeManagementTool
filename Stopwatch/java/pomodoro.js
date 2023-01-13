/* https://www.w3schools.com/howto/howto_js_sidenav.asp side nav bar */
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const hoursInput = document.querySelector('#hours');
const minutesInput = document.querySelector('#minutes');





const timer = document.querySelector('.timer');

let time = 0;
let running = false;
let stopped = false;

const interval = setInterval(updateTimer, 1000);

function updateTimer() {
  if (running && !stopped) {
    time--;

    if (time === 0) {
      stopTimer();
      playAudio(); // play audio when timer is finished
    }
  }

  timer.textContent = formatTime(time);
}

// Function for starting the timer.
function startTimer() {
  running = true;
  stopped = false;
}

// Function for stopping the timer.
function stopTimer() {
  running = false;
  stopped = true;
}

// Function for resetting the timer.
function resetTimer() {
  time = 0;
  timer.textContent = formatTime(time);
  running = false;
  stopped = false;
}

function setTimer() {
  // Get the values of the hours and minutes input fields
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);

  // Convert the hours and minutes to seconds
  time = hours * 60 * 60 + minutes * 60;

  // Update the timer display
  timer.textContent = formatTime(time);
}

function formatTime(time) {
  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

const audio = document.querySelector('#timer-up');

function playAudio() {
  audio.currentTime = 0; // reset audio to start
  audio.play();
}

if (time === 0) {
  playAudio();
}

resetButton.addEventListener('click', function() {
  audio.pause();
  resetTimer();
});



// This is allows the user to interact with the start button.
startButton.addEventListener('click', startTimer);

// This is allows the user to interact with the stop button.
stopButton.addEventListener('click', stopTimer);

// This is allows the user to interact with the reset button.
resetButton.addEventListener('click', resetTimer);

// This allows the user to set the timer using the hours and minutes input fields
hoursInput.addEventListener('change', setTimer);
minutesInput.addEventListener('change', setTimer);


function show() {
  document.getElementById('sidebar').classList.toggle('active');


}
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
