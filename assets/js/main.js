/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
	const header = document.getElementById('header')
	//when the scroll is greter than 50 viewport height, add scroll-header class to the header tag
	this.scrollY >= 50 ? header.classList.add('scroll-header')
	                   : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER PRODUCTS ===============*/

let swiperProducts = new Swiper(".products__container", {
	spaceBetween: 32,
	grabCursor: true,
	centeredSlides: true,
	slidesPreView: 'auto',
	loop: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
	/*	640: {
			slidesPreview: 2,
			spaceBetween: 20,	
		},
		768:  {
			slidesPreview: 4,
			spaceBetween: 40,	
		},*/
		1024:  {
			/*slidesPreview: 5,*/
			spaceBetween: 72,	
		},
	},
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
	const scrollY = window.pageYOffset
	
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id'),
				sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll' , scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =() =>{
	const scrollUp = document.getElementById('scroll-up')
	//when the is higher than 350 viewport height, add the show-scroll class to the  a tag with the scrollup
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Perviously selected topic ( if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by by validating the dark -theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user perviously chose a topic
if (selectedTheme) {
	//if the validation is fulfilled, we ask what the issue was to know if we activated or desactived the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//active / desactive the them manually with the button
themeButton.addEventListener('click', () => {
	//add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	//we save the theme and the current icon that the user chose 
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	//reset: true, // animation repeat
})

sr.reveal(`.home__data, .product__container, .footer__container, .footer__info`)
sr.reveal(`.home__images`, {delay: 600 ,origin: 'bottom'})
sr.reveal(`.new__card , .brand__img`, {interval:100})
sr.reveal(`.collection__explore:nth-child(1) `, {origin: 'right'})
sr.reveal(`.collection__explore:nth-child(2) `, {origin: 'left'})