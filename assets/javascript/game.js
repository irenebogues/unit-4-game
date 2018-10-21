
// Global Variables

var gameruleOne,
    
//Star Wars RPG Game characters
 characters = [{
    //Darth Vader
    name: "Darth Vader",
    health: 200,
    attackPower: 10,
    counterPower: 12,
    imageUrl: '../images/darthvader.png'
},

{   //Darth Maul
    name: "Darth Maul",
    health: 180,
    attackPower: 8,
    counterPower: 10,
    imageUrl: '../images/darthmaul.png'
},

{   //Obi Wan
    name: "Obi Wan",
    health: 200,
    attackPower: 11,
    counterPower: 13,
    imageUrl: '../images/obiwan.png'
},

{   //Luke Skywalker
    name: "Luke Skywalker",
    health: 210,
    attackPower: 12,
    counterPower: 14,
    imageUrl: '../images/lukeskywalker.png'
},

{   //Yoda
    name: "Yoda",
    health: 250,
    attackPower: 15,
    counterPower: 20,
    imageUrl: '../images/yoda.png'
},];

function gameruleOne () {
    attackPower = 0;
    playersId = "";
    enemyplayersId = "";
    enemyplayersHp = 0;
    defenderHp = 0;
    enemyCount = characters.length -1;


var playerId = $("gameplayers").find(".characters");
var enemyplayersId = $("enemyplayers").find(".characters");
var enemyplayersHp = $("defenders").find (".characters");


}

    
