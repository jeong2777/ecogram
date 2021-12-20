document.addEventListener("DOMContentLoaded", () => {
  const link = "https://global-warming.org/api/temperature-api";

  const compareForm = document.querySelector("#earth-form");
  const compareH1 = document.querySelector("#compare p:nth-child(1)");
  const compareH2 = document.querySelector("#compare p:nth-child(2)");

  compareForm.addEventListener("change", (e) => {
    const eValue = e.target.value;

    compareH1.textContent = `${e.target.value}년 1월`;

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        const time2012 = data.result[1584];
        const time2014 = data.result[1608];
        const time2016 = data.result[1632];
        const time2018 = data.result[1656];
        const time2020 = data.result[1680];

        if (time2012.time.indexOf(eValue) != -1) {
          compareH2.textContent = `${time2012.station}°`;
        } else if (time2014.time.indexOf(eValue) != -1) {
          compareH2.textContent = `${time2014.station}°`;
        } else if (time2016.time.indexOf(eValue) != -1) {
          compareH2.textContent = `${time2016.station}°`;
        } else if (time2018.time.indexOf(eValue) != -1) {
          compareH2.textContent = `${time2018.station}°`;
        } else if (time2020.time.indexOf(eValue) != -1) {
          compareH2.textContent = `${time2020.station}°`;
        }
      });
  });

  const nowLoad = () => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        const now = document.querySelector("#now");
        const nowH1 = now.querySelector("p:nth-child(1)");
        const nowH2 = now.querySelector("p:nth-child(2)");

        const thisYear = new Date().getFullYear();
        const time2021 = data.result[1692];
        nowH1.innerText = `${thisYear}년 1월`;
        nowH2.innerText = `${time2021.station}°`;
        console.dir(data);
      });
  };
  nowLoad();

  //해당하는 박스를 클릭하면 창이 열리는 함수를 만듭니다.
  const clickBox2 = document.querySelector(".box_li2");
  const modal2 = document.querySelector(".modal2");
  const close2 = modal2.querySelector(".close");

  clickBox2.addEventListener("click", (e) => {
    e.preventDefault();
    modal2.classList.toggle("hidden");
  });

  //X를 클릭하면 창이 닫히는 함수를 만듭니다.
  close2.addEventListener("click", () => {
    modal2.classList.toggle("hidden");
  });
});
