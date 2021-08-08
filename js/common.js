/* jshint esversion: 6 */

/* headerMenu 클릭했을 때 */
document.addEventListener("DOMContentLoaded", () => {
  const headerMenu = document.getElementsByClassName('header-menu-link');

  headerMenu[0].onclick = function () {
    headerMenu[1].classList.remove('is-active');
    this.classList.add('is-active');
  }
  headerMenu[1].onclick = function () {
    headerMenu[0].classList.remove('is-active');
    this.classList.add('is-active');
  }
});


/* search-bar input 클릭했을 때 */
// document.addEventListener("DOMContentLoaded", () => {
//   const searchBar = document.querySelector(".search-bar input");
//   const headerMenu =  document.querySelector(".header");

//   console.log(searchBar);
//   console.log(headerMenu);

//   searchBar.focus = function () {
//     console.log("focus is on");
//     headerMenu.classList.add('wide');
//   };
//   searchBar.blur = function () {
//     console.log("blur is on");
//     headerMenu.classList.remove('wide');
//   };
// });

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

/* 화면 너비 변경용 */
/* 추가할 기능구현은 메뉴 클릭시 .wrap의 너비 변경. */
document.addEventListener("DOMContentLoaded", () => {
  const changeWidth = document.getElementsByClassName('main-header-link');
  console.log(changeWidth);

  changeWidth[0].onclick = function () {
    changeWidth[1].classList.remove('is-active');
    changeWidth[2].classList.remove('is-active');
    changeWidth[0].classList.add('is-active');
    console.log('DesktopSize is working');
  }
  changeWidth[1].onclick = function () {
    changeWidth[0].classList.remove('is-active');
    changeWidth[2].classList.remove('is-active');
    changeWidth[1].classList.add('is-active');
    console.log('TabletSize is working');
  }
  changeWidth[2].onclick = function () {
    changeWidth[0].classList.remove('is-active');
    changeWidth[1].classList.remove('is-active');
    changeWidth[2].classList.add('is-active');
    console.log('MobileSize is working');
  }
});
  /* 모달페이지 열기. */
document.addEventListener("DOMContentLoaded", () => {
  const bodyBlackWrap = document.querySelector('.body-blackWrap');
  const popupModal = document.getElementsByClassName('popup-modal');
  const modalBtn = document.getElementsByClassName('modal-button');
  const closeBtn = document.getElementsByClassName('popup-modal__close-button');
  let funcs = [];

  function Modal(num) {
    return function () {
      modalBtn[num].onclick = () => {
        popupModal[num].style.visibility = "visible";
        bodyBlackWrap.style.visibility = "visible"
      };

      closeBtn[num].onclick = () => {
        bodyBlackWrap.style.visibility = "hidden";
        popupModal[num].style.visibility = "hidden";
      };
    };
  }

  for(let i =0; i < popupModal.length; i++) {
    funcs[i] = Modal(i);
  }
  for(let j = 0; j < popupModal.length; j++) {
    funcs[j]();
  }
});

/* light mode */
document.addEventListener('DOMContentLoaded', () => {

  /* 로컬 스토리지에서 theme 받아오기 */
  let theme = localStorage.getItem('theme');
  /* 만약 theme의 값이 없다면 */
  if(!theme) {
    /* theme을 light로 지정 */
    // localStorage.setItem('theme', 'light');
    /* matches에 prefers-color-scheme값을 dark를 matches에 입력 */
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    // console.log(matches);
    /* matches의 값을 dark와 light중에 비교해서 theme에 입력. */
    theme = matches ? 'dark' : 'light';
    /* 로컬스토리지에 theme을 위에서 입력한 theme로 적용. */
    localStorage.setItem('theme', theme);
  }
  /* theme의 값이 light 면 light 클래스를 추가하고, 아니면 추가하지 않는 코드. */
  document.body.classList.toggle('light', theme === 'light');
  
  /* 깜빡거림 제거 (다크모드의 토글버튼에 걸려있는 트랜지션이 .3s이기 때문에 여기에서 setTimeout에 300ms의 딜레이를 적용했다.) */
  setTimeout(() => {
    document.body.style.visibility = 'visible';
  }, 300);
});
/* 토글버튼에 클릭이벤트가 발생하면 */
document.querySelector('.toggle-button').onclick = e => {
  /* 로컬스토리지에서 theme값을 가져와서 theme에 저장 */
  const theme = localStorage.getItem('theme');
  /* 로컬스토리지에 theme키값에 value는 theme값을 light와 dark를 비교해서 light면 theme에 light를 적용 */
  localStorage.setItem('theme', `${theme === 'light' ? 'dark' : 'light'}`);
  /* body 태그에 light클래스를 토글적용. = 버튼 1개로 처리하기 때문에. */
  document.body.classList.toggle('light');
};
/* js에서 다크모드 감지. */
// const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// console.log(darkModeMediaQuery);

// darkModeMediaQuery.addEventListener(e => {
//   const darkModeOn = e.matches;
//   console.log(`Dark mode is ${darkModeOn ? 'on' : 'off'}.`);
// });