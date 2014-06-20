var synth = new Synth();

var keyMappings = {
    "key_115": 0,
    "key_100": 1,
    "key_106": 2,
    "key_107": 3
}

$(document).ready(function() {
    drawGrid();
    setupEvents();
});

function drawGrid() {
    //4x4 grid = 16 tiles

    //tile = 200 width, 150 height
    var rows = [];
    for(var i = 0; i < 4; i++) {
        var row = drawRow();
        $("#game").append(row);
    }

    $(".row:last .playable").addClass("current");
}

function drawRow(params) {
    var tilePosition = (Math.round(Math.random() * 3));

    var row = $("<div>", {"class": "row"});

    if(params) {
        if(params.animateNew) {
            row.addClass("animateNew");
        }
    }



    for(var i = 0; i < 4; i++) {
        var tile = $("<div>", {"class": "tile"});

        if(i == tilePosition) {
            tile.addClass("playable");
            tile.addClass("pos" + tilePosition);
        }

        row.append(tile);
    }

    return row;
}

function setupEvents() {
    /*$("#game").on("click", ".current", function(event) {
        doTile();
    });*/

    $(window).on("keypress", function(evt) {
        if($(".current").hasClass("pos" + keyMappings["key_" + evt.which])) {
            doTile();
        }
    });
    
    $("body").on("click", ".tile", function(evt) {
       if($(evt.target).hasClass("current")) {
           doTile();
       }
    });
}

function doTile() {
    console.log('i was clicked!', event.target);
    $(".row:last").remove();
    $("#game").prepend(drawRow({"animateNew": true}));
    $(".row:last .playable").addClass("current");

    synth.playSound(synth.randomNote(Math.round(Math.random() * 3) + 1), 200);
}
