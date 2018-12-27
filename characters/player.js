function player(name,char,id){
  this.name=name;
  this.color="#FF0000";
  this.x=0;
  this.y=0;
  this.lvlsc=0;
  this.score=0;
  this.wins=0;
  this.lives=5;
  this.health=100;
  this.class=char;
  this.id=id;
  this.move=false;
  this.powerUps=[0,0,0,0,0,0,0];//high jump,dbl jump,flight,ex health,sheild,dbl coins,speed boost
  this.draw=function(){
    ctx.fillStyle=this.color;
    ctx.fillRect(this.x,this.y,20,20);
    ctx.fillStyle="#FFFFFF";
    ctx.arc(this.x+10,this.y+10,7,0,360);
    ctx.fillStyle="#000000";
    if(this.move!==false){
      if(this.move==="left")
        ctx.arc(this.x+4,this.y+10,3,0,360);
      if(this.move==="right")
        ctx.arc(this.x+11,this.y+10,3,0,360);
      if(this.move==="up")
        ctx.arc(this.x+10,this.y+4,3,0,360);
      if(this.move==="down")
        ctx.arc(this.x+10,this.y+11,3,0,360);
    }else{
      ctx.arc(this.x+10,this.y+10,3,0,360);
    }
  }
  this.left=function(){
    this.move="left";
    this.x--;
  }
  this.right=function(){
    this.move="right";
    this.x++;
  }
  this.up=function(){
    this.move="up";
    this.y--;
  }
  this.down=function(){
    this.move="down";
    this.y++;
  }
  this.stay=function(){
    this.move=false;
  }
}
