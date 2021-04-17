class Coin{
    constructor(){
        var x=random(40,width-40);
        var y=random(50,height-200);
        this.body=Bodies.rectangle(x,y,50,50,{'restitution':1, 'density':0.6 , 'friction':1});
        World.add(world,this.body);
        this.image=loadImage("images/coins.png");
        
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
 };


 



 

