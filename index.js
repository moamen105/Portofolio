const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;

function scrollToNextSection() {
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY;
    const windowHeight = window.innerHeight;

    if (mouseY <= 0) {
        scrollToNextSection();
    }
});
