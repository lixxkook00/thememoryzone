const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// $('.scroll-to-top').onclick = () => {
//     window.scrollTo({
//         top: 0,
//         left: 100,
//         behavior: 'smooth'
//     });
// }

// loading animation
window.addEventListener('load', (event) => {
  $('.loading-gif').style.display = "none"
  $('.letter-image').classList.add("active")
});

$('.letter-image').onclick = () => {
    $('#loading').classList.add("remove")
}

window.onscroll = function (e) {  
    let distanceFromTop = $('.schedule').getBoundingClientRect().top;
    let heightElement = $('.schedule').clientHeight;

    let thisArea = distanceFromTop+heightElement

    if(distanceFromTop<(window.screen.height/2) && thisArea >0){
        const thisShitPercent = 100-(distanceFromTop/(window.screen.height/2))*100;

        // console.log(thisShitPercent/2);

        $('.location-car').style.transform = `translateX(-${thisShitPercent/3.1}vw)`
    }
} 