const images = document.getElementsByClassName('carousel-image')
let imagePosition = 0 //starting index of carousel
const totalImages = images.length

const nextButton = document.getElementById("next-button")
const prevButton = document.getElementById("prev-button")

nextButton.addEventListener("click", nextSlide)
prevButton.addEventListener("click", previousSlide)

function nextSlide() {
    if (imagePosition === totalImages - 1) {
        imagePosition = 0
    } else {
        imagePosition++
    }
    images[imagePosition].classList.add("visible-image")
}

function previousSlide() {

}