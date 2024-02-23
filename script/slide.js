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
  console.log(n);
  slide.style.left = (img_w+m)*-n+'%';
  for(let b=0;b<page_n.length;b++){
    page_n[b].classList.remove('act');
    page_n[n].classList.add('act');
  }
}

// 3초마다 자동으로 슬라이드 움직이게 하기
// 시간객체 = setInterval (함수명, 반복시간)


let Timer = setInterval(function(){
  if(count==2){
    count=0;
  }else{
    count++;
  }
  mslide(count); //mslide에 count값을 넘겨서 자동으로 움직이게 한다.
}, 3000);

// 페이지네이션
// classList.add, classList.remove 

let page_n = document.querySelectorAll('.page_n'); //컨트롤 버튼
// let page_qty = page_btn.length;

page_n.forEach((el, index) => {
  el.onclick = () => {
    console.log(index);
    mslide(index);
    clearInterval(Timer);
  }
  el.onmouseout = () => {
    clearInterval(Timer);
    Timer = setInterval(function(){
      console.log('반복호출실행');
      if(count==2){
        count=0;
      }else{
        count++;
      }
      mslide(count); //mslide에 count값을 넘겨서 자동으로 움직이게 한다.
    }, 3000);
  }
});