<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neker</title>
  <!-- 1. 초기화 -->
  <link href="./css/reset.css" rel="stylesheet" type="text/css">
  <!-- 2. 기본 서식 -->
  <link href="./css/base.css" rel="stylesheet" type="text/css">
  <!-- 3. 공통 서식 header, footer -->
  <link href="./css/common.css" rel="stylesheet" type="text/css">
  <!-- 4. mobile(기준) 서식 -->
  <link href="./css/mobile.css" rel="stylesheet" type="text/css">
  <!-- 5. 테블릿 서식 -->
  <link href="./css/tablet.css" rel="stylesheet" type="text/css">
  <!-- 6. pc 서식 -->
  <link href="./css/pc.css" rel="stylesheet" type="text/css">
  <!-- 메인 슬라이드 스크립트 -->
  <script src="./script/slide.js" defer></script>
  <!-- 아이콘폰트 주소 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
  <form name="search" method="post" action="search.php">
    <input type="checkbox" id="toggle">
    <input type="checkbox" id="search">
      <!-- 헤더영역시작 -->
      <header>
        <div class="h_top">
          <!-- 상단로고 -->
          <h1><a href="index.html" title="메인으로 바로가기"><img src="./images/logo_neker.png" alt="로고"></a></h1>
        
          <!-- 로그인, 회원가입, 검색(pc) -->
          <nav class="lnb">
            <li><a href="login.html" title="로그인">로그인</a></li>
            <li><a href="join.html" title="회원가입">회원가입</a></li>
            <li><a href="search.html" title="검색"><i class="fas fa-search"></i></a></li>
          </nav>

          <!-- 토글, 검색, 장바구니(mobile) -->
          <label for="toggle" class="total_btn"><i class="fas fa-bars"></i></label>
          <label for="search" class="search_btn"><i class="fas fa-search"></i></label>
          <a href="cart.html" title="장바구니페이지바로가기" class="cart_btn"><i class="fas fa-shopping-bag"></a></i>


          <!-- 검색박스 -->
          <div class="search_box_wrap">
            <div class="search_box">
              <label for="search"><i class="fas fa-arrow-left"></label></i>
              <fieldset>
                <input type="search" maxlength="40" id="search_b">
                <label for="search_b" class="fas fa-search"></label>
              </fieldset>
            </div>
            <div class="r_word">
              <h3>추천검색어</h3>
              <input type="button" value="트러블">
              <input type="button" value="아이크림">
              <input type="button" value="매트 립">
              <input type="button" value="치크">
              <input type="button" value="세럼">
              <input type="button" value="폼클렌징">
              <input type="button" value="립밤">
              <input type="button" value="프리즈매틱">
              <input type="button" value="베일레이어">
              <input type="button" value="버블마스크">
              <input type="button" value="안티에이징">
              <input type="button" value="진정">
              <input type="button" value="이벤트">
            </div>
            <h3>최근 검색어</h3>
          </div>
          
        </div>

        <div class="h_bottom">
          <ul class="gnb1">
            <li><a href="#" title="베스트">베스트</a></li>
            <li><a href="#" title="신제품">신제품</a></li>
            <li><a href="#" title="기획전">기획전</a></li>
            <li><a href="#" title="이벤트">이벤트</a></li>
            <li><a href="#" title="멤버십">멤버십</a></li>
          </ul>
          <nav class="gnb2">
            <img src="./images/logo_neker.png" alt="메인 로고">
            <label for="toggle" class="c_btn"><i class="fas fa-times"></i></label>

            <ul>
              <li><a href="#" title="카테고리">카테고리<i class="fas fa-angle-down"></i></a>
                <ul class="sub">
                  <li><a href="#" title="스킨케어">스킨케어</a></li>
                  <li><a href="#" title="메이크업">메이크업</a></li>
                  <li><a href="#" title="팩">팩</a></li>
                  <li><a href="#" title="헤어, 바디">헤어, 바디</a></li>
                  <li><a href="#" title="소품">소품</a></li>
                  <li><a href="#" title="남성">남성</a></li>
                </ul>
              </li>

              <li><a href="#" title="베스트">베스트<i class="fas fa-angle-down"></i></a>
                <ul class="sub">
                  <li><a href="#" title="스킨케어">스킨케어</a></li>
                  <li><a href="#" title="메이크업">메이크업</a></li>
                  <li><a href="#" title="팩">팩</a></li>
                  <li><a href="#" title="헤어, 바디">헤어, 바디</a></li>
                  <li><a href="#" title="소품">소품</a></li>
                  <li><a href="#" title="남성">남성</a></li>
                </ul>
              </li>

              <li><a href="#" title="신제품">신제품</a></li>

              <li><a href="#" title="기획전">기획전<i class="fas fa-angle-down"></i></a>
                <ul class="sub">
                  <li><a href="#" title="스킨케어">스킨케어</a></li>
                  <li><a href="#" title="안티에이징">안티에이징</a></li>
                  <li><a href="#" title="올인원">올인원</a></li>
                  <li><a href="#" title="기프트 세트">기프트 세트</a></li>
                </ul>
              </li>

              <li><a href="#" title="이벤트">이벤트<i class="fas fa-angle-down"></i></a>
                <ul class="sub">
                  <li><a href="#" title="구매혜택">구매혜택</a></li>
                  <li><a href="#" title="사은품">사은품</a></li>
                </ul>
              </li>

              <li><a href="#" title="멤버십">멤버십</a></li>
            </ul>
          </nav>
        </div>
      </header>