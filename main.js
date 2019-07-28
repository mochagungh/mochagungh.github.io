const fakeloader = document.getElementsByClassName('floader')[0];
window.addEventListener('load',function(){
    fakeloader.style.display="none"; 
});

$(document).ready(function () {

    // Ganti warna navbar saat scroll
    $(window).scroll(function () {
        const scroll = $(document).scrollTop();

        if (scroll >= 550) {
            $("nav").addClass("navbar-after"),
            $(".nav-brand > .nav-item").addClass("warna");
        } else {
            $("nav").removeClass("navbar-after"),
            $(".nav-brand > .nav-item").removeClass("warna");
        }
    });

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    // $('.learn-more').on('click', function (e) {
    //     var elemenHref = $(tujuan);

    //     $('body').animate({
    //         scrollTop: elemenHref.offset().top - 400
    //     });

    //     e.preventDefaulf();
    // });
});


// parallax prototype
// window.addEventListener('scroll', function(e){
//     var scrolled = window.pageYOffset;
//     var background = document.querySelector(".page1");
//     var coords = '0% '+ (- (scrolled *0.3) + 'px');
//     background.style.backgroundPosition  = coords;
//     });