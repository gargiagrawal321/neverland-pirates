class Man{
    constructor(x,y,width,height,ig){
        this.body=Bodies.rectangle(x,y,width,height,{'restitution':1, 'density':0.6 , 'friction':1});
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage(ig); 
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
 };
