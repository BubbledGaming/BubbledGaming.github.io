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
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/036BeamOfKomZekaRemake.ogg",              "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/037Swelden.ogg",                          "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/038ChristmasSong.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/039LastTime.ogg",                         "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/040NightlyInactivities.ogg",              "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/041CorruptersReturn.ogg",                 "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/042TheCorruptGod.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/043BeamOfKomZekaFirstAppearance.ogg",     "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/044StormForge.ogg",                       "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/045RatHunt.ogg",                          "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/046LossOfCompany.ogg",                    "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/047ImNotDead.ogg",                        "images/old_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbum/048InvertBubbledsTheme.ogg",              "images/old_album_disc.png"],
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
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/064StarfadeBeginning.ogg",           "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/065StarfadeMenu.ogg",                "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/066Quazora.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/067Varican.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/068BattleOfDrones.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/069Desertalis.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/070Detalias.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/071AlienWaves.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/072SharkicAttack.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/073Dorrdeta.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/074SystemDelayed.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/075SolarBlast.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/076HyperJumper.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/077Savarak.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/078Mastermind.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/079Derokus.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/080Danhuerz.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/081Lunarios.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/082Laitoros.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/083MaeukLezola.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/084Barrosak.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/085Abyss.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/086AbyssRemake.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StarfadeAlbum/087IntoDarkness.ogg",                            "images/starfade_album_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/088Disappearance.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/089Memories.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/090Analasisesium.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/091TheFinalStrikeRemake.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/092OldUntitled9.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/093OldUntitled10.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/094SoundAwake.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/095NewYearNewWorld.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/096NewArea.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/097AnguishOfForgetting.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/098CallOfDarkness.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/099Valentine.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/100Stardust.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/101TheWhiteVoid.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/102AnOddProjection.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/103TrokansLullaby.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/104DimensionalWaves.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/105JattsLament.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/106YourContractHasEnded.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/107FindingMyself.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/108FoundMyself.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/109AlienatedOresTrailer.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/110LoALoadingTheme.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/111TheStarfaded.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/112LunariosRemake.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/113AlzoranTerritory.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/114NightmareBubbled.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/115FallenStar.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/116AbyssIntro.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/117AbyssalStarReunion.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/118Seliric.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/119Rediscovered.ogg",                            "images/old_albumtwo_disc.png"],
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/OldAlbumB/120MissionSuccessStarfade.ogg",                            "images/old_albumtwo_disc.png"],    
    ["https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/StaticNoData.ogg",                                 "images/unlabeled_disc.png"],
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