document.addEventListener("DOMContentLoaded", () => {
  const page2 = document.querySelector(".page2");
  const page2P = page2.querySelectorAll("p");

  //마우스가 리브되면 애니메이션이 제거됩니다.
  page2.addEventListener("mouseleave", () => {
    for (let i = 0; i < page2P.length; i++) {
      page2P[i].removeAttribute("class");
    }
  });

  //마우스가 리브되면 애니메이션이 제거됩니다.
  const page3 = document.querySelector(".page3");
  const page3H6 = page3.querySelector("h6");
  const page3P = page3.querySelector("p");

  page3.addEventListener("mouseleave", () => {
    page3H6.removeAttribute("class");
    page3P.removeAttribute("class");
  });
});
