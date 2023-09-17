const textButton = document.getElementById("textButton");
const displayText = document.getElementById("displayText");

textButton.addEventListener("click", function () {
    displayText.textContent = "hello!";
});