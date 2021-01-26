class Chain{
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 270,
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB

        World.add(world,this.chain);
    }
       display() {
           var pointA = this.chain.bodyA.position
           var pointB = this.pointB;
         
           push()
           strokeWeight(3);
           line(pointB.x,pointB.y,pointA.x,pointA.y);
           pop()
       }

}