var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options, star_option, star_option2;


function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	star_option2 = {
		restitution:0.5
	}


	 star_option = {
		isStatic:true
	}

	

	starBody = Bodies.circle(650 , 30 , 5 , star_option);
	World.add(world, starBody);


	 options = { 

		isStatic: true
	}  

	hand = Bodies.rectangle(270,485,40,10,options);
	World.add(world,hand);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  Engine.update(engine);

  if(keyDown("down_arrow")){

	
	starBody = Bodies.circle(650 , 30 , 5 ,{star_option2, options});
	World.add(world,starBody);

	
  }

  

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  rect(starBody.position.x,starBody.position.y,10,10);


  if(starBody.position.y > 470){

	starBody = Bodies.circle(hand.position.x, hand.position.y , 5 , options);
	World.add(world,starBody);

  }

  fairy.depth=starBody.depth;
  fairy.depth=fairy.depth+1;


  keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("right_arrow")){

		fairy.x = fairy.x+10;
		hand.position.x = hand.position.x+10;
		
	}
	
	if(keyDown("left_arrow")){
	
		fairy.x = fairy.x-10;
		hand.position.x = hand.position.x-10;
	}
	

}

