$(document).ready(function () {

	  $('.sliders').slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: 'dots-style',
      autoplay: true,
      speed: 5000,
      fade: true,
      responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false,
	        autoplay: false,
	      }
	    },
    ]      
    });

	  $('.burger').click(function (argument) {
		$('.burger,.menu_list, nav__wrapper').toggleClass('active'); 
		$('body').toggleClass('lock');
		// $('.nav__wrapper').toggleClass('navbar_style')
	});
	$('.menu_list li').click(function(event) {
		$('.burger,.menu_list').removeClass('active');
		$('body').removeClass('lock');
	});

});


window.onscroll = () => {
	const navBar = document.querySelector('.nav__wrapper');
	const Y = window.scrollY;
	if (Y > 100) {
		navBar.classList.add('navbar_style');
	} else {
		navBar.classList.remove('navbar_style');
	}
}

