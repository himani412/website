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
      window.addEventListener("keydown",mykeydown);
      function mykeydown(e){
          keyPressed=e.keyCode;
          console.log(keyPressed);
         
          if (e.shiftKey==true&&keyPressed=='80')
          {
              console.log("p and shift press together");
              blockwidth=blockwidth+10;
              blockheight=blockheight+10;
              document.getElementById("currentwidth").innerHTML=blockwidth;
              document.getElementById("currentheight").innerHTML=blockheight;
          }
          if (e.shiftKey==true&&keyPressed=='77')
          {
              console.log("m and shift press together");
              blockwidth=blockwidth-10;
              blockheight=blockheight-10;
              document.getElementById("currentwidth").innerHTML=blockwidth;
              document.getElementById("currentheight").innerHTML=blockheight;
          }
          if (keyPressed=='38'){
              up ();
              console.log("up");
  
          }
          if (keyPressed=='40'){
              down ();
              console.log("down");
              
          }
          if (keyPressed=='37'){
              left ();
              console.log("left");
              
          }
          if (keyPressed=='39'){
             right ();
              console.log("right");
              
          }
          if (keyPressed=='70'){
             newimage('ironman_face.png');
              console.log("f");
              
          }
          if (keyPressed=='66'){
              newimage('spiderman_body.png');
               console.log("b");
               
           }
           if (keyPressed=='76'){
              newimage('hulk_legs.png');
               console.log("l");
               
           }
          
               
           if (keyPressed=='82'){
              newimage('thor_right_hand.png');
               console.log("r");
               
           }
           if (keyPressed=='72'){
              newimage('caption_america_left_hand.png');
               console.log("h");
               
           }
 
      }
    