


// Diiferent Scrolls
var swiper = new Swiper(".blogSwiper", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    grabCursor: true,

    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3.2,
            spaceBetween: 30
        }
    }
});





var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {

        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },


        // When window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // When window width is >= 768px
        767: {
            slidesPerView: 1,
            spaceBetween: 30
        },

        999: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }
});



var swiper = new Swiper(".articleSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {

        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },


        // When window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // When window width is >= 768px
        767: {
            slidesPerView: 1,
            spaceBetween: 30
        },

        999: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});



const productSlider = new Swiper(".productSlider", {
    // effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            updateActiveButton(this.activeIndex);
        },
    },
});

const buttons = document.querySelectorAll(".category-btn");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        let index = parseInt(this.dataset.index);
        productSlider.slideTo(index);
        updateActiveButton(index);
    });
});

function updateActiveButton(index) {
    buttons.forEach((btn) => btn.classList.remove("active"));
    buttons[index].classList.add("active");
}

// Set initial active category
updateActiveButton(productSlider.activeIndex);





let images = document.querySelectorAll(".product-image img");
let currentIndex = 0;

function fadeImages() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
}

setInterval(fadeImages, 2000); // Change image every 3 seconds




  

