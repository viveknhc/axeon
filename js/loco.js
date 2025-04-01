document.addEventListener('DOMContentLoaded', function () {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true, // Enable smooth scrolling
        smartphone:{smooth:false},
        tablet: { smooth: true },
    });
    new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
});

