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
// var hourArray = ['9am', 10, 11, 12, 1, 2 ,3 ,4 ,5];

console.log
// function displayHour () {
//   for (var i = 0; i < hourArray.length; i++) {
//     timeBox.textContent = hourArray[i] + "AM";
//   }
// }

function init() {
  timeGet();
  calendarStatus();
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
  var timeGet = moment().format();
  var verifyHour = timeGet.slice(11,13);
  var getTimeInt = parseInt(verifyHour);
  var hourArray = $('.row');

  hourArray.each((_index, element) => {
    var timeEleText = element.children[0].innerHTML;
    var time = timeEleText.slice(0, timeEleText.length-2);
    var displayedTimeInt = parseInt(time);

    if (displayedTimeInt == getTimeInt || displayedTimeInt+12 == getTimeInt && displayedTimeInt <= 5) {
      element.children[1].classList.add("present");
    } 
    else if (displayedTimeInt >= 9 && displayedTimeInt < getTimeInt) {
      element.children[1].classList.add("past");
    }
    else if (displayedTimeInt <= 5 && displayedTimeInt+12 < getTimeInt) {
      element.children[1].classList.add("past");
    }
    else {
      element.children[1].classList.add("future");
    }
  });
}

init();
