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