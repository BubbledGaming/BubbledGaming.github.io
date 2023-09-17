const discImage = document.getElementById("discImage");

trackInput.addEventListener("input", trackChange);

function trackChange() {
    const trackNumber = parseInt(trackInput.value);
    if (trackNumber >= 2 && trackNumber <= 40) {
        spinImage();
    }
}

function spinImage() {
    discImage.style.transform = "rotate(360deg)";
    setTimeout(() => {
        discImage.style.transform = "rotate(0deg)";
    }, 500)
}