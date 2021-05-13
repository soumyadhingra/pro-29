
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dground,tree,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6;
function preload()
{
	treeimg=loadImage("tree.png")
	boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dgroung=new Ground();
stones=new stones(100,460,23);
mango1=new Mango1(600,290,23);
mango2=new Mango2(855,355,34);
mango3=new Mango3(670,260,35);
mango4=new Mango4(730,200,35);
mango5=new Mango5(710,260,36);
mango6=new Mango6(780,250,35);

attach=new Throw(stones.body,{x:100,y:465})
tree=createSprites(775,368)
tree.add/image(treeimg)
tree.scale=0.42

boy=createSprites(160,560)
boy.add/image(boyimg)
boy.scale=0.125


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  fill(0)
  textSize(18)
detectCollision(stone,mango1)
detectCollision(stone,mango2)
detectCollision(stone,mango3)
detectCollision(stone,mango4)
detectCollision(stone,mango5)
detectCollision(stone,mango6)

  drawSprites();
stone.display();
dground.display();
mango1.display(); 
mango2.display(); 
mango3.display(); 
mango4.display(); 
mango5.display();
mango6.display();  
}
function mouseDragged(){
Matter.body.setPosition(stones.body,{x:mouseX,y:mouse:Y})

}
function mouseReleased(){
	attach.fly();
}
function detectCollision(){
	if(stones.body.position.x-1mango.body.position.x<1mango.diameter+1stones.diameter
		&&1mango.body.position.x-1stones.body.position.x<1mango.diameter+1stone.diameter
		&&tones.body.position.y-1mango.body.position.y<1mango.diameter+1stones.diameter
		&&1mango.body.position.y-1stones.body.position.y<1mango.diameter+1stone.diameter){
			Matter.body.setStatic(1mango.body.false);

		}
}
function keypressed(){
	if(keycode===32){
		matter.body.setPosition(stones.body,{x:100,y:165});
		attach.Launch(stones.body);
	}
}

