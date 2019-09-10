var dice;
var totalScore = 0;

var totalPoints = document.getElementById("total");

function displayWon()
{
    var out = "";
    out = "<img src='won.png'/>";
    return out;
}

function displayLose()
{
    var out = "";
    out = "<img src='lose.png'/>";
    return out;
}

let diceImgs = {
    dice1:'img/dice1.png',
    dice2:'img/dice2.png',
    dice3:'img/dice3.png',
    dice4:'img/dice4.png',
    dice5:'img/dice5.png',
    dice6:'img/dice6.png',
  }
function throwDice(){
        var out = "";
        dice = Math.floor((Math.random() * 6) + 1);
        var diceObj = document.getElementById("diceImgObj");
        diceObj.classList.remove("no-display");
        diceObj.src = diceImgs['dice' + dice];

        if (dice === 1) {
            var loseMsg = document.getElementById("display-lose");
            loseMsg.innerHTML = 'YOU LOSE! You rolled 1!';
            totalScore=0;
            totalPoints.innerHTML = totalScore;
            toggleBtn(rollBtn);
            out = displayLose();
            document.getElementById("emoji").innerHTML = out;
        } 
        else {
            hideMsg();
            totalScore += dice;
            totalPoints.innerHTML = totalScore;
        } 
        if (totalScore >= 25) {
            var winMsg = document.getElementById("display-win");
            winMsg.innerHTML = 'CONGRATULATIONS! YOU WON !';
            totalScore = 0;
            toggleBtn(rollBtn);
            out = displayWon();
            document.getElementById("emoji").innerHTML = out;
        }
}

function hideMsg(){
    document.getElementById("display-lose").innerHTML = '';
    document.getElementById("display-win").innerHTML = '';
    document.getElementById("emoji").innerHTML = '';
}


var rollBtn = document.getElementById("roll-btn");
rollBtn.addEventListener("click",  throwDice)


function toggleBtn(btn){
    if (btn.disabled === true) {
        btn.disabled = false;
    } else if (btn.disabled === false) {
        btn.disabled = true;
    };
}

function reset(){
    totalScore = 0;
    document.getElementById("diceImgObj").classList.add("no-display");
    totalPoints.innerHTML=totalScore;
    hideMsg();
    toggleBtn(rollBtn);

}

var resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", reset);
