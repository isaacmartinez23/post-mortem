'use strict';

// Función para abrir/cerrar el chatbot
var chatbotContainer = document.getElementById("chatbot-container");
var chatbotCircle = document.getElementById("chatbot-circle");
var chatbotOpen = false;

document.getElementById("close-btn").addEventListener("click", function() {
    chatbotOpen = false;
    toggleChatbot();
});

document.getElementById("chatbot-circle").addEventListener("click", function() {
    chatbotOpen = !chatbotOpen; // Alternar entre abierto y cerrado
    toggleChatbot();
});

document.getElementById("send-btn").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    var chatbotMessages = document.getElementById("chatbot-messages");
    
    var userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput;
    chatbotMessages.appendChild(userMessage);
    
    document.getElementById("user-input").value = "";
});

function toggleChatbot() {
    if (chatbotOpen) {
        chatbotContainer.style.display = "block";
        chatbotCircle.style.display = "none";
    } else {
        chatbotContainer.style.display = "none";
        chatbotCircle.style.display = "block";
    }
}
