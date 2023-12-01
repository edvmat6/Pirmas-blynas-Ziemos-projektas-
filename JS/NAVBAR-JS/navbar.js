
// Open Button
var openButton = document.getElementById('openButtonNav');

// Close Button
var closeButton = document.getElementById('closeButtonNav');

// Main Div
var navbarChildMobileUiDiv1 = document.getElementById('navbar-child-mobile-ui-js');

// Load AS None
navbarChildMobileUiDiv1.style.display = "none";

// Open Mobile Div
openButton.addEventListener('click', function() {
    navbarChildMobileUiDiv1.style.display = "block";
});

// Close Mobile Div
closeButton.addEventListener('click', function() {
    navbarChildMobileUiDiv1.style.display = "none";
});

// Keep Mobile DIv Closed on tablet/dekstop
window.addEventListener('DOMContentLoaded', function() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Check the initial screen width and update display property
    if (screenWidth > 765) {
        document.querySelector('.navbar-child-mobile-ui-div').style.display = 'none';
    }

    // Update display property on window resize
    window.addEventListener('resize', function() {
        screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth > 765) {
            document.querySelector('.navbar-child-mobile-ui-div').style.display = 'none';
        }
    });
});