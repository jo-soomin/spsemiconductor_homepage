$(function() {
// 메뉴 영역--------------------------------------------------------------------------------------------
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

// 메뉴 영역 끝-------------------------------------------------------------------------------------------

// 모달팝업
  $('.product_img').click(function() {
    $(location).attr('href',"Product_detail/Discretes/"+this.id);
//     $('.modal-wrapper').css('visibility','visible');
//     $('.modal-wrapper').css('opacity','1');
//     $('.modal-wrapper').children('.modal').css('opacity','1');
//     $('#modal_img').attr('src','/static/img/'+this.id+'_상세정보.jpg')
  });
  $('#modal_img').click(function() {
     $('.modal-wrapper').css('visibility','hidden');
     $('.modal-wrapper').css('opacity','');
     $('.modal-wrapper').children('.modal').css('opacity','');
  });

   var swiper = new Swiper('.swiper-container', {
      allowTouchMove: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        prevEl: '.prev_btn',
        nextEl: '.next_btn',
      },
    });

});
