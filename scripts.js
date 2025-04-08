document.addEventListener('DOMContentLoaded', function () {
    // GSAP Timeline for smooth scroll animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            markers: false
        }
    });

    // Animate the poem text
    tl.to('.dikt-line', {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: 'power4.out',
        duration: 1.5
    });
});