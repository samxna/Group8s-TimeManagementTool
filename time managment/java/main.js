/* https://www.w3schools.com/howto/howto_js_sidenav.asp side nav bar */
const form = document.getElementById("adding-activity");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // This gets the selected time and day the user inputted.
  const time = form.elements.time.value;
  const day = form.elements.day.value;
  // This gets the activity that the user inputted.
  const activity = form.elements.activity.value;


  const cellId = day.toLowerCase() + "-" + time.split(":")[0];
  // This gets the cell element through the id.
  const cell = document.getElementById(cellId);

  cell.innerHTML = activity;
});
function show() {
  document.getElementById('sidebar').classList.toggle('active');


}
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
