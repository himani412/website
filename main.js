function addUser(){
    player1name=document.getElementById("player1input").value;
    player2name=document.getElementById("player2input").value;
    localStorage.setItem("player 1 name", player1name );
    localStorage.setItem("player 2 name", player2name);
    window.location="  quiz game.html";
}