document.addEventListener("DOMContentLoaded", function () {
    // Function to play sound
    function playSound(sound) {
        var audio = new Audio(sound);
        audio.play();
    }

    // Function to check the name and display the result
    function checkName() {
        var nameInput = document.getElementById("nameInput").value;
        var resultMessage = document.getElementById("resultMessage");

        if (nameInput.toLowerCase() === "arya") {
            resultMessage.innerHTML = "Ya, you got it!";
            playSound("correct.mp3");
        } else {
            resultMessage.innerHTML = "Try again!";
            playSound("error.mp3");
        }
    }

    // Add event listener for the "Enter" key press
    document.getElementById("nameInput").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            checkName();
        }
    });

    // Add event listener for the check button
    document.getElementById("checkButton").addEventListener("click", checkName);
});
