
jQuery(document).ready(function(){
    let homeImg = $('.home__picture-box');
    homeImg.addClass('home-picture');
})

jQuery(document).ready(function() {
var nav = $(".buy-block-a a");
        $('#home a[href^="#"]').click(function() {
        var nav = $(this).attr('href');
        var dist = $(nav).offset().top;
        $('html,body').animate({'scrollTop' : dist},1000);
    });
        return false;
});


jQuery(document).ready(function() {
        var m1 = $(".m1");
            m2 = $(".m2");
            m3 = $(".m3");
            box1 = $(".box-one");
            box2 = $(".box-two");
            box3 = $(".box-three");

    $(m1).click(function(){
        m1.addClass("marker-active").siblings().removeClass("marker-active");
        box1.fadeIn();
        if (box2.css({'display':'block'}) || box3.css({'display':'block'})){
            box2.hide().fadeOut();
            box3.hide().fadeOut();
        };
    });
    $(m2).click(function(){
        m2.addClass("marker-active").siblings().removeClass("marker-active");
        box2.fadeIn();
        if (box1.css({'display':'block'}) || box3.css({'display':'block'})){
            box1.hide().fadeOut();
            box3.hide().fadeOut();
        };
    });
    $(m3).click(function(){
        m3.addClass("marker-active");
        if (m1.hasClass('marker-active') || m2.hasClass('marker-active')){
            m1.removeClass("marker-active");
            m2.removeClass("marker-active");
        };
        box3.fadeIn();
        if (box1.css({'display':'block'}) || box2.css({'display':'block'})){
            box1.hide().fadeOut();
            box2.hide().fadeOut();
        };
    });
});


// var slideNow = 1;
// var slideLenght = $('#slidewrapper').children().length;
// var slideInterval = 100000000;
// var navBtnId = 0;
// var translateWidth = 0;

// $(document).ready(function() {
//     var switchInterval = setInterval(nextSlide, slideInterval);

//     $('#viewport').hover(function() {
//         clearInterval(switchInterval);
//     }, function() {
//         switchInterval = setInterval(nextSlide, slideInterval);
//     });

//     $('.btn-right').click(function() {
//         nextSlide();
//     });

//     $('.btn-left').click(function() {
//         prevSlide();
//     });

//     $('.slide-nav-btn').click(function() {
//         navBtnId = $(this).index();

//         if (navBtnId + 1 != slideNow) {
//             translateWidth = -$('#viewport').width() * (navBtnId);
//             $('#slidewrapper').css({
//                 'transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//             });
//             slideNow = navBtnId + 1;
//         }
//     });
// });


// function nextSlide() {
//     if (slideNow == slideLenght || slideNow <= 0 || slideNow > slideLenght) {
//         $('#slidewrapper').css('transform', 'translate(0, 0)');
//         slideNow = 1;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow++;
//     }
// }

// function prevSlide() {
//     if (slideNow == 1 || slideNow <= 0 || slideNow > slideLenght) {
//         translateWidth = -$('#viewport').width() * (slideLenght - 1);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow = slideLenght;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow - 2);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow--;
//     }
// }


// jQuery(document).ready(function(e){
//    var left = 0,
//    top = 0,
//    element = $('#home'),
//    offset =  { left: element.offset().left, top: element.offset().top };
//    element.bind('mousemove', function(e){
//       left = (e.pageX-offset.left);
//       top = (e.pageY-offset.top);
//       $(this).css({
//           backgroundPosition: '-'+(0.05*left)+'px -'+(0.08*top)+'px'
          
//       });
//     });
// });