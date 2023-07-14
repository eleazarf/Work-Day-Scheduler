// Variables
let timeBlocks;
let taskRec;
let saveButton;

// Current hour, date and time
const a = moment().format('MMM Do YYYY, h:mm:a');
document.getElementById("currentDay").innerHTML = a;
const currentHour = moment().format('H');


// Defining time slots and working hours for day scheduling
const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00","18:00"];
const workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18,];

//Time Blocks 
for (i = 0; i < timeSlots.length; i++) {
    let timeBlocks = $("<p>");
    timeBlocks.addClass("hour row");
    timeBlocks.text(timeSlots[i]);
    $(".float-left").append(timeBlocks);
}

for (i = 0; i < timeSlots.length; i++) {
    let taskRec = $(`<input type='text' data-hour='${workHours[i]}' class='textarea row ${workHours[i]}' size='90'placeholder=''/>`);
    $(".float-none").append(taskRec);

    if (workHours[i] == currentHour) {
        $(taskRec).css('background', '#ccffee');
    } else if (workHours[i] > currentHour) {
        $(taskRec).css('background', '#42f55a');
    }
}

//Retrieving Data
for (let i = workHours[0]; i <= workHours[workHours.length - 1]; i++) {
    let userKey = localStorage.getItem("key" + i);
    $(".textarea.row." + i).val(userKey);
  }

//Save Button 
for (i = 0; i < timeSlots.length; i++) {
    let saveButton = $("<button class='saveBtn saveBtn:hover'>");
    saveButton.text("Save");
    $(".float-right").append(saveButton);

};

//Storing data from a save button click 
$("button").click(function () {
    for (let i = workHours[0]; i <= workHours[workHours.length - 1]; i++) {
        let row = ".textarea.row." + i;
        let key = "key" + i;
        let userInput = $(row).val();
        localStorage.setItem(key, userInput);
    }
});