class Bob {
    constructor(x,y,radius){

        var options = {
            isStatic: false,
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity

        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 55;
        World.add(world,this.body); 
        
        

    }

    display () {
        
        var pos = this.body.position;
        push ();
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop ();
    }
}