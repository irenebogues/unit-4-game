
// Global Variables
/* function starWars () {

    */

 
//Star Wars RPG Game characters
 var characters = [{
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

function preGame() {
    $("mainbattlefield").prepend("#battlefield");
    
}

function gameruleOne () {
    attackPower = 0;
    enemyplayersHp = 0;
    defenderHp = 0;
    playersId = characters;
    enemyplayersId = characters;
    defendersId = characters;

    $("#gameplayers").empty();
    $("#enemyplayers").empty();
    $("#defender").empty();

var playersId = $("#gameplayers").find("characters-imageUrl").attr("data-id");
playersId.removeAttr("id");
playersId.removeAttr("data-selected");
playersId.attr("id", "#characters" + playersId);
$("#battlefield").append(playersId);

}

var enemyplayersId = $("#enemyplayers").find("characters-imageUrl").attr("data-id");
enemyplayersId.removeAttr("id");
enemyplayersId.removeAttr("data-selected");
enemyplayersId.attr("id", "#characters" + enemyplayersId);
$("#battlefield").append(enemyplayersId);


var defendersId = $("defenders").find("characters-imageUrl").attr("data-id");
defendersId.removeAttr("id");
defendersId.removeAttr("data-selected");
defendersId.attr("id", "#characters" + defendersId);
$("#battlefield").append(defendersId);



gameruleOne();
//console.log(gameruleOne);




