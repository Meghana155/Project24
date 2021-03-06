class PaperClass {
    constructor(x, y, diameter) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter=diameter;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.diameter,this.diameter);
        pop();
    }
}