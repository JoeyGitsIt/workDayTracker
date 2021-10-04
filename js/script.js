var dateDisplay = $('#currentDay');
var saveButton = $('.saveBtn');
var textArea = $('textarea');
var hourArray = $('.row');

function init() {
  timeGet();
  calendarStatus();
  renderText();
}

function timeGet () {
  var currentDate = moment().format("dddd, MMMM Do");
  $(dateDisplay).text(currentDate);
}

function saveText (event) {
  var placeInHTML = Array.from(saveButton).indexOf(event.target);
  localStorage.setItem(placeInHTML, textArea[placeInHTML].value);
}

function renderText () {
  for (var key in localStorage) {
    $(textArea[key]).text(localStorage[key]) 
  }
}

function calendarStatus () {
  var timeGet = moment().format();
  var verifyHour = timeGet.slice(11,13);
  var getTimeInt = parseInt(verifyHour);

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

saveButton.click(saveText);