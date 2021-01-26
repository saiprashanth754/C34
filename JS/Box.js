class Box {
    constructor(x,y,width,height) {
        var options = {
            restitution: 0.2,
            friction: 0.1,
            density: 1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
 
        World.add(world,this.body);
    }

    display() {
        var position = this.body.position;
        var angle = this.body.angle;
        push()
        translate(position.x,position.y);
        rotate(angle);
        stroke(0);
        fill("green")
        rect(0,0,this.width,this.height)
        pop()
     }
}