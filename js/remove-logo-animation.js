document.addEventListener("DOMContentLoaded", () => {
  //마우스가 리브되면 애니메이션이 제거됩니다.
  const page3Wrap = document.querySelector(".page3_wrap");
  const page3Animation = page3Wrap.querySelector(".remove");

  page3Wrap.addEventListener("mouseleave", () => {
    page3Animation.classList.remove("animationlogo");
  });
});
