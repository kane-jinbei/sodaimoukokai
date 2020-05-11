$(function(){
  
  $('.nav-item a').click(function(){
    var speed = 750;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position - 80}, speed, "swing");
    return false;
  });

  $('body').scrollspy({target: '#navbar-bar', offset: 112});

  //.join-menuがクリックされたら
  $('.join-menu').click(function(){
    //クリックされた.join-menuに隣接する.collapseをを開閉する
    $(this).next('.join-contents').slideToggle();
    //クリックされた.join-menu以外の.join-menuに隣接する.collapseを閉じる
    $('.join-menu').not($(this)).next('.join-contents').slideUp();
  });


  /* 閉じるボタンが押されたら */
  $('.collapse-close').click( function () {
    /* .join-contentsを閉じる */
    $(".join-contents").slideUp();
    /* #join-topまでスムーススクロール */
    var speed = 300;
    var position = $('#join-top').offset().top;
    $("html, body").animate({scrollTop:position - 112}, speed, "swing");
    return false;
  });
  

});