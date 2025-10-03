const trackInput = document.getElementById("trackInput");
const disc = document.getElementById("discImage");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioSource2 = document.getElementById("audioPlayer2Source");
const flashWrapper = document.getElementById("flashWrapper");
const pulseWrapper = document.getElementById("pulseWrapper");

const tracks = [
    //[audio, image]
    [null,                      "images/unlabeled_disc.png"], //unselectable
    ["OldAlbum/001TheFinalStrike.ogg",                   "radio/images/old_album_disc.png"],
    ["OldAlbum/002Ambiusan.ogg",                         "radio/images/old_album_disc.png"],
    ["OldAlbum/003TheUnknownOne.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/004Sharan.ogg",                           "radio/images/old_album_disc.png"],
    ["OldAlbum/005ForgottenVoid.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/006BeamOfKomZeka.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/007RegrowingTheWasteland.ogg",            "radio/images/old_album_disc.png"],
    ["OldAlbum/008Takora.ogg",                           "radio/images/old_album_disc.png"],
    ["OldAlbum/009CallofDarkness.ogg",                   "radio/images/old_album_disc.png"],
    ["OldAlbum/010ItsOver.ogg",                          "radio/images/old_album_disc.png"],
    ["OldAlbum/011Trokan.ogg",                           "radio/images/old_album_disc.png"],
    ["OldAlbum/012WhenARealmDies.ogg",                   "radio/images/old_album_disc.png"],
    ["OldAlbum/013VoidCorruption.ogg",                   "radio/images/old_album_disc.png"],
    ["OldAlbum/014TheLastSnow.ogg",                      "radio/images/old_album_disc.png"],
    ["OldAlbum/015SheralienceZone.ogg",                  "radio/images/old_album_disc.png"],
    ["OldAlbum/016Seliric.ogg",                          "radio/images/old_album_disc.png"],
    ["OldAlbum/017Suffer.ogg",                           "radio/images/old_album_disc.png"],
    ["OldAlbum/018ComputerizedFate.ogg",                 "radio/images/old_album_disc.png"],
    ["OldAlbum/019EyeOfRuaria.ogg",                      "radio/images/old_album_disc.png"],
    ["OldAlbum/020TorokasReturn.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/021PiercingImportation.ogg",              "radio/images/old_album_disc.png"],
    ["OldAlbum/022EndOfWastaria.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/023EnteringHyperWarp.ogg",                "radio/images/old_album_disc.png"],
    ["OldAlbum/024Blazes.ogg",                           "radio/images/old_album_disc.png"],
    ["OldAlbum/025BlazingHeat.ogg",                      "radio/images/old_album_disc.png"],
    ["OldAlbum/026BetweenWorlds.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/027DevourersArrival.ogg",                 "radio/images/old_album_disc.png"],
    ["OldAlbum/028RelosVengence.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/029NightlyActivities.ogg",                "radio/images/old_album_disc.png"],
    ["OldAlbum/030TheRestingPlace.ogg",                  "radio/images/old_album_disc.png"],
    ["OldAlbum/031CliffOfSorrows.ogg",                   "radio/images/old_album_disc.png"],
    ["OldAlbum/032FadedHope.ogg",                        "radio/images/old_album_disc.png"],
    ["OldAlbum/033KaeursWrath.ogg",                      "radio/images/old_album_disc.png"],
    ["OldAlbum/034RegretAndFear.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/035Gorulahn.ogg",                         "radio/images/old_album_disc.png"],
    ["OldAlbum/036BeamOfKomZekaRemake.ogg",              "radio/images/old_album_disc.png"],
    ["OldAlbum/037Swelden.ogg",                          "radio/images/old_album_disc.png"],
    ["OldAlbum/038ChristmasSong.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/039LastTime.ogg",                         "radio/images/old_album_disc.png"],
    ["OldAlbum/040NightlyInactivities.ogg",              "radio/images/old_album_disc.png"],
    ["OldAlbum/041CorruptersReturn.ogg",                 "radio/images/old_album_disc.png"],
    ["OldAlbum/042TheCorruptGod.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/043BeamOfKomZekaFirstAppearance.ogg",     "radio/images/old_album_disc.png"],
    ["OldAlbum/044StormForge.ogg",                       "radio/images/old_album_disc.png"],
    ["OldAlbum/045RatHunt.ogg",                          "radio/images/old_album_disc.png"],
    ["OldAlbum/046LossOfCompany.ogg",                    "radio/images/old_album_disc.png"],
    ["OldAlbum/047ImNotDead.ogg",                        "radio/images/old_album_disc.png"],
    ["OldAlbum/048InvertBubbledsTheme.ogg",              "radio/images/old_album_disc.png"],
    ["OldAlbum/049OldUntitled1.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/050OldUntitled2.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/051OldUntitled3.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/052OldUntitled4.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/053BreakingTheSilence.ogg",               "radio/images/old_album_disc.png"],
    ["OldAlbum/054TheLastSnow2.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/055InteruniversalSpace.ogg",              "radio/images/old_album_disc.png"],
    ["OldAlbum/056TakorsDeath.ogg",                      "radio/images/old_album_disc.png"],
    ["OldAlbum/057Loss.ogg",                             "radio/images/old_album_disc.png"],
    ["OldAlbum/058OldUntitled5.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/059OldUntitled6.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/060OldUntitled7.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/061OldUntitled8.ogg",                     "radio/images/old_album_disc.png"],
    ["OldAlbum/062Corrosphir.ogg",                       "radio/images/old_album_disc.png"],
    ["OldAlbum/063VoitariumCrossing.ogg",                "radio/images/old_album_disc.png"],
    ["StarfadeAlbum/064StarfadeBeginning.ogg",           "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/065StarfadeMenu.ogg",                "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/066Quazora.ogg",                     "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/067Varican.ogg",                     "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/068BattleOfDrones.ogg",              "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/069Desertalis.ogg",                  "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/070Detalias.ogg",                    "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/071AlienWaves.ogg",                  "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/072SharkicAttack.ogg",               "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/073Dorrdeta.ogg",                    "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/074SystemDelayed.ogg",               "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/075SolarBlast.ogg",                  "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/076HyperJumper.ogg",                 "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/077Savarak.ogg",                     "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/078Mastermind.ogg",                  "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/079Derokus.ogg",                     "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/080Danhuerz.ogg",                    "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/081Lunarios.ogg",                    "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/082Laitoros.ogg",                    "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/083MaeukLezola.ogg",                 "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/084Barrosak.ogg",                    "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/085Abyss.ogg",                       "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/086AbyssRemake.ogg",                 "radio/images/starfade_album_disc.png"],
    ["StarfadeAlbum/087IntoDarkness.ogg",                "radio/images/starfade_album_disc.png"],
    ["OldAlbumB/088Disappearance.ogg",                   "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/089Memories.ogg",                        "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/090Analasisesium.ogg",                   "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/091TheFinalStrikeRemake.ogg",            "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/092OldUntitled9.ogg",                    "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/093OldUntitled10.ogg",                   "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/094SoundAwake.ogg",                      "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/095NewYearNewWorld.ogg",                 "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/096NewArea.ogg",                         "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/097AnguishOfForgetting.ogg",             "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/098CallOfDarkness.ogg",                  "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/099Valentine.ogg",                       "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/100Stardust.ogg",                        "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/101TheWhiteVoid.ogg",                    "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/102AnOddProjection.ogg",                 "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/103TrokansLullaby.ogg",                  "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/104DimensionalWaves.ogg",                "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/105JattsLament.ogg",                     "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/106YourContractHasEnded.ogg",            "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/107FindingMyself.ogg",                   "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/108FoundMyself.ogg",                     "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/109AlienatedOresTrailer.ogg",            "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/110LoALoadingTheme.ogg",                 "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/111TheStarfaded.ogg",                    "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/112LunariosRemake.ogg",                  "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/113AlzoranTerritory.ogg",                "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/114NightmareBubbled.ogg",                "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/115FallenStar.ogg",                      "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/116AbyssIntro.ogg",                      "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/117AbyssalStarReunion.ogg",              "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/118Seliric.ogg",                         "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/119Rediscovered.ogg",                    "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumB/120MissionSuccessStarfade.ogg",          "radio/images/old_albumtwo_disc.png"],
    ["OldAlbumC/121TraversingThrough.ogg",               "radio/images/old_albumthree_disc.png"],  
    ["OldAlbumC/122UnknownDepths.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/123TheLullabyOfAbsence.ogg",             "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/124LowLunarOrbit.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/125AfterDark.ogg",                       "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/126AWearySuccess.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/127SystemDown.ogg",                      "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/128SpaceConfinement.ogg",                "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/129DistantPlanet.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/130DarkForged.ogg",                      "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/131OpportunityToStrike.ogg",             "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/132Starmaps.ogg",                        "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/133PlanetsNitrogen.ogg",                 "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/134Disoriented.ogg",                     "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/135VirtuallyVisual.ogg",                 "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/136FalsePromisesAndBetrayal.ogg",        "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/137ALXEncounter.ogg",                    "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/138Aftermath.ogg",                       "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/139IsleOfNightmares.ogg",                "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/140Unsatisfied.ogg",                     "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/141RequiringMore.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/142RaceToTheStars.ogg",                  "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/143InsectThought.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/144SelfReflection.ogg",                  "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/145CavernousEmptiness.ogg",              "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/146Faultline.ogg",                       "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/147MothsLullaby.ogg",                    "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/148Escape.ogg",                          "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/149Awakening.ogg",                       "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/150Resting.ogg",                         "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/151Infiltration.ogg",                    "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/152FittingIn.ogg",                       "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/153OldUntitled11.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/154OldUntitled12.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/155OldUntitled13.ogg",                   "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/156ByTheWater.ogg",                      "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/157OriginalStarfadeIntroRemake.ogg",     "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/158QuietRemorse.ogg",                    "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/159WaxingMoon.ogg",                      "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/160Overcharged.ogg",                     "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/161Seliric.ogg",                         "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/162Archway.ogg",                         "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/163PlainsOfSolace.ogg",                  "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/164Phantasmagoria.ogg",                  "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/165BrinkOfCancellation.ogg",             "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/166SkiesOfConsolation.ogg",              "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/167Plazmlyte.ogg",                       "radio/images/old_albumthree_disc.png"],
    ["OldAlbumC/168Dependent.ogg",                       "radio/images/old_albumthree_disc.png"],
    ["OldAlbumD/169CloudedRealms.ogg",                   "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/170ForestSunrise.ogg",                   "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/171LividAgitation.ogg",                  "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/172BunnyMeadow.ogg",                     "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/173Frostbyte.ogg",                       "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/174Abandoned.ogg",                       "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/175ThePath.ogg",                         "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/176DrowningInToxicity.ogg",              "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/177Repetitive.ogg",                      "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/178GentleStars.ogg",                     "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/179NightOwlsLullaby.ogg",                "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/180EmptySpace.ogg",                      "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/181Equinox.ogg",                         "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/182CloudWatcher.ogg",                    "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/183OverclockedRetaliation.ogg",          "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/184RedroofAwning.ogg",                   "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/185Duskgrove.ogg",                       "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/186DropletOfTheSky.ogg",                 "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/187Outside.ogg",                         "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/188Hytar.ogg",                           "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/189Arenas.ogg",                          "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/190LunarGateway.ogg",                    "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/191Satellite.ogg",                       "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/192Resolve.ogg",                         "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/193Unwanted.ogg",                        "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/194Ultimatum.ogg",                       "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/195Downward.ogg",                        "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/196Worm.ogg",                            "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/197OutInTheOpen.ogg",                    "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/198UnderTheWaves.ogg",                   "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/199Forward.ogg",                         "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/200Forge.ogg",                           "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/201OverYonder.ogg",                      "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/202ItsAQuietTownNow.ogg",                "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/203Late.ogg",                            "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/204Kozirium.ogg",                        "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/205WorldConsumed.ogg",                   "radio/images/old_albumfour_disc.png"],
    ["OldAlbumD/206EndOfTheWorld.ogg",                   "radio/images/old_albumfour_disc.png"],
    ["StaticNoData.ogg",                                 "radio/images/unlabeled_disc.png"]
];
console.log(tracks.length - 2)

function changeAudioTrack() {
    var trackNumber = Math.abs(parseInt(trackInput.value)) || 1;
    trackNumber = Math.min(trackNumber,tracks.length-1) //Limit
    const selectedTrack = "https://github.com/BubbledGaming/Bubbletune-Radio-Music/raw/main/Music/" + tracks[trackNumber][0];

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

    var imageUrl = tracks[numberInput][1] || tracks[0][1];
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