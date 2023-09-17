const roll = document.getElementById("roll");
const resultParagraph = document.getElementById("result");

roll.addEventListener("click", rollDice);

function rollDice() {
    const rolledNumber = Math.floor(Math.random() * 15) + 1;
    resultParagraph.textContent = "Roll: " + rolledNumber;
}