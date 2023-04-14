// variables/references for DOM Navigation
var displayTimeEl = $('#currentDay');
var saveBtn = $('.saveBtn');

$(function () {

// Display current day at top of the calendar
function currentDay() {
  var today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss A');
  displayTimeEl.text(today);
};
currentDay();
setInterval(currentDay, 1000);

saveBtn.click(function () {
  var hourShift = $(this).parent().attr('id').split('hour-').join('');
  var textArea = $(this).siblings('.description').val();
  localStorage.setItem(hourShift, textArea);
});

var mTime = dayjs().hour();

// Comparing if time-block should be past, present or future.
$('.time-block').each(function () {

  var hourShift = parseInt($(this).attr("id").split("-")[1])

  if (hourShift < mTime) {
    $(this).removeClass('present');
    $(this).addClass('past');
    $(this).removeClass('future');
  } else if (mTime === hourShift) {
    $(this).removeClass('future');
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
    $(this).removeClass('past');
    $(this).removeClass('present');
  }

});

for (var i = 8; i < 17; i++) {
   $('#hour-'+i+' .description').val(localStorage.getItem(i));
  
}
// Getting tasks from local storage

// $('#hour-8 .description').val(localStorage.getItem('8'));
// $('#hour-9 .description').val(localStorage.getItem('9'));
// $('#hour-10 .description').val(localStorage.getItem('10'));
// $('#hour-11 .description').val(localStorage.getItem('11'));
// $('#hour-13 .description').val(localStorage.getItem('12'));
// $('#hour-14 .description').val(localStorage.getItem('13'));
// $('#hour-15 .description').val(localStorage.getItem('14'));
// $('#hour-16 .description').val(localStorage.getItem('15'));
// $('#hour-17 .description').val(localStorage.getItem('16'));

});
