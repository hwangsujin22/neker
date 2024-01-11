// 외부 스크립트 slide.js

// 메인 첫번째 슬라이드 스크립트---------------------------------------------------
// 1. 변수선언
const slide = document.querySelector('.slide'); //배너 이미지 목록의 부모요소
const slide_img = document.querySelectorAll('.slide li') //이미지목록

const img_n = slide_img.length; //li개수를 변수에 담음. 총3개
// console.log(img_n); // 3

const img_w = 100; //이미지의 너비
const m = 0; //여백너비
const s_count = 1; //한페이지에 보여질 이미지 개수

let count = 0; //이전, 다음 클릭시 사용할 변수값 설정

slide.style.width = (img_w+m)*img_n-m+'%';

// 왼쪽으로 움직이는 슬라이드 함수 작성하기
function mslide(n){
  slide.style.left = (img_w+m)*-n+'%';
  count=n;
  console.log(count); //이전버튼 클릭시 2, 1, 0순으로 나오게
  console.log(slide.style.left);
}

// 3초마다 자동으로 슬라이드 움직이게 하기
// 시간객체 = setInterval (함수명, 반복시간)

let Timer = setInterval(function(){
  console.log('반복호출실행');
  if(count==2){
    count=0;
  }else{
    count++;
  }
  mslide(count); //mslide에 count값을 넘겨서 자동으로 움직이게 한다.
}, 3000);

// 페이지네이션
// classList.add, classList.remove 
// const page_btn = $('.slide_wrapper div span'); //컨트롤 버튼
// const page_qty = page_btn.length;
// let n = 0;



// 메인 세번째 Event 탭 콘텐츠 스크립트------------------------------------------------

// 큰사진 변경하기 위한 변수
let b_img = document.getElementById('big_img');

// 작은 썸네일 사진 변수로 저장하기
let s_img = document.querySelectorAll('.small');

// 반복문을 통해 목록(li)안에 있는 img를 개별적으로 선택하여 각각 '클릭이벤트'를 만든다.

for(let i=0;i<s_img.length;i++){
  console.log(s_img[i]);
  s_img[i].addEventListener('click', function(){
    // window.alert('클릭이벤트');
    let src = this.src; //사용자가 선택한 이미지의 src값을 가져와서 변수에 담는다.
    console.log(src);

    // src변수값을 b_img의 src속성값에 대입하여 이미지가 변경되도록 한다.
    b_img.setAttribute('src', src);

    for(let j=0;j<s_img.length;j++){
      s_img[j].style.border='3px solid rgba(0,0,0,.0)';
      this.style.border='3px solid #FF3535';
    }

    
  });
}


