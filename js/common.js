$(function () {
  $(".header-menu-link").click(function () {
    $(".header-menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(function () {
  $(".main-header-link").click(function () {
    $(".main-header-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove("is-active"));
    dropdown.classList.add("is-active");
  });
});

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

$(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".dropdown").on("click", function (e) {
    $(".content-wrapper").addClass("overlay");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
    }
  });
});

$(function () {
  $(".status-button:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});


document.addEventListener("DOMContentLoaded", () => {
  const bodyBlackWrap = document.querySelector('.body-blackWrap')
  const popupModal = document.querySelector('.popup-modal')
  const introModal = document.querySelector('.content-wrapper-context .모달 이름넣기.')


  /* 인트로 팝업창. */
  document.querySelector('.content-wrapper-context .content-button').addEventListener('click', function() {
    introModal.classList.add('is--visible');
    bodyBlackWrap.classList.add('blackOn');
  });

  /* 모달 닫기 */
  popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
    popupModal.classList.remove('is--visible');
    bodyBlackWrap.classList.remove('blackOn');
  });
  bodyBlackWrap.addEventListener('click', () => {
    popupModal.classList.remove('is--visible');
    bodyBlackWrap.classList.remove('blackOn');
  });
});