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

        // Make an AJAX request to the server
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/submit-name', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log('Server response:', xhr.responseText);

                try {
                    var response = JSON.parse(xhr.responseText);

                    console.log('Parsed response:', response);

                    if (response.correct !== undefined && response.message !== undefined) {
                        console.log('Server says:', response.message);

                        if (response.correct) {
                            resultMessage.innerHTML = response.message;
                            playSound("correct.mp3");
                        } else {
                            resultMessage.innerHTML = response.message;
                            playSound("error.mp3");
                        }
                    } else {
                        console.error('Invalid server response:', xhr.responseText);
                        resultMessage.innerHTML = "Error processing the name.";
                        playSound("error.mp3");
                    }
                } catch (error) {
                    console.error('Error parsing server response:', error);
                    resultMessage.innerHTML = "Error processing the name.";
                    playSound("error.mp3");
                }
            }
        };
        xhr.send('name=' + encodeURIComponent(nameInput));
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
