const trackInput = document.getElementById("trackInput");
const disc = document.getElementById("discImage");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioSource2 = document.getElementById("audioPlayer2Source");

const tracks = [
    //[audio, image]
    [null,                      "images/unlabeled_disc.png"], //unselectable
    ["audio/Nautical Dusk.mp3", "images/nautical_dusk_disc.png"],
    ["audio/infiltrate.mp3",    "images/old_album_disc.png"],
    ["audio/Huh.mp3",           "images/old_album_disc.png"]
];

//adds 38 empty disks with the old album image to the end of the tracklist
var repeatCount = 40 - 2
for (let index = 0; index < repeatCount; index++) {
    tracks.push([null,"images/old_album_disc.png"])
}

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
    } else {
        stopDisc();
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
    disc.classList.add('rotating');
}
audioPlayer2.onpause = function(){
    stopDisc();
}

function stopDisc(){
    const computedStyle = window.getComputedStyle(disc);
    const transform = computedStyle.getPropertyValue('transform');
    disc.classList.remove('rotating');
    disc.style.transform = transform;
}