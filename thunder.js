class Thund{
  constructor(y){
    this.img1=loadImage('imgs/1.png');
    this.img2=loadImage('imgs/2.png');
    this.img3=loadImage('imgs/3.png');
    this.img4=loadImage('imgs/4.png');
    num=Math.round(random(0,3));
    this.x=0;
    this.y=y;
    this.sprite=createSprite(this.x,y,1,1);
  }
  display(){
      this.x=random(50,450);
      this.sprite.x=this.x;
      if(num==0){
          this.sprite.addImage("img",this.img1);
      }else if(num==1){
          this.sprite.addImage("img",this.img2);
      }else if(num==2){
          this.sprite.addImage("img",this.img3);
      }else if(num==3){
          this.sprite.addImage("img",this.img4);
      }
    drawSprites();
  }
}