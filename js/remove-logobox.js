document.addEventListener("DOMContentLoaded", () => {
  const page3Wrap = document.querySelector(".page3_wrap");
  const page3Animation = page3Wrap.querySelector(".remove");

  //스크롤이 특정위치에 도달하면 애니메이션이 제거됩니다.
  window.addEventListener("scroll", () => {
    if (window.scrollY > 2072) {
      page3Animation.classList.remove("animationlogo");
    }
  });
});
