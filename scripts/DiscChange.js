function changeImage() {
    var imageElement = document.getElementById("discImage");
    var numberInput = document.getElementById("trackInput").value;

    var imageUrls = [
        "images/unlabeled_disc.png",
        "images/nautical_dusk_disc.png",
        "images/old_album_disc.png"
    ];

    var repeatCount = 40 - 2
    var repeatImage = "images/old_album_disc.png"

    for (let index = 0; index < repeatCount; index++) {
        imageUrls.push(repeatImage)
    }

    var imageUrl = imageUrls[numberInput] || imageUrls[0];
    imageElement.src = imageUrl;
}