// navbar scroll

window.addEventListener('scroll', () => {
    document.querySelector('.container-bar').classList.toggle('window-scroll', window.scrollY > 0)
})

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.container', { origin: 'top' });


