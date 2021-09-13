let cells = document.querySelectorAll(".row > div")
const turns = 0;
const X_class = "X";
const O_class = "O";
const resetButton = document.getElementById("reset-button");
const winningBox = document.getElementById("winning-message");
const win_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

resetButton.addEventListener("click", function () {
    window.location.reload();
});



for (let i = 0; i < winningCombos.length; i++) {
cellsArray.push(cells[i]);
function X_class () {
    
}
};



function cellClicked(event) {

    
    event.target.textContent = "X";
    //event.target.textContent = "O"
   // switchTurns();

};
//function checkWin()
//    for (let i = 0; i < winningBox.length; i++) {
 //   cells[i].addEventListener("click", cellClicked, {once: true})
//};
    

//--WINNNING COMBINATIONS
//--place X or O
//--check for win 
//--check for draw 
//--switch turns
//-- add reset button 
