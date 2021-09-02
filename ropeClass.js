class Rope{
    constructor(pointA,bodyB){
        var options={
            isStatic:false,
            pointA:pointA,
            bodyB:bodyB,
            stiffness:0.05,
            length:50
       }
       this.pointA=pointA;
       this.bodyB=bodyB;
       this.sling=Constraint.create(options);
       World.add(world,this.sling);
    }
display(){
    strokeWeight(4);
    line(this.pointA.x,this.pointA.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
}
}
