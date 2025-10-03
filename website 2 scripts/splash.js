setTimeout(function () {
    const splash = document.querySelector('.splash');
    const postsplash = document.querySelector('.post-splash');
    splash.style.opacity = 0;
    splash.style.transform = 'scale(4)';
    setTimeout(function () {
        splash.style.display = 'none';
        postsplash.style.display = document.querySelector('.centered-content').style.display
    }, 2000);
}, 2500);
