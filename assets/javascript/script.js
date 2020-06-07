$(document).ready(function () {

    function randomValues() {
        anime({
            targets: '.options_title',
            translateX: function () {
                return anime.random(0, 100, 0);
            },
            direction: 'alternate',
            loop: true,
            easing: 'spring(1, 80, 10, 0)',
            duration: 750,
            complete: randomValues
        });
    }

    $('.art_vault').hover(randomValues, function() {
        $('body').addClass('bgcolorchange');
    });


    window.onload = function onloadFadeIn() {
        $('.art_vault').animate({
            opacity: '1'
        }, 250, function () {
            $('.forbidden_books').animate({
                opacity: '1'
            }, 250, function () {
                $('.media_news').animate({
                    opacity: '1'
                }, 250, function () {
                    $('.podcasts_music').animate({
                        opacity: '1'
                    }, 250, function () {
                        $('.socials').animate({
                            opacity: '1'
                        }, 250, function () {
                            $('.github').animate({
                                opacity: '1'
                            })
                        })
                    })
                })
            })
        })
    }


    $('.art_vault').hover(function () {
        $('.show_blue1').addClass('blue_text');
    }, function () {
        $('.show_blue1').removeClass('blue_text');
    });

    $('.forbidden_books').hover(function () {
        $('.show_blue2').addClass('blue_text');
    }, function () {
        $('.show_blue2').removeClass('blue_text');
    });

    $('.media_news').hover(function () {
        $('.show_blue3').addClass('blue_text');
    }, function () {
        $('.show_blue3').removeClass('blue_text');
    });

    $('.podcasts_music').hover(function () {
        $('.show_blue4').addClass('blue_text');
    }, function () {
        $('.show_blue4').removeClass('blue_text');
    });


});



/* .,
.media_news,
.podcasts_music,
.socials,
.github */