const catImages = ['cat1.png', 'cat2.png', 'cat3.png', 'cat4.png', 'cat5.png', 'cat6.png'];
const words = ['meow', 'merp', 'hmm', '!', ':3', '?'];

let lastWidth = window.innerWidth;
let currentIndex = 0;

function changeCatImageAndWord() {
    const catImage = document.getElementById('catImage');
    const wordDisplay = document.getElementById('wordDisplay');

    currentIndex = (currentIndex + 1) % catImages.length; // Loop through images and words
    catImage.src = catImages[currentIndex];

    wordDisplay.textContent = words[currentIndex];
}

window.addEventListener('resize', () => {
    let newWidth = window.innerWidth;

    if (Math.abs(newWidth - lastWidth) >= 20) {
        changeCatImageAndWord();
        lastWidth = newWidth;
    }
});
