
document.getElementById('closeButtonNav').addEventListener('click', function() {
    var navbarChild = document.getElementById('navbar-child-mobile-ui');
    navbarChild.style.display = 'none';
});

document.getElementById('openButtonNav').addEventListener('click', function() {
    var navbarChild = document.getElementById('navbar-child-mobile-ui');
    navbarChild.style.display = 'flex';
});

// JavaScript to dynamically change the display property
window.addEventListener('DOMContentLoaded', function() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Check the initial screen width and update display property
    if (screenWidth > 550) {
        document.querySelector('.navbar-child-mobile-ui').style.display = 'none';
    }

    // Update display property on window resize
    window.addEventListener('resize', function() {
        screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth > 550) {
            document.querySelector('.navbar-child-mobile-ui').style.display = 'none';
        }
    });
});