const Engine=Matter.Engine,
      Bodies=Matter.Bodies,
      Body=Matter.Body,
      World=Matter.World;
var umb,back=680,drops=[],maxDrops=100,thunder,num;
function preload(){
  backImg=loadImage("back.jpg");
}

function setup(){
  createCanvas(500,700);
  engine=Engine.create();
  world=engine.world;
  umb=new Umb(250,550);
  for(var i=0;i<maxDrops;i++){
    drops.push(new Drop(random(0,500),random(-500,0)));
  }
  Engine.run(engine);
  thunder=new Thund(0);
}

function draw(){
  background("black");
  imageMode(CENTER);
  Engine.update(engine);
  back-=3;
  if(back<=-180){
     back=680;
  }
  image(backImg,back,350,1361,700);
  umb.disp();
  for(var a=0;a<maxDrops;a++){
    drops[a].disp();
  }
  if(frameCount%50==0){
    thunder.display();
  }
}