const trackInput = document.getElementById("trackInput");
const disc = document.getElementById("discImage");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioSource2 = document.getElementById("audioPlayer2Source");
const flashWrapper = document.getElementById("flashWrapper");
const pulseWrapper = document.getElementById("pulseWrapper");

const tracks = [
    //[audio, image]
    [null,                      "images/unlabeled_disc.png"], //unselectable
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/TheFinalStrike.ogg",           "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/Ambiusan.ogg",                 "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/TheUnknownOne.ogg",            "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/Sharan.ogg",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/BeamofKomZeka.ogg",            "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/RegrowingTheWasteland.ogg",    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/Takora.ogg",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/CallofDarkness.ogg",           "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/Trokan.ogg",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/WhenARealmDies.ogg",           "images/old_album_disc.png"]
];

function changeAudioTrack() {
    var trackNumber = parseInt(trackInput.value);
    trackNumber = Math.min(trackNumber,tracks.length-1) //Limit
    const selectedTrack = tracks[trackNumber][0];

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
    numberInput = Math.min(numberInput,tracks.length-1) //Limit

    var imageUrl = tracks[numberInput][1] || tracks[0][1];
    imageElement.src = imageUrl;
}

audioPlayer2.onplay = function(){
    disc.style.animationPlayState = 'running';
    pulseWrapper.classList.add('pulsing')
}
audioPlayer2.onpause = function(){
    disc.style.animationPlayState = 'paused';
    pulseWrapper.classList.remove('pulsing')
}