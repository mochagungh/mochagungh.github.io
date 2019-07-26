document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

$(document).ready(function () {
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $("nav").addClass("navbar-after", "is-black");
        } else {
            $("nav").removeClass("is-transparent")
        }
    });


    $('.learn-more').on('click', function (e) {
        var href = $(this).attr('href');
        var elemenHref = $(tujuan);
        
        $('body').animate({
            scrollTop: elemenHref.offset().top - 400
        });

        e.preventDefaulf();
    });

});


// if($(window).scrollTop() > 50){
//     $(".header").addClass("active");
// } else {
//     $(".header").removeClass("active");
// }