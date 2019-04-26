$(document).ready(function(){
    $('.main-screen__switch').click(function(){
    	$('.main-screen__content').toggleClass('active');
    	$('.main-screen__switch').toggleClass('active');
    });

    $(".nav__link").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
	