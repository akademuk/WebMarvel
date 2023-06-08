$(document).ready(function () {
    var whatSlider = $('.what-slider');

    whatSlider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '.what-btn-prev',
        nextArrow: '.what-btn-next',
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
