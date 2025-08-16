let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

let r = document.getElementById("r");
let p = document.getElementById("p");
let s = document.getElementById("s");

let dis = document.getElementById("dis");

let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");


let computer = 0;
let human = 0;
let noR;

b1.addEventListener("click",function(){
    b2.disabled = true;
    b3.disabled = true;
    a2.innerText = "--";
    a3.innerText = "--";
    a4.innerText = "--";
    a5.innerText = "--";
    noR=1;
    dis.innerText="You have 1 attempt.Ready!!"
});
b2.addEventListener("click",function(){
    b1.disabled = true;
    b3.disabled = true;  
    noR=3;
    a4.innerText = "--";
    a5.innerText = "--";
    dis.innerText="You have 3 attempts.Ready!!"
});
b3.addEventListener("click",function(){
    b1.disabled = true;
    b2.disabled = true;
    noR=5;
    dis.innerText="You have 5 attempts.Ready!!"
});

//............. Computer Move ..........

let compM = () =>{
    let arr = ["ROCK","PAPER","SCISSORS"];
    return arr[Math.floor(Math.random() * arr.length)];

};

//........... Human Move ..............
let humM;
r.addEventListener("click",function(){
    humM = "ROCK";
    p.disabled=true;
    s.disabled=true;
    playRound();

});
p.addEventListener("click", function() {
    humM = "PAPER";
    r.disabled = true;
    s.disabled = true;

    playRound();
});

s.addEventListener("click", function() {
    humM = "SCISSORS";
    r.disabled = true;
    p.disabled = true;

    playRound();
});

let round = 1;
let result;

function playRound() {
    if (round <= noR) {
        let comp = compM();
        let result = "";

        if (humM === comp) {
            dis.innerText = `COMPUTER CHOSE: ${comp}, IT'S A DRAW! 😐`;
            result = "DRAW";
        } 
        else if (
            (humM === "ROCK" && comp === "SCISSORS") ||
            (humM === "PAPER" && comp === "ROCK") ||
            (humM === "SCISSORS" && comp === "PAPER")
        ) {
            dis.innerText = `COMPUTER CHOSE: ${comp}, YOU WON! 🎉`;
            result = "YOU";
            human++;
        } 
        else {
            dis.innerText = `COMPUTER CHOSE: ${comp}, YOU LOST! ❌`;
            result = "COMPUTER";
            computer++;
        }

        // update table cell
        document.getElementById(`a${round}`).innerText = result;
        round++;

        // disable for short delay
        r.disabled = true;
        p.disabled = true;
        s.disabled = true;

        setTimeout(() => {
            r.disabled = false;
            p.disabled = false;
            s.disabled = false;
            
        }, 1500);

        
        if (round > noR) {
            setTimeout(() => {
                win(computer, human);
            }, 2000);
        }
    }
}


let win = (computer,human) =>{
    if(computer>human){
        dis.innerText=`FINAL RESULT:  Winner → COMPUTER 🖥️`;
    }
    else if(human>computer){
        dis.innerText=`FINAL RESULT:  Winner → YOU 🎉`;

    }
    else{
        dis.innerText=`FINAL RESULT:  DRAW 😐`;
    }


};

