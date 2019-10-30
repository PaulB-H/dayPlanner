$(function generateTimeblocks() {
    console.log( "ready!" );
});


var now = moment();

console.log

const timeBlocksArray = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

for (var i = 0, l = `${timeBlocksArray.length}`; i < l; i++) {
    // timeBlocksArray[i] 
    moment().format("HH:mm");

    // EXAMPLE TIME COMPARISON 
    // moment('2010-10-20').isBefore('2010-10-21'); = true
    
    $("#timeblockContainer").append(` 

    <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text blockHead">${timeBlocksArray[i]}</span>
    </div>
    <input class="past present future textArea${i}" type="text" class="form-control" placeholder="" aria-label=""   aria-describedby="basic-addon1">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary saveButton${i}" type="button"><i class="fas fa-save"></i></button>
        </div>
    </div>
    `);
};

/* 

<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text blockHead">TIME</span>
    </div>
    <input class="past present future textArea" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary saveButton" type="button"><i class="fas fa-save"></i></button>
        </div>
</div>

step 1

Generate 9 timeblocks from 09:00->18:00 with the following:

each timeblock should have a time section on the left, where the hour for that block is noted 
(add header class="blockHead" content = ${timeBlocksArray[i]})

text area to put details (class=textArea)
add classes past, present, future to each textArea
if (blockHead).isBetween

save button appended to each text area with class="saveButton"

const timeBlocksArray = ["09:00:00", "10:00:00", "11:00:00", "12:00:00", "01:00:00", "02:00:00", "03:00:00", "04:00:00", "05:00:00"];

timeBlocksArray[i] 



 */
