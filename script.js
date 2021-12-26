var cells=document.getElementsByClassName("cells");
var score_x=document.getElementById("score-x");
var score_x_counter=0;
var score_o=document.getElementById("score-o");
var score_o_counter=0;
var draw=document.getElementById("draw");
var draw_counter=0;
var result=document.getElementById("result").innerHTML="RESULT";
var player=document.getElementById("player");

//UI
var buttons= [[cells[0],cells[1],cells[2]],
            [cells[3],cells[4],cells[5]],
            [cells[6],cells[7],cells[8]]];
            
//Logic - Back End     
var flags=[[null,null,null],
            [null,null,null],
            [null,null,null]];

var choice=0;
var gameend = false;

function allplayers(){

  choice = 1;
  restart();
}

function playwithbot(){
  choice = 2;
  restart();
}
var ply="X";
function show_index(x,y){
    if (choice == 0){
      alert("Plase select game mode first!");
    }
    else if (gameend == false){
     if (flags[x][y]==null)
    {
        if (choice == 1){
        if(ply=="X"){
            flags[x][y]="X";
            buttons[x][y].innerHTML="X";
            buttons[x][y].classList.add("X");
            ply="O";
        }
         else if(ply=="O"){
            flags[x][y]="O";
            buttons[x][y].innerHTML="O";
            buttons[x][y].classList.add("O");
            ply="X";
        }
      check_game();
    }
    else if(choice == 2){
      flags[x][y]="X";
      buttons[x][y].innerHTML="X";
      buttons[x][y].classList.add("X");
      gameend = true;

      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          if(flags[i][j] == null)
            gameend = false;
      check_game();
      if (gameend == false){
      var x2, y2;
      while(true){
      x2 = Math.floor(Math.random() * 3);
      y2 = Math.floor(Math.random() * 3);
      if (flags[x2][y2]==null) break
    }
    flags[x2][y2]="O";
    buttons[x2][y2].innerHTML="O";
    buttons[x2][y2].classList.add("O");
    check_game();
    }
  }
    }
    else{
        document.getElementById("result").innerHTML=" Try More!";
    }
}
else{
    document.getElementById("result").innerHTML=" Press new game button!";
}
}
function check_game(){
    //check gmae for(X)
    if(flags[0][0]=="X" && flags [0][1]=="X" && flags [0][2]=="X"){
        document.getElementById("result").innerHTML=" Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[1][0]=="X" && flags [1][1]=="X" && flags [1][2]=="X"){
        document.getElementById("result").innerHTML=" Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[2][0]=="X" && flags [2][1]=="X" && flags [2][2]=="X"){
        document.getElementById("result").innerHTML=" Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][0]=="X" && flags [1][0]=="X" && flags [2][0]=="X"){
        document.getElementById("result").innerHTML=" Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][1]=="X" && flags [1][1]=="X" && flags [2][1]=="X"){
        document.getElementById("result").innerHTML=" Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][2]=="X" && flags [1][2]=="X" && flags [2][2]=="X"){
        document.getElementById("result").innerHTML=" Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][0]=="X" && flags [1][1]=="X" && flags [2][2]=="X"){
        document.getElementById("result").innerHTML=" Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][2]=="X" && flags [1][1]=="X" && flags [2][0]=="X"){
        document.getElementById("result").innerHTML=" Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    //check game for(O)
    if(flags[0][0]=="O" && flags [0][1]=="O" && flags [0][2]=="O"){
        document.getElementById("result").innerHTML=" Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[1][0]=="O" && flags [1][1]=="O" && flags [1][2]=="O"){
        document.getElementById("result").innerHTML=" Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[2][0]=="O" && flags [2][1]=="O" && flags [2][2]=="O"){
        document.getElementById("result").innerHTML=" Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][0]=="O" && flags [1][0]=="O" && flags [2][0]=="O"){
        document.getElementById("result").innerHTML=" Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][1]=="O" && flags [1][1]=="O" && flags [2][1]=="O"){
        document.getElementById("result").innerHTML=" Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][2]=="O" && flags [1][2]=="O" && flags [2][2]=="O"){
        document.getElementById("result").innerHTML=" Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][0]=="O" && flags [1][1]=="O" && flags [2][2]=="O"){
        document.getElementById("result").innerHTML=" Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][2]=="O" && flags [1][1]=="O" && flags [2][0]=="O"){
        document.getElementById("result").innerHTML=" Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    //checkgame for draw
    if((flags[0][0]=="X" || flags[0][0]=="O") && (flags[0][1]=="X" || flags[0][1]=="O")
        && (flags[0][2]=="X" || flags[0][2]=="O" ) && (flags[1][0]=="X" || flags[1][0]=="O") 
        && (flags[1][1]=="X" || flags[1][1]=="O") && (flags[1][2]=="X" || flags[1][2]=="O") 
        && (flags[2][0]=="X" || flags[2][0]=="O") && (flags[2][1]=="X" || flags[2][1]=="O") 
        && (flags[2][2]=="X" || flags[2][2]=="O")){
    document.getElementById("result").innerHTML="Match Draw";
    draw_counter++;
    draw.innerHTML=draw_counter;
    gameend = true;
}
}
//New Game(restart)
function restart() {
    gameend =false;
    for(var i=0;i<8;i++){
        for(var j=0;j<8;j++){
            if(flags[i][j]=="X" | flags[i][j]=="O"){
          if(ply=="X" | ply=="O"){
              
              buttons[i][j].innerHTML="";
              buttons[i][j].classList.remove("X");   
              buttons[i][j].classList.remove("O");       
              flags[i][j]=null;
              document.getElementById("result").innerHTML="RESULT";
          }
      }  
  
    }
  }
}

