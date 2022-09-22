const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

$('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// loading animation
window.addEventListener('load', (event) => {
  $('.loading').style.display = "none"
});

// SLIDER
var swiper1 = new Swiper(".swiper-top-stream", {
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // auto
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-custom-next',
        prevEl: '.swiper-button-custom-prev',
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
        740: {
        slidesPerView: 3,
        spaceBetween: 4
        },
        1023: {
        slidesPerView: 3,
        spaceBetween: 10
        }
    }
});
