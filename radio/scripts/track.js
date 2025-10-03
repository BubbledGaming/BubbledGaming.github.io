const trackInput = document.getElementById("trackInput");
const disc = document.getElementById("discImage");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioSource2 = document.getElementById("audioPlayer2Source");
const flashWrapper = document.getElementById("flashWrapper");
const pulseWrapper = document.getElementById("pulseWrapper");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeSlider = document.getElementById("volumeSlider");
const trackTitle = document.getElementById("trackTitle");
const trackAlbum = document.getElementById("trackAlbum");
const trackDate = document.getElementById("trackDate");

let tracks = [];

// Load tracks from JSON and initialize UI
fetch('radio/tracks.json')
    .then(res => res.json())
    .then(data => {
        tracks = data;
        // set input bounds
        const maxId = Math.max(1, tracks.length - 1);
        trackInput.min = 1;
        trackInput.max = maxId;
        trackInput.value = 1;
        changeImage();
        // apply initial volume from slider if present
        if (volumeSlider) {
            audioPlayer2.volume = parseFloat(volumeSlider.value);
        }
    })
    .catch(err => {
        console.error('Failed to load tracks.json', err);
    });

function changeAudioTrack() {
    if (!tracks || tracks.length === 0) {
        alert('Track list not loaded yet.');
        return;
    }
    var trackNumber = Math.abs(parseInt(trackInput.value)) || 9001;
    const trackObj = tracks[trackNumber] || {};

    // Update title and album display
    trackTitle.textContent = trackObj.title || 'Invalid Track';
    trackAlbum.textContent = trackObj.album || 'Invalid Album';
    trackDate.textContent = trackObj.date || 'Invalid Date';

    // audio may be null when not provided; keep full URL if present
    const selectedTrack = trackObj.audio ? ("https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/" + trackObj.audio) : null;

    audioSource2.src = selectedTrack || '';
    audioPlayer2.load();
    if (selectedTrack != null) {
        audioPlayer2.play();
        audioPlayer2.addEventListener("ended", function () {
            this.currentTime = 0;
            this.play();
        });
        flashWrapper.classList.remove('flash');
        setTimeout(function () {flashWrapper.classList.add('flash');}, 10)
    } else {
        disc.style.animationPlayState = 'paused';
        pulseWrapper.classList.remove('pulsing')
        alert("This disc does not appear to have audio.")
    }
    changeImage();
}

// Play/Pause button behavior
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
        if (audioPlayer2.paused) {
            audioPlayer2.play();
        } else {
            audioPlayer2.pause();
        }
    });
}

// Update button text based on audio state
audioPlayer2.addEventListener('play', function () {
    if (playPauseBtn) playPauseBtn.textContent = 'Pause';
});
audioPlayer2.addEventListener('pause', function () {
    if (playPauseBtn) playPauseBtn.textContent = 'Play';
});

// Volume slider control
if (volumeSlider) {
    volumeSlider.addEventListener('input', function (e) {
        const v = parseFloat(e.target.value);
        audioPlayer2.volume = isNaN(v) ? 1 : v;
    });
}

function changeImage() {
    var imageElement = document.getElementById("discImage");
    var numberInput = document.getElementById("trackInput").value;
    numberInput = Math.abs(parseInt(numberInput)) || 1
    numberInput = Math.min(numberInput,tracks.length-1) //Limit
    var imageUrl = (tracks[numberInput] && tracks[numberInput].image) ? tracks[numberInput].image : (tracks[0] && tracks[0].image) || '';
    imageElement.src = imageUrl;
}

audioPlayer2.onplay = function(){
    disc.style.animationPlayState = 'running';
    pulseWrapper.classList.add('pulsing')
    disc.classList.add('rotating');
}
audioPlayer2.onpause = function(){
    disc.style.animationPlayState = 'paused';
    pulseWrapper.classList.remove('pulsing')
    disc.classList.remove('rotating');
}