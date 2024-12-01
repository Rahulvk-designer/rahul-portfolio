const toggleButton = document.getElementById('toggle');
const navLinks = document.getElementById('right-toggle');
toggleButton.addEventListener('click',() => {
    navLinks.classList.toggle('active');
})