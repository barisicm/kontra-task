//CAROUSEL
var counter = 0;
var slider = {

    self: this,
    arrows: $('.arrow'),
    thumbnailImg: $('.gallery-item'),

    init: function () {
        this.arrows.on('click', this.slide);
        this.thumbnailImg.on('click', this.thumbClick);
    },
    slide: function (id) {
        let arrowName = $(this).attr('class');
        let picLength = $('.gallery-items-container .gallery-item').length; //3

        if (arrowName.includes('arrow arrow-left')) {
            console.log("clicked left")
            counter--;
            if (counter < 0) {
                counter = picLength - 1;
            }
            let currentImg = $('.gallery-items-container .gallery-item').eq(counter)
                .clone(); //clone current element
            $('.gallery-main').find('img').detach(); //remove current picture
            $('.gallery-main').append(currentImg); //insert next picture to current element 
            slider.updateCounter(counter);
            console.log(counter);
        } else {
            console.log("clicked right");
            counter++;
            if (counter >= picLength) {
                counter = 0;
            }
            let currentImg = $('.gallery-items-container .gallery-item').eq(counter)
                .clone(); //clone current element
            $('.gallery-main').find('img').detach(); //remove current picture
            $('.gallery-main').append(
                currentImg); //insert next picture to current element picture to current element 
            slider.updateCounter(counter);
        }
    },
    thumbClick: function () {
        let items = $('.gallery-items-container .gallery-item');
        var index = items.index($(this));

        let cloneImg = $(this).clone();
        $('.gallery-main').find('img').detach(); //remove current picture
        $('.gallery-main').append(
            cloneImg); //insert next picture to current element picture to current element
        counter = index;
        slider.updateCounter(counter);
    },
    updateCounter: function (value) {
        let counterElement = $('.counter');
        counterElement.text(value + 1);
    }

};

slider.init();

$('.go-up').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});