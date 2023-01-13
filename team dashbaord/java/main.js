/* https://www.w3schools.com/howto/howto_js_sidenav.asp side nav bar */
function show() {
  document.getElementById('sidebar').classList.toggle('active');


}
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
