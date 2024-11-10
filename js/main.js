
$(window).on('load',function() {
    // PRELOADER
    setTimeout(function () {
        $('#preloader').delay(150).fadeOut('slow');
        AOS.init({
            duration: 1800,
            easing: 'slide',
            once: true
        });
    },1500);

}); // window load end
