const playButton = document.getElementById("play")
const audioPlayer = document.getElementById("audioPlayer")

playButton.addEventListener("click", playRandomTrack);

function playRandomTrack() {
    const tracks = [
        "audio/Nautical Dusk.mp3",
        "audio/infiltrate.mp3"
    ];

    const randomIndex = Math.floor(Math.random() * tracks.length);
    const selectedTrack = tracks[randomIndex];

    audioPlayer.src = selectedTrack;
    audioPlayer.play();
}