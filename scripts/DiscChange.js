function changeImage() {
    var imageElement = document.getElementById("discImage");
    var numberInput = document.getElementById("trackInput").value;

    var imageUrls = [
        "Images/Unlabeled Disc.png",
        "Images/Nautical_Dusk Disc.png",
        "Images/Old_Album Disc.png"
    ];

    var repeatCount = 40 - 2
    var repeatImage = "Images/Old_Album Disc.png"

    for (let index = 0; index < repeatCount; index++) {
        imageUrls.push(repeatImage)
    }

    var imageUrl = imageUrls[numberInput] || imageUrls[0];
    imageElement.src = imageUrl;
}