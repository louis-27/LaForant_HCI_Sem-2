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