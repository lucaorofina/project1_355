const heroImage = document.querySelector('.hero-image')

const background = ["background-image: url('images/cat-hero.jpeg');",
                    "background-image: url('images/b2.jpg');",
                    "background-image: url('images/b3.jpg');",
                    "background-image: url('images/b4.jpg');",
                    "background-image: url('images/b5.jpg');",
                    "background-image: url('images/b6.webp');",]
let index = 1

function updateImage() {
    heroImage.style = background[index]

    index++

    if(index > background.length-1) {
        index = 0
    }
}

setInterval(updateImage, 10000)
