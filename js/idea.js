document.addEventListener("DOMContentLoaded", () => {
  const ideaBtn = document.querySelector("#idea");
  const page2 = document.querySelector(".page2_left");

  ideaBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const close = document.createElement("span");
    page2.appendChild(div);
    div.classList.add("modal");
    div.appendChild(h2);
    close.innerText = "닫기";
    div.appendChild(close);
    h2.innerText = "쓰레기를 버리는 좋은 방법, 나만의 노하우를 공유해주세요!";
  });
});
