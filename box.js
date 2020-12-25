class Box
{
    constructor(x,y,width,height)
    {
        
        var options={
            isStatic:false,
           
        }
        this.width=width;
        this.height=height;
        this.Visibility = 255;
        this.body=Bodies.rectangle(x,y,width,height,options);
        
        World.add(world,this.body);
    }
        
    display(){
    //console.log(this.body.speed);
   if(this.body.speed < 4){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("lightblue");
    strokeWeight(4)
    stroke("blue")
    rect(0,0, this.width,this.height,angle);
    pop();
   }
   else
   {
    World.remove(world, this.body);
    push();
    this.Visibility = this.Visibility - 3;
    tint(255,this.Visibility);
    
    pop();
  }
    
    }
}