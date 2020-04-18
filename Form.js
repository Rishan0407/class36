class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h3");

    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(200,20);

       this.input.position(130,160);

        
        this.button.position(250,200);

        
        button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.Index=playerCount;
            player.update();
            player.updateCount(playerCount);
           this.greeting.html("Welcome "+name);
            this.greeting.position(130,160);
        })

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}