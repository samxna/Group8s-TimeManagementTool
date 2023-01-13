/*Used this https://www.youtube.com/watch?v=49f1cjZWRJA to make the timer work.*/
/* https://www.w3schools.com/howto/howto_js_sidenav.asp side nav bar */
//Global Variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

//Event Listeners
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);

//Update the Time
function timer() {
  seconds++;

  //Format our timer
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - (hrs * 3600)) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = '0' + secs;
  if (mins < 10) mins = '0' + mins;
  if (hrs < 10) hrs = '0' + hrs;

  time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time_el.innerText = '00:00:00';
}

function reset(){
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00'
}
const cell = document.getElementById(cellId);

  cell.innerHTML = activity;
function show() {
  document.getElementById('sidebar').classList.toggle('active');

}


function show() {
  document.getElementById('sidebar').classList.toggle('active');


}
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
