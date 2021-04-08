window.onload=function(){
        var userAgent = window.navigator.userAgent.toLowerCase();

        if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
            console.log('미지원 브라우저입니다.');
            $(location).attr('href','준비중화면');
        }
    }
$(function() {
//메뉴 영역------------------------------------------------------------------------------------------------
// 메인화면 슬라이드
    var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 1,

            slidesOffsetAfter: 120,
            speed: 1500,
            draggable:false,
            followFinger: false,
            mousewheel: true,
            calculateHeight:true,
            effect:'slide',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
              on: {
                init: function () {
                    $('.content0').fadeIn(3500);
                },
              },
        });
    swiper.on('slideChangeTransitionEnd', function(){
        af_index = (swiper.activeIndex).toString();
        be_index = (swiper.previousIndex).toString();
        $('.content'+af_index).fadeIn(800);
        $('.content'+be_index).fadeOut();
        $('#footer').show();
    });

// 햄버거 메뉴 오픈
      $('.js-toggle-menu').click(function(e){
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).toggleClass('open');
      });

      $('.mobile-header-nav-main-title').click(function(e){
          e.preventDefault();
          this.style.backgroundColor = this.style.backgroundColor == '' ? '#2f2f2f' : ''
          this.style.color = this.style.color == '' ? '#f1c40f' : ''
          $(this).siblings('.mobile-header-nav-sub').slideToggle();
          $(this).siblings('.mobile-header-nav-sub').css('background-color','#8f8f8f');
          $(this).siblings('.mobile-header-nav-sub').css('opacity','0.7');
      })

//메인 메뉴 마우스 오버 이벤트
     $(".main_li").mouseover(function(){
        $(this).children('.main_title').css('color','#f1c40f');
        $(this).children('.sub').show();
     }).mouseleave(function(){
        $(this).children('.main_title').css('color','white');
        $(this).children('.sub').slideUp(300);
     });

//서브메뉴 title 색 변경
     $(".sub-title").mouseover(function(){
        $(this).css('color','#f1c40f');
     }).mouseleave(function(){
        $(this).css('color','white');
     });
//메뉴 영역 끝 ----------------------------------------------------------------------------------------------


});
