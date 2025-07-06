
var guessEL=document.getElementById("guess_num");
var checkEL=document.getElementById("check");
var playEL=document.getElementById("again");

var hideEL=document.querySelector(".random");
var msgEL=document.getElementById("message");
var scoreEL=document.querySelector(".score");
var hgscoreEL=document.querySelector(".hg_score");



//generate random number from 1 to 20;
let randomEL=Math.floor(Math.random()*20+1);
let game_score=20;
let game_hgscore=0;


//function
checkEL.addEventListener("click",() =>{
   event.preventDefault();
  const guess_number=Number(guessEL.value);
  //check empty input
  if(guess_number){
    //not match hide
    if(guess_number!= randomEL){
        if(game_score>1){
            game_score--;
            scoreEL.textContent =" "+ game_score;
            msgEL.textContent=guess_number>randomEL? "Too High" : "Too Low";


        }else{
            displayMsg("Oops 😞!! Code Locked");
            scoreEL.textContent=0;

           
        }

    }else{
        hideEL.textContent=randomEL;
        hideEL.style.width="50%";
        hideEL.style.transition="all 0.5s ease-in";
       displayMsg(" Mystery Solved!");

    }

  }
  else{
   displayMsg("The Secret Awaits Your Guess");
  }
})

//display message
const displayMsg = function (message){
  msgEL.textContent=message;
}

