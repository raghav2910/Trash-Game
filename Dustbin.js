class Dustbin {
    constructor(x,y){
    this.x=x;
    this.y=y;
    this.DustbinWidth=200;
    this.DustbinHeight=100;
    this.angle=0;
    this.wallThickness=20
    this.bottomBody=Bodies.rectangle(this.x,this.y,this.DustbinWidth,this.wallThickness,{isStatic:true});
    this.leftBody=Bodies.rectangle(this.x-this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,{isStatic:true});
    Matter .Body.setAngle(this.leftBody,this.angle);
    this.rightBody=Bodies.rectangle(this.x+this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,{isStatic:true});
    Matter .Body.setAngle(this.rightBody,-PI);
    World.add(world,this.bottomBody);    
    World.add(world,this.rightBody);
    World.add(world,this.leftBody);
        
}
display(){
    var posbottom=this.bottomBody.position;
    var posleft=this.leftBody.position;
    var posright=this.rightBody.position;
    push();
    translate(posbottom.x,posbottom.y);
    rectMode(CENTER);
    strokeWeight(4)
    fill("red");
    rect(0,0, this.DustbinWidth, this.DustbinHeight);
    pop ();

    push();
    translate(posleft.x,posleft.y);
    rectMode(CENTER);
    strokeWeight(4)
    fill("red");
    rect(0,0, this.DustbinWidth, this.DustbinHeight);
    pop ();

    push();
    translate(posright.x,posright.y);
    rectMode(CENTER);
    strokeWeight(4)
    fill("red");
    rect(0,0, this.DustbinWidth, this.DustbinHeight);
    pop ();

}
}