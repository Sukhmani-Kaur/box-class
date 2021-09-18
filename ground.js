class ground{
    constructor(x,y,width,height){
        var ground_options={
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,height,ground_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        var p=this.body.position
        fill("red");
        rectMode(CENTER);
        rect(p.x,p.y,this.width,this.height);
    }
}