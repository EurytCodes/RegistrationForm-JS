// LANDING PAGE TEXT
const text = document.querySelector('.text');

// JOIN US BUTTON
const openBtn = document.querySelector('.open-btn');
const registrationContainer = document.querySelector('.registration-container');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', function(){
    registrationContainer.style.display = 'block';
    closeBtn.style.display = 'block';
    text.style.opacity = '0';
});

closeBtn.addEventListener('click', function(){
    registrationContainer.style.display = 'none';
    text.style.opacity = '1';
});


// REGISTRATION BUTTONS
const logresBox = document.getElementById('logres-box');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');

registerLink.addEventListener('click', function() {
    logresBox.classList.add('active');
});
loginLink.addEventListener('click', function() {
    logresBox.classList.remove('active');
});