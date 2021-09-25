// use moment.js to show current time/date info for top of page
// for workday hours (9-5) place bootstrap objects/containers going down the page
// box needs to change color depending on time (grey for past, red preset, green future)
// each timeblock has a text box where I can enter information that needs to be done in that hour
// There is a save button to the right of those things, when button is clicked then it saves the text to local storage

var dateDisplay = $('#currentDay');
var saveButton = $('.saveBtn');
var inputText = $('.description');
var timeBox = $('.hour');
var textArea = $('textarea');



// this might be a bad idea?
var hourArray = [9, 10, 11, 12, 1, 2 ,3 ,4 ,5]

// function displayHour () {
//   for (var i = 0; i < hourArray.length; i++) {
//     timeBox.textContent = hourArray[i] + "AM";
//   }
// }

function init() {
  timeGet();
}

function timeGet () {
  var currentDate = moment().format("dddd, MMMM Do");
  $(dateDisplay).text(currentDate);
}

function saveText () {
// allows the save button to apply the text to the html element and save it to local storage
}

function rememberText () {
// remembers the text from previous session and autofills it
}

function calendarStatus () {
  var verifyHour = moment().format('h');
  var verifyNightDay = moment().format('a');

  if (verifyNightDay == "am") {
    // if (verifyHour == )
  } else {
    $(textarea).attr("class", "past");
  }
  console.log(verifyNightDay);
  // looks at the time of day and marks the text area of each box gray, red, green based on the hour
  // perhaps use moment.js moment.format('h'); to color boxes?
}

init();
calendarStatus();
