// Dropdown Menu at Navigation Bar
let toggleState = false;

let toggleNavDropdown = () => {
    let element = document.getElementById('nav-menu');

    if (toggleState == true) {
        element.style.display = 'none';
        toggleState = false;
    } else {
        element.style.display = 'flex';
        toggleState = true;
    }
}

// Image Slider (JQuery)
$(function () {
    let slides = $('.agent-image');
    slides.hide();

    let agentDesc = $('.agents-desc');
    agentDesc.hide();

    let currId = 0;
    let minId = 0;
    let maxId = slides.length - 1;

    slides.eq(0).show();
    agentDesc.eq(0).show();

    let rightArrow = $('#slide-right');
    let leftArrow = $('#slide-left');

    rightArrow.click(() => {
        slides.eq(currId).hide();
        agentDesc.eq(currId).hide();
        currId++;
        if (currId > maxId) {
            currId = minId;
        }
        slides.eq(currId).show();
        agentDesc.eq(currId).show();
    })

    leftArrow.click(() => {
        slides.eq(currId).hide();
        agentDesc.eq(currId).hide();
        currId--;
        if (currId < minId) {
            currId = maxId;
        }
        slides.eq(currId).show();
        agentDesc.eq(currId).show();
    })

})

// // Form validation
// let validate = () => {
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirm-password');
const genderM = document.getElementById('male');
const genderF = document.getElementById('female');
const dob = document.getElementById('dob');
const nationality = document.getElementById('country');
const agreement = document.getElementById('agreement');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

let validateInputs = () => {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    // Username validation
    if (usernameValue === "") {
        setError(username, "Username cannot be empty");
    } else if (usernameValue.length < 3) {
        setError(username, "Username must contain 3 or more characters");
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailValue === "") {
        setError(email, "Email cannot be empty");
    } else {

    }

    // Password validation
    if (passwordValue) {

    }
    // Password confirmation validation
    if (passwordConfirmationValue === passwordValue) {
        setSuccess(passwordConfirmation);
    } else {
        setError(passwordConfirmation, "Confirmation password must be identical with the password above");
    }



    // Agreement
    if (!agreement.checked) {

    }
}
// }

let isEmail = (email) => {

}

let setError = (input, message) => {
    const inpSection = input.parentElement;
    const errorMsg = inpSection.getElementsByClassName('error-msg');

    inpSection.className = 'input-section error';
    errorMsg.innerText = message;
}

let setSuccess = (input) => {
    const inpSection = input.parentElement;
    inpSection.className = 'input-section success';
}