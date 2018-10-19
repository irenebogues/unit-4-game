//Function to run to invoke document.

// Main Star Wars RPG Game Variables 
//Counts number of wins and looses of players

var starWars = {
    numberWin: 0,
    numberLose: 0,

//Star Wars RPG Game Characthers
characthers: [{
    //Darth Vader
    name: "Darth Vader",
    health: 200,
    attackPower: 10,
    counterPower: 12,
    player: false,
    enemy: false,
    imageUrl: '../images/darthvader.png'
},

{   //Darth Maul
    name: "Darth Maul",
    health: 180,
    attackPower: 8,
    counterPower: 10,
    player: false,
    enemy: false,
    imageUrl: '../images/darthmaul.png'
},

{   //Obi Wan
    name: "Obi Wan",
    health: 200,
    attackPower: 11,
    counterPower: 13,
    player: false,
    enemy: false,
    imageUrl: '../images/obiwan.png'
},

{   //Luke Skywalker
    name: "Luke Skywalker",
    health: 210,
    attackPower: 12,
    counterPower: 14,
    player: false,
    enemy: false,
    imageUrl: '../images/lukeskywalker.png'
},

{   //Yoda
    name: "Yoda",
    health: 250,
    attackPower: 15,
    counterPower: 20,
    player: false,
    enemy: false,
    imageUrl: '../images/yoda.png'
}],

    //This ensures that the nested characthers can work as the main player or an enemy
    player: false,
    enemy: false,

    //Game Rule Instruction Number 1: Player will select the StarWars characthers by clicking on enemy's photo

    gameruleOne: function () {
        $("#mainbattlefield").text();
        //console.log(starWars);
    },

    //All Game Rules/Functions HERE


    
    //Game Restart Function Generates Gets and Sets the rest of the Game Rules Functions
    //Game Restart Function also serves as the main game function
    //Functions for Players Choosing their Characther
    //Functions for Pictures to Move to Enemy Player Div
    //Battle Functions Here
    //Functions for Defenders
    //Attack Functions
    //Defender Functions
    //Win-Lose Functions
    




};

    





