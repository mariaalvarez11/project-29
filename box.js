class Box {
    constructor(x,y,width,height){
        var option ={
            restitution :0.4,
            friction :0.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed < 3){
            
        }
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }

}