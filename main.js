let mainBox = document.querySelectorAll('.main__box')

mainBox.forEach(mainBoxs => {
    mainBoxs.addEventListener('mousemove',function (e) {
        const x = e.pageX - this.offsetLeft
        const y = e.pageY - this.offsetTop

        mainBoxs.style.setProperty(`--x`, `${x}px`)
        mainBoxs.style.setProperty(`--y`, `${y}px`)
    })
})

let menuOpenBtn = document.querySelector('.nav__menu-open')
let menuOpen = document.querySelector('.nav__menu-list')
let menuClose = document.querySelector('.menu__txt')

menuOpenBtn.addEventListener('click', () => {
    menuOpen.style.right = '0'
})
menuClose.addEventListener('click', () => {
    menuOpen.style.right = '-100%'
})


/* Carousel start */
      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      }); 

/* Carousel and */




