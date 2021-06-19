// Form validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const genderM = document.getElementById('male');
const genderF = document.getElementById('female');
const dob = document.getElementById('dob');
const nationality = document.getElementById('country');
const agreement = document.getElementById('agreement');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

let validateInputs = () => {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

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
    } else if (emailValue.startsWith('.') || emailValue.startsWith('@')) {
        setError(email, "Email must not start with '.' or '@'");
    } else if (emailValue.indexOf('.') === emailValue.length - 1) {
        setError(email, "Email must not end with '.'");
    } else if (!(emailValue.endsWith('@gmail.com'))) {
        setError(email, "Email must end with '@gmail.com'");
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordValue === "") {
        setError(password, "Password required");
    } else if (passwordValue.length < 8) {
        setError(password, "Password's length must be equal or more than 8 characters");
    } else {
        setSuccess(password);
    }

    // Agreement
    if (!agreement.checked) {
        setError(agreement, "You haven't checked the Agree button");
    }

    alert(`Submitted!\n- ${usernameValue}\n- ${emailValue}\n- ${passwordValue}`);
}

let setError = (input, message) => {
    const inpSection = input.parentElement;
    const errorMsg = inpSection.getElementsByClassName('error-msg');

    inpSection.className = 'input-section error';
    errorMsg.innerText = "lawak gaming";
}

let setSuccess = (input) => {
    const inpSection = input.parentElement;
    inpSection.className = 'input-section success';
}