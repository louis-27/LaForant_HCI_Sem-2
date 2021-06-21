// Dropdown Menu at Navigation Bar
let toggleBtn = document.getElementById('hamburger-logo');
let toggleState = false;

toggleBtn.addEventListener('click', () => {
    let element = document.getElementById('nav-menu');

    if (toggleState == false) {
        element.style.display = 'flex';
        toggleState = true;
    } else {
        element.style.display = 'none';
        toggleState = false;
    }
})