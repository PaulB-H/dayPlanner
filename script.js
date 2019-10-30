$(function generateTimeblocks() {
    console.log( "ready!" );
});

const timeBlocksArray = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

$(function generatePage() {

    var headerDate = null;
    var date = null;

    var update = function () {
        date = moment(new Date())
        headerDate.html(date.format("ddd &#183; MMM Do &#183; YYYY &#183; HH:mm:ssa"));
    };

    $(document).ready(function (){
        headerDate = $('#headerDate')
        update();
        setInterval(update, 1000);
    });

    function generateHeader() {
        $("#headerContainer").prepend(`
            <header class="jumbotron">
                <h1 class="display-5">Day Planner</h1>
                <p id="headerDate" class="lead">${headerDate}</p>
                <p id="currentDay" class="lead"></p>
            </header>
        `)
    };

    generateHeader();

    // GENERATE TIME BLOCKS
    for (var i = 0, l = `${timeBlocksArray.length}`; i < l; i++) {
        // timeBlocksArray[i] 
        var timeblk = moment().format(`${timeBlocksArray[i]}`);
        // EXAMPLE TIME COMPARISON 
       // moment('2010-10-20').isBefore('2010-10-21'); = true
        $("#timeblockContainer").append(`
            <div id="timeblockContainer" class="container">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text blockHead${i}">${timeblk}</span>
            </div>
            <input class="form-control past present future textArea${i}" type="text" placeholder="Type here:">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary saveButton${i}" type="button"><i class="fas fa-save"></i></button>
                </div>
            </div>
        `);
    };

    //removeClassFunction

    // To set present class:
    // if (current Hour == blockHead hour) {
    //      add class present
    // };

    for (var i = 0, l = `${timeBlocksArray.length}`; i < l; i++) {
        //var currentMoment = moment().format("HH:mm");

        var currentMoment = moment().format("HH:mm");


        // This hamstring function is to take the blockHead Hour which is in HH:mm format, and take the HH off and store it as a string so I can compare the Hour only to the current hour to determine if it needs a present class
        function hamString() {
            var str = $(`.blockHead${[i]}`).text();
            console.log(str);
            var res = str.substring(0, 2);
            console.log(res);
        };

        hamString();

        // var headMoment = $(`.blockHead${[i]}`).text();

        if (moment(`.blockHead${[i]}`).isAfter(currentMoment) == false){
            console.log($(`.blockHead${[i]}`));
            $(`.textArea${[i]}`).removeClass("past");
        }
        else if (moment(`.blockHead${[i]}`).isAfter(currentMoment) == true){
            console.log($(`.blockHead${[i]}`));
            $(`.textArea${[i]}`).removeClass("future");
        }
        else if (moment(`.blockHead${[i]}`) == currentMoment){
            console.log("You found me again!");
        };
    };

//END generatePage()
});


/*
SCRATCHSPACE

NEED TO build function to compare blockHead to current time and remove past || present || future


 */