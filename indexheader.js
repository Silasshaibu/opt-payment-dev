//On click anywhere else remove nav dropdown except on itself
//

$('#mobileToggle-Btn').on('click', () => {
    $('.drop-down-mobile_menuSection').css({"display": "block"});
});

$('.icon.close').on('click', ()=>{
    $('.drop-down-mobile_menuSection').css({"display": "none"});
    $(".miniNav-sec1").css('transform', 'translateX(0%)');
    $('.backAction').css('transform', 'translateX(0%)');
    $('.logo-mobileNav').css('transform', 'translateX(0%)');
});

//PC menu nav 2 and dropdown
$('#nav2').on('click', (e) => {   
    $(".icon.down-arrow").css('transform', 'translateY(2px)', 'rotate(-180deg)');
    $(".icon.down-arrow").css({"stroke": "black"});    
    $('.drop-down-menuSection').addClass('active');
    $('.notch').css({"display": "block"});      
});
    
//Translating Or Animating the inner section of mobile menu
$('.nav2-mobile').on('click', (e)=>{
    $(".miniNav-sec1").css('transform', 'translateX(-100%)');
    $('.logo-mobileNav').css('transform', 'translateX(-100%)');
    $('.backAction').css('transform', 'translateX(-130%)');   
});

$('.backAction').on('click', ()=>{
    $(".miniNav-sec1").css('transform', 'translateX(0%)');
    $('.backAction').css('transform', 'translateX(100%)');
    $('.logo-mobileNav').css('transform', 'translateX(0%)');
    console.log('yeah');
});  


//On hover first link change image to specific link
// $(window).bind("resize", function () {   
//     if ($(this).width() > 1024) {
//         $('.drop-down-mobile_menuSection').css({"display": "none"})
//         ;
//     } 
//     if ($(this).width() < 768) {
//         $('.drop-down-menuSection').css({"display": "none"});
//         $('.notch').css({"display": "none"})
//             } 
// }).trigger('resize');


//Replace image with related image on mousehover link
//START
$('.navigate li a').hover(function () {     
        var linkIndex = $(this).attr("data-filename");
        $(this).addClass('hover');
        console.log("youare")
        $('.feature-img img').attr('src', linkIndex).fadeIn(1000);
    },
    function(){
        $(this).removeClass('hover');
        $('.feature-img img').fadeOut(1000);
        $('.feature-img img').attr('src', './assets/images/default-img.jpg').fadeIn(1000);
    }
);
//END


        
