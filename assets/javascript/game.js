// Global Variables
$(document).ready(function(){

var starWars = {
    countWins: 0,
    countLose: 0,


//Star Wars RPG Game characters
  characters: [{
    //Darth Vader
    id: "star0",
    name: "Darth Vader",
    health: 200,
    attackPower: 10,
    counterPower: 12,
    imageUrl: '../images/darthvader.png'
},

{   //Darth Maul
    id: "star02",
    name: "Darth Maul",
    health: 180,
    attackPower: 8,
    counterPower: 10,
    imageUrl: '../images/darthmaul.png'
},

{   //Obi Wan
    id: "star03",
    name: "Obi Wan",
    health: 200,
    attackPower: 11,
    counterPower: 13,
    imageUrl: '../images/obiwan.png'
},

{   //Luke Skywalker
    id: "star04",
    name: "Luke Skywalker",
    health: 210,
    attackPower: 12,
    counterPower: 14,
    imageUrl: '../images/lukeskywalker.png'
},

{   //Yoda
    id:"star05",
    name: "Yoda",
    health: 250,
    attackPower: 15,
    counterPower: 20,
    imageUrl: '../images/yoda.png'}

],};



for (var i = 0; i < starWars.characters.length; i++) {
    var thisChar = "char" + i;
    var charDiv = $("<div>");
    charDiv.attr("id", thisChar);
    charDiv.attr("data-health", starWars.characters[i].health);
    $("#gameplayers").append(charDiv);

    var charIcon = $("<i>");
    $("#char" + i).append(charIcon);
    var charHealth = $("<span>test</span>");
    charHealth.html("&nbsp;" + $("#char" + i).attr("data-health"));
    $("#char" + i).append(charHealth);

}
});






