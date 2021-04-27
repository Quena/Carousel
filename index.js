const images = document.getElementsByClassName('carousel-image')
let imagePosition = 0 //starting index of carousel
const totalImages = images.length

const nextButton = document.getElementById("next-button")
const prevButton = document.getElementById("prev-button")

nextButton.addEventListener("click", nextSlide)
prevButton.addEventListener("click", previousSlide)

function hideAll(){
    for(let i = 0; i < totalImages; i++){
        images[imagePosition].classList.remove("visible-image")
        images[imagePosition].classList.add("hidden-image")
    }
}

function nextSlide() {
    hideAll()
    if (imagePosition === totalImages - 1) {
        imagePosition = 0
    } else {
        imagePosition++
    }
    images[imagePosition].classList.add("visible-image")
}

function previousSlide() {
    hideAll()
    if (imagePosition === 0) {
    imagePosition = totalImages -1
    } else {
    imagePosition--
    }
    images[imagePosition].classList.add("visible-image")
}