let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg= document.querySelector("#msg");
let play = document.querySelector("#player");
let n1 = document.querySelector("#name1");
let n2 = document.querySelector("#name2");
let t = document.querySelector("#turn");
let turnX= true;
let player1 = "";
let player2 = "";
const wins =[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");       
        if(turnX==true){
            box.innerText='✖️';
            turnX=false;
            t.innerText = `${player2}'s turn.`;
        }
        else{
            box.innerText='⭕';
            turnX=true;
            t.innerText = `${player1}'s turn.`;
        }
        box.disabled=true;
        checkWinner(); 
    });
});
const disablebox =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
}
const checkWinner=()=>{
    for(let pattern of wins){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){ 
                console.log("Winner ",pos1);
                disablebox();
                showWinner(pos1);
            }
        }   
    }
}
const resetit=()=>{
    turnX=true;
    enablebox();
    player1="";
    player2="";
}
play.addEventListener("submit", (event) => {
  event.preventDefault();
  player1 = n1.value;
  player2 = n2.value;
  t.innerText = `${player1}'s turn.`;
});
reset.addEventListener("click",resetit);

