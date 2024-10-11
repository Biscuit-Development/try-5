// Set the correct password
const correctPassword = "Titanic1912";

function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    if (inputPassword === correctPassword) {
        document.getElementById("chat-popup").style.display = "block";
    } else {
        alert("Incorrect password. Try again!");
    }
}

function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value.trim();

    if (message) {
        // Display the message
        const messageElement = document.createElement("p");
        messageElement.textContent = `You: ${message}`;
        chatBox.appendChild(messageElement);

        // Clear the input field
        chatInput.value = "";

        // Scroll to the bottom of the chat
        chatBox.scrollTop = chatBox.scrollHeight;

        // For now, simulate a response from Mehul
        setTimeout(() => {
            const responseElement = document.createElement("p");
            responseElement.textContent = "Mehul: Thanks for reaching out!";
            chatBox.appendChild(responseElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}
