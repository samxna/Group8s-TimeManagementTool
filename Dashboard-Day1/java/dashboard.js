//https://www.youtube.com/watch?v=PkZNo7MFNFg&t=429s
// Reference to the form in the HTML file.
/* https://www.w3schools.com/howto/howto_js_sidenav.asp side nav bar */
const form = document.querySelector('form');
// References to both canvas elements in the HTML.
const canvas = document.querySelector('#myChart');
const chart2Canvas = document.querySelector('#chart2');

// Declaring the variables that will hold input values.
let homeworkHours = 0;
let extraStudyHours = 0;
let hobbiesHours = 0;
let sportsHours = 0;
let socialActivityHours = 0;
let breaksHours = 0;

// Add an event listener so that the form can be submitted.
form.addEventListener('submit', (event) => {

  event.preventDefault();

  // This gets the values of the form inputs.
  const homeworkInput = document.querySelector('#homework');
  const extraStudyInput = document.querySelector('#extra-study');
  const hobbiesInput = document.querySelector('#hobbies');
  const sportsInput = document.querySelector('#sports');
  const socialActivityInput = document.querySelector('#social-activity');
  const breaksInput = document.querySelector('#breaks');

  // This converts the input values into integers.
  homeworkHours = parseInt(homeworkInput.value, 10);
  extraStudyHours = parseInt(extraStudyInput.value, 10);
  hobbiesHours = parseInt(hobbiesInput.value, 10);
  sportsHours = parseInt(sportsInput.value, 10);
  socialActivityHours = parseInt(socialActivityInput.value, 10);
  breaksHours = parseInt(breaksInput.value, 10);

  // Total hours spend on activities.
  const totalHours = homeworkHours + extraStudyHours + hobbiesHours + sportsHours + socialActivityHours + breaksHours;

const messageDiv = document.createElement('div');
messageDiv.innerHTML = 'Based on the hours you spent on these activities, here is your very own dashboard: ';

messageDiv.id = 'message';
document.body.insertBefore(messageDiv, canvas);


  const chart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels: ['Homework', 'Extra Study', 'Hobbies', 'Sports', 'Social Activities', 'Breaks'],
      datasets: [{
        data: [homeworkHours, extraStudyHours, hobbiesHours, sportsHours, socialActivityHours, breaksHours],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#00FF00', '#0000FF', '#FFFF00'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#00FF00', '#0000FF', '#FFFF00'],
      }],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      aspectRatio: 1.5/1, // width:height
      title: {
        display: true,
        text: `Total Hours: ${totalHours}`,
      },
    },
  });

  const chart2 = new Chart(chart2Canvas, {
    type: 'bar',
    data: {
      labels: ['Homework', 'Extra Study', 'Hobbies', 'Sports', 'Social Activities', 'Breaks'],
      datasets: [{
        label: null,
        data: [homeworkHours, extraStudyHours, hobbiesHours, sportsHours, socialActivityHours, breaksHours],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E7E9ED', '#F9CB9C'],
        borderColor: 'rgba(0, 0, 0, 0)'  // This removes the border colour from the bars.
      }]
    },
    options: {
      legend: {
        display: false  // This removes the legend from the chart.
      },
      responsive: false,
      maintainAspectRatio: false,
      aspectRatio: 1.5 / 1,
      title: {
        display: true,
        text: 'Hours Spent on Activities'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
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
