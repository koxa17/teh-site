let settings = {
    persist: false,
    create: true,
    openOnFocus: false,
    hidePlaceholder: true,
    plugins: {
        remove_button: {
            title: '',
        }
    },
    onDropdownOpen() {
        console.log('change')
    }
};

const search = new TomSelect("#input-group", settings);

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,

    parallax: true,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
    },

})


swiper.on('beforeTransitionStart', function () {
    lastVisibleSlide()
});

swiper.on('touchStart', function () {
    deleteClassVisivleSlide()
});


let currentLastItemVisible;

function lastVisibleSlide() {
    let slide = document.querySelectorAll('.swiper-slide.swiper-slide-visible')
    slide[slide.length - 1].children[0].classList.add('last')
    currentLastItemVisible = slide[slide.length - 1].children[0]
}

function deleteClassVisivleSlide() {
    if (currentLastItemVisible) {
        currentLastItemVisible.classList.remove('last')
    }
}

lastVisibleSlide()


