const trackInput = document.getElementById("trackInput");
const disc = document.getElementById("discImage");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioSource2 = document.getElementById("audioPlayer2Source");
const flashWrapper = document.getElementById("flashWrapper");
const pulseWrapper = document.getElementById("pulseWrapper");

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
    })
    .catch(err => {
        console.error('Failed to load tracks.json', err);
    });

function changeAudioTrack() {
    if (!tracks || tracks.length === 0) {
        alert('Track list not loaded yet.');
        return;
    }
    var trackNumber = Math.abs(parseInt(trackInput.value)) || 1;
    trackNumber = Math.min(trackNumber, tracks.length - 1); // Limit
    const trackObj = tracks[trackNumber] || {};
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