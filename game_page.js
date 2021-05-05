player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1name+ " : ";
document.getElementById("player2name").innerHTML=player2name+ " : ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="Question Turn - "+player1name;
document.getElementById("playeranswer").innerHTML="Answer Turn - "+player2name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("word in lowercase = "+ word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    lengthdivide2=Math.floor(word.length/2);
    charAt2=word.charAt(lengthdivide2);
    console.log(charAt2);
    lengthminus1=word.length-1;
    charAt3=word.charAt(lengthminus1);
    console.log(charAt3);
    removecharAt1=word.replace(charAt1,"_");
    removecharAt2=removecharAt1.replace(charAt2,"_");
    removecharAt3=removecharAt2.replace(charAt3,"_");
    console.log(removecharAt3);

    questionword="<h4 id='worddisplay'> Q. "+removecharAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row = questionword + input_box + check_button ;
       document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = ""; }

    questionturn="player1";
    answerturn="player2";
    function check(){
        getanswer=document.getElementById("input_check_box").value;
        answer= getanswer.toLowerCase();
        console.log("answer in lowercase = "+answer);
        if(answer==word)
        {
            if(answerturn=="player1"){
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }
    
        else{
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
    
        }
    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("playerquestion").innerHTML="Question turn - "+player2name;
    
    }
    else{
        questionturn="player1";
        document.getElementById("playerquestion").innerHTML="Question turn - "+player1name;
    
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("playeranswer").innerHTML="Answer turn - "+player2name;
    
    }
    else{
        answerturn="player1";
        document.getElementById("playeranswer").innerHTML="Answer turn - "+player1name;
    
    }
    document.getElementById("output").innerHTML="";
    
    }


    

