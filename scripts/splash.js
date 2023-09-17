setTimeout(function () {
    var splash = document.querySelector('.splash');
    var postsplash = document.querySelector('.post-splash');
    splash.style.opacity = 0; // For the smooth fade out transition
    setTimeout(function () {
        splash.style.display = 'none';
        postsplash.style.display = document.querySelector('.centered-content').style.display
    }, 2000); // Wait for the transition to finish (2 seconds)
}, 2500); // 2000ms = 2.5 seconds