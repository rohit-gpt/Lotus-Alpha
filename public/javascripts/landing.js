// $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('#products').each( function(i){
            
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},1500);       
//             }
//         }); 
//     });
// }); 

// $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('.product').each( function(i){
            
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},1500);       
//             }
//         }); 
//     });
// }); 

$(window).on("scroll", function() {
    var top = $(this).scrollTop();
    if(top>=826)
    {
        $("#products").fadeIn(3000, function() {
            $(this).animate({'opacity': '1'}, 3000);
        });
    }
});

$('.nav-link').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$("#seatProduct").mouseenter(function() {
    $("#cisternProduct").css("display", "none");
    $(".seat").animate({height: 'toggle'}, 500);
    $(this).css("display", "none");
});

$(".seat").mouseleave(function() {
    $(this).animate({height: 'toggle'}, 500);
    $("#seatProduct").css("display", "block");
    $("#cisternProduct").css("display", "block");
});

$("#cisternProduct").mouseenter(function() {
    $(this).css("display", "none");
    $("#seatProduct").css("display", "none");
    $(".cistern").animate({height: 'toggle'}, 500);
});

$(".cistern").mouseleave(function() {
    $(this).animate({height: 'toggle'}, 500);
    $("#seatProduct").css("display", "block");
    $("#cisternProduct").css("display", "block");
});

var flag=0;

$(window).on("scroll", function() {
    var top = $(this).scrollTop();
    if(top>=1652 && flag==0)
    {
        flag=1;
        $("#about").fadeIn(3000, function() {
            $(this).animate({'opacity': '1'}, 3000, function() {
                $(function(){
                    $(".write").typed({
                        strings: ["We look forward not only to deal with you, but also with your generations to come!! We don't make clients. We make families..."],
                        typeSpeed: 2,
                });
            });
            });
        });
    }
});

$(window).on("scroll", function() {
    var top = $(this).scrollTop();
    if(top>=2478)
    {
        $("#contact").fadeIn(3000, function() {
            $(this).animate({'opacity': '1'}, 3000);
        });
    }
});

$(".navbar-brand").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
