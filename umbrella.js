class Umb{
  constructor(x,y){
    this.img1=loadImage("imgs/walking_1.png");
    this.img2=loadImage("imgs/walking_2.png");
    this.img3=loadImage("imgs/walking_3.png");
    this.img4=loadImage("imgs/walking_4.png");
    this.img5=loadImage("imgs/walking_5.png");
    this.img6=loadImage("imgs/walking_6.png");
    this.img7=loadImage("imgs/walking_7.png");
    this.img8=loadImage("imgs/walking_8.png");
    this.x=x;
    this.y=y;
    this.body=Bodies.circle(x+5,y-50,70,{isStatic:true});
    World.add(world,this.body);
    this.imgC=0;
  }
  disp(){
    imageMode(CENTER);
    if(frameCount%5==0){
       this.imgC+=1
       if(this.imgC>=7){
          this.imgC=0;
       }
    }
    if(this.imgC==0){
       image(this.img1,this.x,this.y,300,300);
    }else if(this.imgC==1){
       image(this.img2,this.x,this.y,300,300);
    }else if(this.imgC==2){
       image(this.img3,this.x,this.y,300,300);
    }else if(this.imgC==3){
       image(this.img4,this.x,this.y,300,300);
    }else if(this.imgC==4){
       image(this.img5,this.x,this.y,300,300);
    }else if(this.imgC==5){
       image(this.img6,this.x,this.y,300,300);
    }else if(this.imgC==6){
       image(this.img7,this.x,this.y,300,300);
    }else if(this.imgC==7){
       image(this.img8,this.x,this.y,300,300);
    }
  }
}