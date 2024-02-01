let boxes = document.querySelectorAll(".box");
let text = true;
let msg = document.getElementById("msg");
let msgCont = document.querySelector(".msg-container");
let newBtn = document.getElementById("newbtn");
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

playGame();

const newGame = () => {
    text = true;
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false; // Enable the boxes for a new game
    }
    msgCont.classList.add("hide");
    playGame();
};
newBtn.addEventListener("click", newGame);
function playGame() {
    boxes.forEach((box) => {
        if (!box.hasEventListener) {
            box.addEventListener("click", () => {
                if (text) {
                    box.innerText = 'O';
                    text = false;
                } else {
                    box.innerText = 'X';
                    text = true;
                }
                box.disabled = true;
                checkWinner();
            });
            box.hasEventListener = true;
        }
    });
}

const boxDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    // msg.textContent = `Congratulations! Winner is ${winner}`;
    if(winner === 'O')
    msg.textContent = `Congratulations! Winner is Player 1`;
    else
    msg.textContent = `Congratulations! Winner is Player 2`;

    msgCont.classList.remove("hide");
    boxDisable();
};

function checkWinner() {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
}