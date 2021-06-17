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

    let maps = $('.maps-image');
    maps.hide();

    let mapsDesc = $('.maps-desc');
    mapsDesc.hide();

    let currId = 0;
    let minId = 0;
    let maxId = maps.length - 1;

    maps.eq(0).show();
    mapsDesc.eq(0).show();

    let rightArrow = $('#slide-right');
    let leftArrow = $('#slide-left');

    rightArrow.click(() => {
        maps.eq(currId).hide();
        mapsDesc.eq(currId).hide();
        currId++;
        if (currId > maxId) {
            currId = minId;
        }
        maps.eq(currId).show();
        mapsDesc.eq(currId).show();
    })

    leftArrow.click(() => {
        maps.eq(currId).hide();
        mapsDesc.eq(currId).hide();
        currId--;
        if (currId < minId) {
            currId = maxId;
        }
        maps.eq(currId).show();
        mapsDesc.eq(currId).show();
    })

})