// Global Variables
$(document).ready(function() {

var starWars = {
    countWins: 0,
    countLose: 0,

//Star Wars RPG Game characters
  characters: [{
    //Darth Vader
    name: "Darth Vader",
    health: 200,
    attackPower: 10,
    counterPower: 12,
    player: false,
    enemy: false,
},

{   //Darth Maul
    name: "Darth Maul",
    health: 180,
    attackPower: 8,
    counterPower: 10,
    player: false,
    enemy: false,

},

{   //Obi Wan
    name: "Obi Wan",
    health: 200,
    attackPower: 11,
    counterPower: 13,
    player: false,
    enemy: false,
},

{   //Luke Skywalker
    name: "Luke Skywalker",
    health: 210,
    attackPower: 12,
    counterPower: 14,
    player: false,
    enemy: false,
},

{   //Yoda
    name: "Yoda",
    health: 250,
    attackPower: 15,
    counterPower: 20,
    player: false,
    enemy: false,}

],};

//Show Characters on div
for (var i = 0; i < starWars.characters.length; i++) {
    var thisChar = "char" + i;
    var charDiv = $("<div>");
    charDiv.addClass("char");
    charDiv.attr("id", thisChar);
    charDiv.attr("data-id", i);
    charDiv.attr("data-health", starWars.characters[i].health);
    $("#char").append(charDiv);
//show Health Points on card
    charHealthDiv.addClass("char-stats-div");
    charHealthDiv.attr("id", "char-stats" + i);
    $("#char" + i).append(charHealthDiv);


    charHealthDiv.attr("id", "char-stats" + i);
    $("#char" + i).append(charHealthDiv);


    var charName = $("<p>");
    charName.html(starWars.characters[i].name);
    charName.addClass("bold");
    $("#char-stats" + i).append(charName);


    charIcon.addClass("fa fa-heart");
    $("#char-stats" + i).append(charIcon);

    var charHealthDiv = $("<span>");
    $("#char-stats" + i).append(charHealthDiv);

}
//When characters were chosen to play
   
$("#char").on("click", function() {
    if (starWars.player === 0) {
        var selectedPlayer = "#char" + $(this).attr("data-id");
        $("#gameplayer").append($(selectedPlayer));
        starWars.player++;
        starWars.characters[$(this).attr("data-id")].player = true;

    }
});

});

