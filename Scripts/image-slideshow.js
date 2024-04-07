const images = ["Assets/Pics/PicProfile.png", "Assets/Pics/PicPokemonCosplay.jpg", "Assets/Pics/PicUCI.png"];
let currentImageIndex = 0;
const slideshowImage = document.getElementById("slideshow");

function changeImage() {
    slideshowImage.style.opacity = 0; // Fade out current image

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
        slideshowImage.src = images[currentImageIndex]; // Change image source
        slideshowImage.style.opacity = 1; // Fade in new image
    }, 0); // Wait for fade out transition to complete
}

// Initial call to changeImage and set interval for automatic image change
changeImage();
setInterval(changeImage, 5000); // Change image every 5 seconds