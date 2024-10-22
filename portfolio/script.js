$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //scroll up script

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu script 

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var text = new Typed('.typing', {
        strings: [
            'Student.',
            'Traveler.',
            'Freelancer.',
            'Developer.',
            'Editor.',
            'Bloger.'
        ],
        typeSpeed: 0,
        backSpeed: 0,
        fadeOut: true,
        loop: true
    });

    var text = new Typed('.typing2', {
        strings: [
            'Syed Zulker Nayeen.'
        ],
        typeSpeed: 0,
        backSpeed: 0,
        fadeOut: true,
        loop: true
    });
});