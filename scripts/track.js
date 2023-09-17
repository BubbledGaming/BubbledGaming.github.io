const trackInput = document.getElementById("trackInput");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioSource2 = document.getElementById("audioPlayer2Source");

function changeAudioTrack() {
    const trackNumber = parseInt(trackInput.value);

    const tracks = [
        "audio/Nautical Dusk.mp3",
        "audio/infiltrate.mp3",
        "audio/Huh.mp3"
    ];

    if (trackNumber > 0 && trackNumber <= tracks.length) {
        const selectedTrack = tracks[trackNumber - 1];
        audioSource2.src = selectedTrack;
        audioPlayer2.load();
        audioPlayer2.play();
        audioPlayer2.addEventListener("ended", function () {
            this.currentTime = 0;
            this.play();
        });
    } else {
        console.log("Invalid Track Number")
    }
    changeImage();
}