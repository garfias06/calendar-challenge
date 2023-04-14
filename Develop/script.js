// variables/references for DOM Navigation
var displayTimeEl=$('#currentDay');
var saveBtn=$('.saveBtn');
// var textArea=$('<textarea>');
var timeBlock=$('.time-block');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  // Display current day at top of the calendar
  function currentDay() {
    var today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss A');
    displayTimeEl.text(today);
  };
  currentDay();
  setInterval(currentDay, 1000);
  
  console.log(this);
  // Save task to textArea (should I stringify? if not why)
  $(saveBtn).click(function(){
    var hourShift=$(this).parent().attr('id').split('hour-').join('');
    var textArea=$(this).siblings('.description').val();
    localStorage.setItem(hourShift, textArea);
  });
  // militarytime as an option 
  
  var mTime=dayjs().hour();
  console.log(mTime);
  // Comparing if time-block should be past, present or future.
  // var hoursNumber=parseInt($(this).parent().attr('id'));
  function timeBlockColor() {
    // Is there any other way to make this shorter?
    var hourShift=parseInt($(this).attr("id").split("-")[1]);
  
  if (mTime==hourShift){
    timeBlock.addClass('present');
  }else if(mTime>hourShift){
    timeBlock.addClass('future');
  }else{
    timeBlock.addClass('past');
  }
  }
  // Loop through HTML DOM 
  timeBlockColor();
  
  // Getting tasks from local storage
  
  $('#hour-8 .description').val(localStorage.getItem('8'));
  $('#hour-9 .description').val(localStorage.getItem('9'));
  $('#hour-10 .description').val(localStorage.getItem('10'));
  $('#hour-11 .description').val(localStorage.getItem('11'));
  $('#hour-13 .description').val(localStorage.getItem('12'));
  $('#hour-14 .description').val(localStorage.getItem('13'));
  $('#hour-15 .description').val(localStorage.getItem('14'));
  $('#hour-16 .description').val(localStorage.getItem('15'));
  $('#hour-17 .description').val(localStorage.getItem('16'));

});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.