$(document).ready(function () {
    var workSlider = $('.work-slider');

    workSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '.work-btn-Prev',
        nextArrow: '.work-btn-Next',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    dots: true,
                    variableWidth: true,
                    appendDots: $('.howWorkSliderdots')
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: true,
                    appendDots: $('.howWorkSliderdots')
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: true,
                    appendDots: $('.howWorkSliderdots')
                }
            }
        ]
    });
});





























































