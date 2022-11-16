'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}

let scrollToProfile = select("#scroll");
let aboutPage = select("#about");

onEvent('click', scrollToProfile, function() {
    aboutPage.scrollIntoView();
});


let menuItem = document.querySelectorAll('.menu-item');
let menuBox = select('.menu-box');
