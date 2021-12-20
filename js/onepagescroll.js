document.addEventListener("DOMContentLoaded", () => {
  const scrollwrap = document.querySelectorAll("#scroll-wrap");
  const body = document.body;
  let page = 0;

  scrollwrap.forEach((ele) => {
    //scrollwrap의 각각의 개체에게
    const item = ele.getElementsByClassName("scroll-box");

    const caseUp = () => {
      //페이지 번호가 마지막이면 작동을 멈춥니다.
      if (page == item.length - 1) return;
      page++;
      item[page].setAttribute(
        "style",
        "position:absolute; top:" + 0 + "%; left:" + 0 + "px;"
      );
    };

    const caseDown = () => {
      //페이지 번호가 맨 첫번째이면 작동을 멈춥니다.
      if (page == 0) return;
      page--;
      item[page + 1].setAttribute("style", "position:none;");
    };

    const [up, down] = [38, 40];
    body.addEventListener("keyup", (event) => {
      //keycode를 이용하여 방향키를 찾아냅니다.
      if (event.keyCode == down) {
        caseUp();
      } else if (event.keyCode == up) {
        caseDown();
      }
    });

    //마우스휠의 상하에 따라 페이지가 전환되는 함수를 만듭니다.
    body.addEventListener("wheel", (event) => {
      //deltaY = 마우스휠의 스크롤 양을 반환합니다.
      if (event.deltaY > 0) {
        caseUp();
      } else if (event.deltaY < 0) {
        caseDown();
      }
    });
  });
});
