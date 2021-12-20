document.addEventListener("DOMContentLoaded", () => {
  const outbox = document.querySelectorAll(".out-box"); // outbox 안의 것까지 다 선택돼야 forEach 사용가능!

  outbox.forEach((ele) => {
    let imgMove = [0, 0, 0, 0, 0]; //이미지 높이를 저장할 배열입니다.
    const eleWidth = 220;

    const item = ele.getElementsByClassName("item"); // outbox아이템에 있는 각각의 item을 가져옵니다.
    for (let i = 0; i < item.length; i++) {
      // 각 item에 대해
      const min = imgMove.indexOf(Math.min.apply(null, imgMove));
      // imgMove배열에서 최소값이 있는 인덱스 숫자 가져옵니다.
      const x = eleWidth * min; // 한행의 넓이 x 인덱스 숫자
      const itemHeight = item[i].offsetHeight; // offsetHeight = 패딩, scrollBar, 테두리를 포함한 높이 구하기.
      const y = imgMove[min]; // imgMove의 최소값이 있는 배열에 있는 y값을 불러오기
      imgMove[min] += itemHeight + 20; // 최소값의 배열에 아이템의 높이 저장합니다.
      item[i].setAttribute(
        "style",
        "transform:translate(" + x + "px," + y + "px)"
      ); // 아이템의 x,y 좌표를 transform으로 지정해줍니다.
    }

    const imgMax = Math.max.apply(null, imgMove); // 아이템배열 최대값 높이를 가져옵니다.
    ele.setAttribute("style", "height:" + imgMax + "px"); // 감싸고 있는 outbox의 높이를 지정합니다.
  });
});
