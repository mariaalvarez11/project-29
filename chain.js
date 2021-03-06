class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB, 
            stiffness: 0.04,
            length: 1
        }
        this.chain = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA =null;
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}