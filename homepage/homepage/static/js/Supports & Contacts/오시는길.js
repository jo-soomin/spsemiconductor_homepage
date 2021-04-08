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

// sub_sub_title
    $('#Modules').mouseover(function(){
         $(this).css('background-color','#f1c40f');
    }).mouseleave(function(){
        $(this).css('background-color','#f2f2f2');
    })

// 카카오 맵
     var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.513795802474824, 126.78324000317298), // 지도의 중심좌표
        level: 2 // 지도의 확대 레벨
    };

    // 지도 생성
    var map = new kakao.maps.Map(mapContainer, mapOption);

    //    줌 컨트롤러
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커 생성
    var markerPosition  = new kakao.maps.LatLng(37.513795802474824, 126.78324000317298);
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    // 마커 지도 위에 표시
    marker.setMap(map);

    //화면에 따라 지도 사이즈 재설정
    $(window).resize(function() {
        map.setCenter(markerPosition);
     });

    $('#길찾기').click(function(){
        window.open('https://map.kakao.com/link/to/sp반도체통신,37.513795802474824, 126.78324000317298')
    });
    $('#큰지도').click(function(){
        window.open('https://map.kakao.com/link/map/sp반도체통신,37.513795802474824, 126.78324000317298')
    });

//  본사, 안산 선택
    $('#본사').css('border-bottom','1px solid black')
    $('#안산').css('color','grey')

    //본사
     $('#본사').click(function(){
        $('#본사').css('border-bottom','1px solid black')
        $('#안산').css('border','')
        $('#안산').css('color','grey')
        $('#본사').css('color','black')
        $("#map_info").html("");
        $("#map_info").append("<p>Sp반도체통신(본사)</p><p>경기도 부천시 원미구 평천로 832번길 30<span id="+"길찾기"+">&nbsp;길찾기</span></p><span id="+"큰지도"+">큰 지도 보기</span>");
        $("#info").html("");
        $("#info").append("<p><h3>주소</h3><span>본사 : </span>경기도 부천시 원미구 평천로 832번길 30</p><p><span>기숙사 : </span>경기도 부천시 원미구 평천로 832번길31</p><p><h3>대표번호</h3></p><p>032) 680 - 7777</p><p><h3>대중교통</h3></p><p>① 지하철 1호선 부천역 북부</p><p>② 북부역 사거리 농협앞 버스 정류장</p><p><h3>버스노선</h3></p><p>① 12-2, 22, 23-1, 70-2, 50, 661번</p><p>② 온세미 반도체 앞 하차</p>");

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.513795802474824, 126.78324000317298), // 지도의 중심좌표
            level: 2 // 지도의 확대 레벨
        };
        // 지도 생성
        var map = new kakao.maps.Map(mapContainer, mapOption);

        //    줌 컨트롤러
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // 마커 생성
        var markerPosition  = new kakao.maps.LatLng(37.513795802474824, 126.78324000317298);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        // 마커 지도 위에 표시
        marker.setMap(map);

        //화면에 따라 지도 사이즈 재설정
        $(window).resize(function() {
            map.setCenter(markerPosition);
         });

         $('#길찾기').click(function(){
             window.open('https://map.kakao.com/link/to/sp반도체통신,37.513795802474824, 126.78324000317298')
        });
        $('#큰지도').click(function(){
            window.open('https://map.kakao.com/link/map/sp반도체통신,37.513795802474824, 126.78324000317298')
        });
    });

    //안산
    $('#안산').click(function(){
        $('#안산').css('border-bottom','1px solid black')
        $('#본사').css('border','')
        $('#본사').css('color','grey')
        $('#안산').css('color','black')
        $("#map_info").html("");
        $("#map_info").append("<p>Sp반도체통신(안산)</p><p>경기도 안산시 단원구 만해로 161<span id="+"길찾기"+">&nbsp;길찾기</span></p><span id="+"큰지도"+">큰 지도 보기</span>")
        $("#info").html("");
        $("#info").append("<p><h3>주소</h3><span>안산 : </span>경기도 안산시 단원구 만해로 161</p><p><h3>대표번호</h3></p><p>031) 8040-4800</p><p>(단, 채용관련 문의 본사 인사팀 032) 680-7712)</p><p><h3>버스노선</h3></p><p>① 98번</p><p>② 서울우유/삼보컴퓨터 앞 하차</p>");

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.32516229374683, 126.7557378180095), // 지도의 중심좌표
            level: 2 // 지도의 확대 레벨
        };
        // 지도 생성
        var map = new kakao.maps.Map(mapContainer, mapOption);

        //    줌 컨트롤러
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // 마커 생성
        var markerPosition  = new kakao.maps.LatLng(37.32516229374683, 126.7557378180095);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        // 마커 지도 위에 표시
        marker.setMap(map);

        //화면에 따라 지도 사이즈 재설정
        $(window).resize(function() {
            map.setCenter(markerPosition);
         });

         $('#길찾기').click(function(){
             window.open('https://map.kakao.com/link/to/sp반도체통신,37.32516229374683, 126.7557378180095')
        });
        $('#큰지도').click(function(){
            window.open('https://map.kakao.com/link/map/sp반도체통신,37.32516229374683, 126.7557378180095')
        });
    });


});

