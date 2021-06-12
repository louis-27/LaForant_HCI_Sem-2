// Dropdown Menu at Navigation Bar
let toggleState = false;

let toggleNavDropdown = () => {
    let element = document.getElementById('elementId');

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

    let currId = 0;
    let minId = 0;
    let maxId = slides.length - 1;

    slides.eq(0).show();

    let rightArrow = $('#slide-right');
    let leftArrow = $('#slide-left');

    rightArrow.click(() => {
        slides.eq(currId).hide();
        currId++;
        if (currId > maxId) {
            currId = minId;
        }
        slides.eq(currId).show();
    })

    leftArrow.click(() => {
        slides.eq(currId).hide();
        currId--;
        if (currId < minId) {
            currId = maxId;
        }
        slides.eq(currId).show();
    })

})