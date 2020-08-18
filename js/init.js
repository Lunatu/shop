$(function() {
    (function () {
        // .header-nav навигация
        let nav = $('.menu__list');

        // .menu-btn - кнопка меню
        $('.menu__btn').click(function() {
            if(nav.hasClass('active')) {
                nav.removeClass('active');
            }
            else {
                nav.addClass('active');
            }
        });
    }());

    $( ".catalog-tabs" ).tabs();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            960:{
                items:3
            },
            1600:{
                items:4
            }
        }
    });
    $('.upload-form select').styler();
    $('.upload-form .upload-form__type-file').styler();
});