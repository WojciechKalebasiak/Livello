$(document).ready(function() {
	//AOS init
	 AOS.init({
	 	disable: 'mobile'
	 });
//change arrows size
	 if($(window).width() < 768) {

	 	$('.slide-design-left').removeClass('fa-2x').addClass('fa-3x');

	 	$('.slide-design-right').removeClass('fa-2x').addClass('fa-3x');

	 	$('.slide-gallery-left').removeClass('fa-2x').addClass('fa-3x');

	 	$('.slide-gallery-right').removeClass('fa-2x').addClass('fa-3x');
	 }

    $('body').hide();
    $('#getstarted').css('opacity', '0');
    setInterval(function() {
        $('body').fadeIn('slow');
    }, 500);
    setInterval(function() {
        $('#getstarted').animate({
            opacity:1
        },1000,'linear');
    }, 2500);

    var currentSlide = parseInt($('.activeslide').text());

    // Carousels
    //Desing slider
    $('.slide-design-left').click(function() {
        $('#iphone-slider').carousel('prev');
        $('#iphone-slider img').hide();
        $('#iphone-slider img').fadeIn('fast');
        if (currentSlide == 1) {
            currentSlide = 5;

        } else {
            currentSlide--;
        }
        $('.activeslide').text(currentSlide);

    });
     $('.slide-design-right').click(function() {
        $('#iphone-slider').carousel('next');
        $('#iphone-slider img').hide();
        $('#iphone-slider img').fadeIn('fast');
        if (currentSlide == 5) {
            currentSlide = 1;

        } else {
            currentSlide++;
        }
        $('.activeslide').text(currentSlide);

    });
    $('.slide-gallery-left').click(function() {
        $('#gallery-slider').carousel('prev');
        console.log('XD');
        $('#gallery-slider img').hide();
        $('#gallery-slider img').fadeIn('fast');

    });
    //Gallery slider
     $('.slide-gallery-right').click(function() {
        $('#gallery-slider').carousel('next');
        $('#gallery-slider img').hide();
        $('#gallery-slider img').fadeIn('slow');

    });

});