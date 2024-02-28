// 외부 제이쿼리 서식

$(document).ready(function(){

  const login = $('.login');
  const join = $('.join');

  login.click(function(){
    alert('현재 준비 중인 페이지입니다.')
    return false;
  });
  join.click(function(){
    alert('현재 준비 중인 페이지입니다.')
    return false;
  });

  // 메인페이지 모달 띄우기 --------------------------------------------------------------
  let popup = `
    <div class="intro_modal">
      <div class="modal_img">
        <a href="" title="">
          <img src="./images/intro_modal.png" alt="광고">
        </a>
        <div class="modal_bottom">
          <input type="checkbox" id="ch">
          <label for="ch">오늘 하루 열지 않음</label>
          <input type="button" value="닫기" id="c_btn">
        </div>
      </div>
    </div>
    `;
  $('body').append(popup);

  // 현재 브라우저에 쿠기 popup(이름 임의지정)의 값이 none이면 팝업을 나오지 않게 한다.
  if($.cookie('popup')=='none'){
    $('.intro_modal').hide();
  }

  // 체크박스 변수
  let $ex =$('.intro_modal #ch');

  // 체크박스에 사용자가 체크를 했는지 안했는지 확인하기 위한 함수를 작성
  function closePopup(){
    if($ex.is(':checked')){ //체크박스에 체크되었다면
      $.cookie('popup','none',{expires:1, path:'/'});
    }
    $('.intro_modal').hide(); //쿠기를 생성하고 종료한다.
  }

  // 닫기 버튼 클릭시 해당함수를 호출하여 모달윈도우 닫기
  $('.intro_modal #c_btn').click(function(){
    closePopup();
  });
      
  // gnb1 클릭시 해당 메뉴의 폰트 컬러 변경하기----------------------------------
  let mnu = $('.gnb1 > li > a');

  mnu.each(function(){ //메뉴 5개 각각 개별적으로 기능(클릭)을 삽입한다.
    $(this).click(function(){

      // 현재 선택한 a태그에 서식을 적용하고 그 외 부모의 형제 에서 a태그를 찾아 서식을 제거한다.
      $(this).css('color', '#FF3535').parent().siblings().find('a').css('color','#333');
      // parent(부모는 li), siblings(형제는 부모 li의 자식들)

      // 새로고침 방지하여 페이지가 위로 올라가지 못하게 함.
      return false;
    });
  });

  // top버튼 스크롤 위치에 따라 보이기/숨기기----------------------------------
  let scrollPos;
  $(window).scroll(function(){
    scrollPos = $(this).scrollTop();
    // console.log(scrollTop);

    if(scrollPos>=600){
      $('.t_btn').addClass('act');
    }else{
      $('.t_btn').removeClass('act');
    }
  });

  // 토글의 gnb2 메인 메뉴 클릭시 서브메뉴 나오게 하기------------------------------

  // 윈도우창의 너비값 = $(window).width(); or $(window).height();
  // $(window).innerWidth(); 패딩값을 포함한 너비
  const g_mu = $('.gnb2 > ul > li > a');

  let w_width;

  // 브라우저의 크기가 변하면 함수내용을 실행한다.
  $(window).resize(function(){

    w_width = $(window).innerWidth();

    if(w_width<=1024){
      // $('.sub').hide();
      g_mu.click(function(){
        // $('.sub').hide();
        $(this).next().show().parent().siblings().find('.sub').hide();
        $('i').removeClass('gnb_act');
        $(this).find('i').addClass('gnb_act');
      });
    }
  }).resize();

  // PC버전에서 마우스 오버시 gnb2 서브메뉴 노출----------------------------------------

  let p_gnb = $('.gnb2 > ul > li');
  let p_sub = $('.gnb2 > ul > li > .sub > li > a');

  $(window).resize(function(){
    w_width = $(window).innerWidth();
    if(w_width>=1025){
      p_gnb.mouseenter(function(){
        $('.h_bottom').stop().animate({'height':'310px'},500);
      });
      p_gnb.mouseleave(function(){
        $('.h_bottom').stop().animate({'height':'50px'},500);
      });
    }
  }).resize();

  // 핫 키워드 순서 움직이기 ---------------------------------------------
  setInterval(function(){
    let keyword_img = $('.keyword_img > ul');
    let boxrow = $('.keyword_img > ul > li:first');

    let ARea = ()=> {
      boxrow.appendTo(keyword_img).show(300);
    }

    boxrow.hide(300, ARea);
  },4000);

  let key_text = $('.keyword_text > ul > li');
  let i = 0;

  function ani(){
    key_text.removeClass('key_act');
    if(i==5){
      i=0;
    }else{
      i++;
    }
    key_text.eq(i).stop().addClass('key_act');
  }
  let Timer2 = setInterval(ani,4000);


  // 이벤트 탭 콘텐츠 -----------------------------------------------------------------
  let e_tab = $('.event_tab li > a');

  e_tab.click(function(){

    $(this).next().show().parent().siblings().find('div').hide();
    $(this).addClass('tab_act').parent().siblings().find('a').removeClass('tab_act');

    return false;
  });



});