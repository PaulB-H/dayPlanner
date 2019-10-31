$(function generateTimeblocks() {
    console.log( "ready!" );
});

const timeBlocksArray = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

$(function generatePage() {
// debugger;
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
                <input class="form-control textArea${i}" type="text" placeholder="Type here:">
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
        // $(`.textArea${[i]}`)
        // $(`.blockHead${[i]}`)
        // console.log("Future triggered");

        console.log ($(`.blockHead${[i]}`)[0].innerHTML);

        var currentMoment = moment().format("HH");

        var headMoment = moment().format($(`.blockHead${[i]}`)[0].innerHTML);
        var str = headMoment;
        var res = str.substring(0, 2);

        if (res < currentMoment){
            console.log("Triggered Past");
            $(`.textArea${[i]}`).addClass("past");
        }
        else if (res > currentMoment){
            console.log("Triggered Future");
            $(`.textArea${[i]}`).addClass("future");
        }
        else {
            console.log("Triggered present");
            $(`.textArea${[i]}`).addClass("present");
        };
    };

//END generatePage()
});