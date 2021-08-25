$(document).ready(function() {
    $('.hero__slider__inner').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false
            }
        }, ]
    });
    // smooth Scrolling
    $(".sec__nevigation li a").click(function() {
        $('.sec__nevigation li a').removeClass('active')
        $(this).addClass('active')
        let linkUrl = $(this).attr('href');
        console.log(linkUrl);
        $('html, body').animate({
            scrollTop: $(linkUrl).offset().top
        }, 2000);
    });

    // Grid/ List View
    $('.view_options .btn').click(function() {
        let dataTarget = $(this).attr('data-target');
        console.log(dataTarget);
        $('.view_container >div,.view_options .btn').removeClass('active');
        $(this).addClass('active');
        $('#' + dataTarget).addClass('active');
    });


    let winWidth = $(window).width();
    if (winWidth < 991) {
        let cartItem = $('.lb__navbar .nav-item.__cart .nav-link').detach().appendTo('.navbar').wrap('<div class="mob_cart_sec" ></div>');
        $('#hamburger_menu').detach().appendTo('.mob_cart_sec');
        $('.nav-item.__cart').remove();
        $('.bhoechie-tab-menu .panel_icons').click(function() {
            // alert();
            $('.bhoechie-tab-menu').removeClass('smoothSlide');
        });

    }
    // admin Left Panel
    $('.bhoechie-tab-menu .list-group-item .panel_icons ,.bhoechie-tab-menu .list-group-item .__right >h4 ').on('click', function(e) {
        let tabData = $(this).parents('li').attr('data-tab');
        $('.bhoechie-tab-menu .list-group-item').removeClass('active');
        $(' .bhoechie-tab-content').removeClass('active');
        $(this).parents('li').addClass('active');
        $("#" + tabData).addClass('active');
    });

    // for respnsive
    $('#left_panel_toggler').click(function() {

        // $('.list-group').slideToggle();
        $('.bhoechie-tab-menu,.bhoechie-tab').toggleClass('smoothSlide');
        setTimeout(function() {
            // alert("Hello"); 
            $('.bhoechie-tab').toggleClass('smoothSlide')
        }, 0);
    });
    //Scroll to Top
    $('#scrollToTop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });
    $(window).scroll(function() {
        // add Class on scroll
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            //clearHeader, not clearheader - caps H
            $(".scrollToTop").addClass("show");
        } else {
            $(".scrollToTop").removeClass("show");
        }
        // fixed header
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 50) sticky.addClass('fixed');
        else if (scroll >= 200) sticky.addClass('smoothSlide');
        else sticky.removeClass('fixed smoothSlide');
    });
    $('.list-group-item .btn-group >.btn').click(function() {
        $('.list-group-item .btn-group >.btn').removeClass('active');
        $(this).addClass('active');
    });
    //range slider
    $('.basic').alRangeSlider();
    const options = {
        range: {
            min: -100,
            max: 100,
            step: 1
        },
        initialSelectedValues: {
            from: -100,
            to: 0
        },
        grid: {
            minTicksStep: 1,
            marksStep: 50
        },
        theme: "dark",
    };
    $('.js-example-class').alRangeSlider(options);
    const options2 = {
        orientation: "vertical"
    };
});