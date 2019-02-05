var gameSpaces = document.querySelectorAll("td");
var current_player = 1;
var reset = document.querySelector("button");


function clickedSquare(e) {

    if (current_player === 1 && e.target.innerHTML === "") {
        e.target.innerHTML = "X";
        current_player = 2;
    } else if (e.target.innerHTML === "") {

        e.target.innerHTML = "O";
        current_player = 1;
    }
    checkForWinner();
    checkCAT()

}


// CHECK FOR CAT!!!
function checkCAT() {
    var iscatflag = true;
    for (i = 0; i < gameSpaces.length; i++) {
        if (gameSpaces[i].innerHTML === "") {
            iscatflag = false;

        }
    }

    if (iscatflag === true )
    {
        alert("CAT!!!!")
    }
}


// Add a click event listener for each game space
for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}


//winner function

function checkForWinner() {
    console.log('Checking for winner');
    if ((gameSpaces[0].innerText === gameSpaces[1].innerText && gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText === "X")
        || (gameSpaces[3].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === "X")
        || (gameSpaces[6].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
        || (gameSpaces[0].innerText === gameSpaces[3].innerText && gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "X")
        || (gameSpaces[1].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === "X")
        || (gameSpaces[2].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
        || (gameSpaces[0].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
        || (gameSpaces[2].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "X")) {
        alert("X wins");
        return false;
    } else if ((gameSpaces[0].innerText === gameSpaces[1].innerText && gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText === "O")
        || (gameSpaces[3].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === "O")
        || (gameSpaces[6].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
        || (gameSpaces[0].innerText === gameSpaces[3].innerText && gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "O")
        || (gameSpaces[1].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === "O")
        || (gameSpaces[2].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
        || (gameSpaces[0].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
        || (gameSpaces[2].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "O")) {
        alert("O wins");
        return false;
    }


}


// RESET BOARD FUNCTION

reset.onclick = function () {
    for (i = 0; i < gameSpaces.length; i++)

        gameSpaces[i].innerHTML = "";
};










