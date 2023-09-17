setTimeout(function () {
    var splash = document.querySelector('.splash');
    var postsplash = document.querySelector('.post-splash');
    splash.style.opacity = 0; // For the smooth fade out transition
    setTimeout(function () {
        splash.style.display = 'none';
        postsplash.style.display = document.querySelector('.centered-content').style.display
    }, 500); // Wait for the transition to finish (0.5 seconds)
}, 2000); // 2000ms = 2 seconds