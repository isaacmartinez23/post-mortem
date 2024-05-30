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

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}