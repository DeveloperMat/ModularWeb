$(document).ready(function(){

    $('.icon-home').on('click',function(){
        $('.content_1').slideDown();
        $('.content_2').slideUp();
        $('.content_3').slideUp();
       
    })
    
    $('.icon-folder').on('click',function(){
        $('.content_2').slideDown();
        $('.content_1').slideUp();
        $('.content_3').slideUp();
       
    })
    
    $('.icon-mail').on('click',function(){
        $('.content_3').slideDown();
        $('.content_1').slideUp();
        $('.content_2').slideUp();
       
    })

   /* $('.img_show').on('click',function(e){
        var name_src = (e).target.src;
    
        $('html').append('')
       // $('body').addClass("body_2")

        $('.close_modal').on('click',function(){
            $('.content_modal').remove();
         //   $('body').removeClass("body_2");
        })
    })*/

    $(window).resize(function(){

        if($(window).width() <= 1050){
            $('.content_1').fadeIn();
            $('.content_2').fadeIn();
            $('.content_3').fadeIn();
        }else {
            $('.content_1').fadeIn();
            $('.content_2').fadeOut();
            $('.content_3').fadeOut();
        }

    })
    if($(window).width() <= 1050){
        $('.content_1').fadeIn();
        $('.content_2').fadeIn();
        $('.content_3').fadeIn();
    }else {
        $('.content_1').fadeIn();
        $('.content_2').fadeOut();
        $('.content_3').fadeOut();
    }

})