var robot = {
    name:"",
    x: 0,
    y: 0,

    move: function(steps, direction){
        //Write if/else statment that changes the x and/or y coordinates of your robot

        this.location();
    },
    location: function()
    {
        console.log("### Robot coordinates ###");
        console.log("x:", this.x, "y:", this.y);
    }
}

robot.move(2,"forward"); //Which axis is "forward"?
