var canvas=new fabric.Canvas('myCanvas');
blockwidth=30;
blockheight=30;
playerx=10;
playery=10;
var playerobject="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function (Img){
        playerobject=Img;
       playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
         playerobject.set({ top:playery, left:playerx });
          canvas.add(playerobject); }); }
  function newimage(getimage){
 fabric.Image.fromURL(getimage,function (Img){
      blockobject=Img;
     blockobject.scaleToWidth(blockwidth);
  blockobject.scaleToHeight(blockheight);
  blockobject.set({ top:playery, left:playerx });
      canvas.add(blockobject); }); }
    