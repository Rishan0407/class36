class Game{
    constructor(){

    }

    getState(){
        var getStateRef=database.ref("gameState");
        getStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        });
    }
    start(){
       if(gameState===0){
           player=new Player();
           var playerCountRef=database.ref(playerCount);
           playerCountRef.once("value");
           if(playerCountRef.exists()){
               playerCount=playerCountRef.val();
               player.getCount();
           }
           form=new Form();
           form.display();
       } 
    }
    play(){
       form.hide();
       textSize(20);
       text("Game Start",120,100);
       Player.getPlayerInfo();
       if(allPlayers !== undefined){
var display_position=130;
display_position=display_position+20;
textSize(14);
text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_position);
       }
    }

}