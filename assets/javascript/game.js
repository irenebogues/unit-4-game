
    


    
//Star Wars RPG Game characters
 characters: [{
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
}],

    //This ensures that the nested characters can work as the main player or an enemy
    
    //Game Rule Instruction Number 1: Player will select the StarWars characters by clicking on enemy's photo

    function gameruleOne () {
        attackPower = 0;
        defenderId = "";
        attackerId = "";
        attackerHp = 0;
        defenderHp = 0;
        enemyCount = characters.length -1;


        $("#mainbattlefield").empty();
        $("#gameplayers").empty();
        $("#enemyplayers").empty();
        $("#defender").empty();

        
    //Loop to create characters
        for (var i = 0; i < characters.length; i++) {
            //create dynamic divs
            var div = $('<div>').addClass("gameplayers").attr("id",i);
            //append new div to id=characters 
            $("mainbattlefield").append(div);
        //inside the new div append a <p> with the character name
            div.append($("<img>").attr("src", "assets/images/" + character [1]["imgUrl"]));
            div.append($("<p>").text (characters[i]["name"]));
            div.append($("<p>").html("Health Points: <span>" + character[i]["health"]));
            div.append($("<p>").html("Attack Power: <span>" + character[i]["attackPower"]));
            div.append($("<p>").html("Counter Attack: <span>" + character[i]["counterPower"]));		
		}
		attachOnClick(); //attach onclick event to characters
    };

    //
        function attachOnClick () {
            $(".characters").on("click", function(){
                var currentCharacter = $(this);
                if (attackerId === ""){
                    attackerId = currentCharacter.attr("id");
                    attackerHp = characters[attackerId].health;
                    currentCharacter.addClass("enemyplayer");
                    currentCharacter.off("click");
                    $("gameplayer").append(currentCharacter);
                } else if(defenderId === ""){
                    defenderId = currentCharacter.attr("id");
                    defenderHp = characters [defenderId].health;
                    currentCharacter.addClass("defender");
                    currentCharacter.off("click");
                    $("#defender").append(currentCharacter);
                }
            });
                
        }
        
		
				

    