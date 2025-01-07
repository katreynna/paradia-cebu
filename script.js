window.addEventListener('load', function () {
    const scrollRevealOption = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        opacity: 0,
        easing: "ease-in-out",
    };

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 700,
});

ScrollReveal().reveal(".showcase__image img", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".showcase__content h4", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".showcase__content p", {
    ...scrollRevealOption,
    delay: 700,
});

ScrollReveal().reveal(".culture-heading", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".culture-subheading", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".culture-box", {
    ...scrollRevealOption,
    delay: 700,
});

ScrollReveal().reveal(".destination img", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".destination__info h3", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".destination__info p", {
    ...scrollRevealOption,
    delay: 700,
});
ScrollReveal().reveal(".destination__rating", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".main-title", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".main-subheading", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".blog-section", {
    ...scrollRevealOption,
    delay: 700,
});

ScrollReveal().reveal(".contact-header", {
    ...scrollRevealOption,
    delay: 0,
});
ScrollReveal().reveal(".contact-subheader", {
    ...scrollRevealOption,
    delay: 300,
});
ScrollReveal().reveal(".contact-container", {
    ...scrollRevealOption,
    delay: 600,
});

});
