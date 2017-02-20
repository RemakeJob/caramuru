$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        nav:false,
        items: 1,
    });
    var height = $(window).height() - 50;

    $('.item-banner').css('height',height);
    $('.banner-home h1.logo').css('height',height);
    $('.banner-home .texto-banner').css('height',height);
    $('.banner-home .content-texto').css('height',height);
    $('.banner-home .text-inner').css('height',height);

});
$(window).resize(function() {
    var height = $(window).height() - 50;

    $('.item-banner').css('height',height);
    $('.banner-home h1.logo').css('height',height);	
    $('.banner-home .texto-banner').css('height',height);
    $('.banner-home .content-texto').css('height',height);
    $('.banner-home .text-inner').css('height',height);
});

// FUNCTION PARA SETAR CLASSE ATIVA NA PAGINA ATUAL
$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("ativo");
     })
});