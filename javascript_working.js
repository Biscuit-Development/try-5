// Password check and popup handling
const correctPassword = "Titanic1912"; // Set your desired password
const submitButton = document.getElementById("submit-button");
const passwordInput = document.getElementById("password-input");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const chatArea = document.getElementById("chat-area");

// Show popup if password is correct
submitButton.onclick = function() {
    if (passwordInput.value === correctPassword) {
        popup.style.display = "block";
        passwordInput.value = ""; // Clear the password field
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// Close the popup
closeButton.onclick = function() {
    popup.style.display = "none";
}

// Handle sending messages
sendButton.onclick = function() {
    const message = messageInput.value;
    if (message) {
        chatArea.value += "You: " + message + "\n"; // Display user's message
        messageInput.value = ""; // Clear input field
    }
}

// Close popup when clicking outside of it
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
