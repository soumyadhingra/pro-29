class Mango{
    constructor(x,y,diameter){
        var options={
            isStatic:true
            resitution:0.5
            friction:1
            density:1.2
        }
        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        this.image=loadImage("mango.png")
        World.add(world,this.body);
    
        display(){
            push();
            translate(this.body.position.x,this.body.position.y)
            imageMode(centre);
            image(this.image,0,0,this.diameter)
            pop();
        }
}