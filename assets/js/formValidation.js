// Form validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const gender = document.getElementById('gender');
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
    const dateValue = dob.value;
    const validDate = Date.parse(dateValue);
    let successCount = 0;

    // Username
    if (usernameValue === "") {
        setError(username, "Username cannot be empty");
    } else if (usernameValue.length < 3) {
        setError(username, "Username must contain 3 or more characters");
    } else {
        setSuccess(username);
        successCount += 1;
    }

    // Email
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
        successCount += 1;
    }

    // Password
    if (passwordValue === "") {
        setError(password, "Password required");
    } else if (passwordValue.length < 8) {
        setError(password, "Password's length must be equal or more than 8 characters");
    } else {
        setSuccess(password);
        successCount += 1;
    }

    // Gender
    if (!genderM.checked && !genderF.checked) {
        setError(gender, "You haven't checked the Gender button");
    } else {
        removeError(gender);
        successCount += 1;
    }

    // Date
    if (dateValue === "") {
        setError(dob, "You haven't filled your Date of Birth");
    } else if (isNaN(validDate)) {
        setError(dob, "Invalid date format");
    } else {
        removeError(dob);
        successCount += 1;
    }

    // Nationality
    if (nationality.value === "") {
        setError(nationality, "Select your nationality");
    } else {
        removeError(nationality);
        successCount += 1;
    }

    // Agreement
    if (!agreement.checked) {
        setError(agreement, "You haven't checked the Agree button");
    } else {
        removeError(agreement);
        successCount += 1;
    }


    // Pre-Registration Success
    if (successCount === 7) {
        alert("You've successfully registered for LaForant! You'll be notified when the next beta test is scheduled.");
    }
}

let removeError = (input) => {
    input.parentElement.className = 'input-section';
}

let setError = (input, message) => {
    const inpSection = input.parentElement;
    const errorMsg = inpSection.querySelector('.error-msg');

    inpSection.className = 'input-section error';
    errorMsg.innerText = message;
}

let setSuccess = (input) => {
    const inpSection = input.parentElement;
    inpSection.className = 'input-section success';
}