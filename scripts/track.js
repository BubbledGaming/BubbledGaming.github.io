const trackInput = document.getElementById("trackInput");
const disc = document.getElementById("discImage");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioSource2 = document.getElementById("audioPlayer2Source");
const flashWrapper = document.getElementById("flashWrapper");
const pulseWrapper = document.getElementById("pulseWrapper");

const tracks = [
    //[audio, image]
    [null,                      "images/unlabeled_disc.png"], //unselectable
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/001TheFinalStrike.ogg",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/002Ambiusan.ogg",                         "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/003TheUnknownOne.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/004Sharan.ogg",                           "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/005ForgottenVoid.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/006BeamOfKomZeka.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/007RegrowingTheWasteland.ogg",            "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/008Takora.ogg",                           "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/009CallofDarkness.ogg",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/010ItsOver.ogg",                          "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/011Trokan.ogg",                           "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/012WhenARealmDies.ogg",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/013VoidCorruption.ogg",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/014TheLastSnow.ogg",                      "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/015SheralienceZone.ogg",                  "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/016Seliric.ogg",                          "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/017Suffer.ogg",                           "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/018ComputerizedFate.ogg",                 "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/019EyeOfRuaria.ogg",                      "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/020TorokasReturn.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/021PiercingImportation.ogg",              "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/022EndOfWastaria.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/023EnteringHyperWarp.ogg",                "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/024Blazes.ogg",                           "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/025BlazingHeat.ogg",                      "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/026BetweenWorlds.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/027DevourersArrival.ogg",                 "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/028RelosVengence.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/029NightlyActivities.ogg",                "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/030TheRestingPlace.ogg",                  "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/031CliffOfSorrows.ogg",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/032FadedHope.ogg",                        "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/033KaeursWrath.ogg",                      "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/034RegretAndFear.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/035Gorulahn.ogg",                         "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/36BeamOfKomZekaRemake",                   "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/037Swelden.ogg",                          "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/038ChristmasSong.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/039LastTime.ogg",                         "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/040NightlyInactivites.ogg",               "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/041CorruptersReturn.ogg",                 "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/042TheCorruptGod.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/043BeamOfKomZekaFirstAppearance.ogg",     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/044StormForge.ogg",                       "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/045RatHunt.ogg",                          "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/046LossOfCompany.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/047ImNotDead.ogg",                        "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/048InvertBubblesTheme.ogg",               "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/049OldUntitled1.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/050OldUntitled2.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/051OldUntitled3.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/052OldUntitled4.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/053BreakingTheSilence.ogg",               "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/054TheLastSnow2.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/055InteruniversalSpace.ogg",              "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/056TakorsDeath.ogg",                      "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/057Loss.ogg",                             "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/058OldUntitled5.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/059OldUntitled6.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/060OldUntitled7.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/061OldUntitled8.ogg",                     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/062Corrosphir.ogg",                       "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/063VoitariumCrossing.ogg",                "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StaticNoData.ogg",                                 "images/unlabeled_disc.png"]
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