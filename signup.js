document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const playerName = document.getElementById("playerInput").value;
    if (playerName.trim() !== "") {
        // Store player name or perform any necessary actions
        // For simplicity, you can store it in a variable for now
        localStorage.setItem("playerName", playerName);

        // Apply fade-out animation to signup container
        document.querySelector(".signup-container").classList.add("hide");

        // Wait for the animation to complete before redirecting
        setTimeout(() => {
            // Redirect to the game page
            window.location.href = "game.html";
        }, 1000); // Adjust the timeout based on the duration of your fade-out animation
    } else {
        alert("Please enter your name before starting the game.");
    }
});
