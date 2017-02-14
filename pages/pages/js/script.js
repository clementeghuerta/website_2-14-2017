// END
console.log("first working");
//section1 start
$(function() {
     $('.left-img').addClass('left-to-right');
});
$(function() {
    console.log( "ready!" );
});
$(function() {
        $('.right-text').addClass('right-to-left-year');
});

$(function() {
    $('.right-heading').addClass('right-to-left');
});
//section1 END
// section 2 start

$(window).scroll(function() {
if ($(this).scrollTop() > 1100) {
        $('.left-img2').addClass('left-to-right2');
}
else {
$('.left-img2').removeClass('left-to-right2');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1100) {
        $('.right-text2').addClass('right-to-left-year2');
}
else {
$('.right-text2').removeClass('right-to-left-year2');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1100) {
        $('.right-heading2').addClass('right-to-left2');
}
else {
$('.right-heading2').removeClass('right-to-left2');
}
});
//section2 end
// section 3start

$(window).scroll(function() {
if ($(this).scrollTop() > 2100) {
        $('.left-img3').addClass('left-to-right3');
}
else {
$('.left-img3').removeClass('left-to-right3');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 2100) {
        $('.right-text3').addClass('right-to-left-year3');
}
else {
$('.right-text3').removeClass('right-to-left-year3');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 2100) {
        $('.right-heading3').addClass('right-to-left3');
}
else {
$('.right-heading3').removeClass('right-to-left3');
}
});
//section 3 end
// section 4start

$(window).scroll(function() {
if ($(this).scrollTop() > 3100) {
        $('.left-img4').addClass('left-to-right4');
}
else {
$('.left-img4').removeClass('left-to-right4');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 3100) {
        $('.right-text4').addClass('right-to-left-year4');
}
else {
$('.right-text4').removeClass('right-to-left-year4');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 3100) {
        $('.right-heading4').addClass('right-to-left4');
}
else {
$('.right-heading4').removeClass('right-to-left4');
}
});
//section4 end
// section 5 start

$(window).scroll(function() {
if ($(this).scrollTop() > 4200) {
        $('.left-img5').addClass('left-to-right5');
}
else {
$('.left-img5').removeClass('left-to-right5');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 4200) {
        $('.right-text5').addClass('right-to-left-year5');
}
else {
$('.right-text5').removeClass('right-to-left-year5');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 4200) {
        $('.right-heading5').addClass('right-to-left5');
}
else {
$('.right-heading5').removeClass('right-to-left5');
}
});
//section5 end
//section 6 start
$(window).scroll(function() {
if ($(this).scrollTop() > 5500) {
        $('.left-img6').addClass('left-to-right6');
}
else {
$('.left-img6').removeClass('left-to-right6');
}
});
//section 6 end



//section1 start

$(function() {
    $('.about-right-text').addClass('about-right-to-left');
});
//section1 END












console.log("last working");