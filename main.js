var c,ctx,level;
function menuMain(){
  console.log("hi");
  c=document.getElementById("myCanvas");
  ctx=c.getContext("2d");
  level=["00000000000000000000","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0.......................0","0000000000000000000000000"];
  play();
}

function play(){
  ctx.clearRect(0,0,500,500);
  drawLevel();
  window.requestAnimationFrame(play);
}

function drawLevel(){
  for(var i=0;i<level.length;i++){
    for(var ii=0;ii<level[i].length;ii++){
      if(level[i].charAt(ii)==="0"){
        ctx.fillStyle="#000000";
        ctx.fillRect(ii*25,i*25,20,20);
      }
    }
  }
}
