document.addEventListener("DOMContentLoaded", () => {
  const url =
    "https://api.odcloud.kr/api/15045333/v1/uddi:a1246a3f-5378-4f60-96af-b4ebd6811aef?page=1&perPage=10&serviceKey=4X1h70dIIe3mcfJZqzYmbYfJ8mNuOHVgXgqek1Bl4eJp6IawGcgdbMoLM1dbA%2FFLpzFRBzVxOc5gM5IC%2F0aFqQ%3D%3D";
  const animalForm = document.querySelector("#aniaml-form");
  const animal1 = document.querySelector("#animal1");
  const animal1H2 = animal1.querySelector("h2");
  const animal2 = document.querySelector("#animal2");
  const animal2P1 = animal2.querySelector("p:nth-child(1)");
  const animal2P2 = animal2.querySelector("p:nth-child(2)");

  fetch(url)
    .then((res) => res.json())
    .then((myJson) => {
      const innerData = myJson.data;

      console.log(JSON.stringify(myJson, null, 1));
      console.log(innerData);

      animalForm.addEventListener("change", (e) => {
        const eValue = e.target.value;
        if (eValue === "0") {
          animal1H2.innerText = `상세구분 : ${innerData[0]["상세구분"]}`;
          animal2P1.innerText = `1급 종명 : ${innerData[0][
            "1급종명"
          ].replaceAll("+", ", ")}`;
          animal2P2.innerText = `2급 종명 : ${innerData[0][
            "2급종명"
          ].replaceAll("+", ", ")}`;
        } else if (eValue === "1") {
          animal1H2.innerText = `상세구분 : ${innerData[1]["상세구분"]}`;
          animal2P1.innerText = `1급 종명 : ${innerData[1][
            "1급종명"
          ].replaceAll("+", ", ")}`;
          animal2P2.innerText = `2급 종명 : ${innerData[1][
            "2급종명"
          ].replaceAll("+", ", ")}`;
        } else if (eValue === "2") {
          animal1H2.innerText = `상세구분 : ${innerData[2]["상세구분"]}`;
          animal2P1.innerText = `1급 종명 : ${innerData[2][
            "1급종명"
          ].replaceAll("+", ", ")}`;
          animal2P2.innerText = `2급 종명 : ${innerData[2][
            "2급종명"
          ].replaceAll("+", ", ")}`;
        } else if (eValue === "4") {
          animal1H2.innerText = `상세구분 : ${innerData[4]["상세구분"]}`;
          animal2P1.innerText = `1급 종명 : ${innerData[4][
            "1급종명"
          ].replaceAll("+", ", ")}`;
          animal2P2.innerText = `2급 종명 : ${innerData[4][
            "2급종명"
          ].replaceAll("+", ", ")}`;
        } else if (eValue === "5") {
          animal1H2.innerText = `상세구분 : ${innerData[5]["상세구분"]}`;
          animal2P1.innerText = `1급 종명 : ${innerData[5][
            "1급종명"
          ].replaceAll("+", ", ")}`;
          animal2P2.innerText = `2급 종명 : ${innerData[5][
            "2급종명"
          ].replaceAll("+", ", ")}`;
        } else if (eValue === "8") {
          animal1H2.innerText = `상세구분 : ${innerData[8]["상세구분"]}`;
          animal2P1.innerText = `1급 종명 : ${innerData[8][
            "1급종명"
          ].replaceAll("+", ", ")}`;
          animal2P2.innerText = `2급 종명 : ${innerData[8][
            "2급종명"
          ].replaceAll("+", ", ")}`;
        }
      });
    });

  //해당하는 박스를 클릭하면 창이 열리는 함수를 만듭니다.
  const clickBox3 = document.querySelector(".box_li3");
  const modal3 = document.querySelector(".modal3");
  const close3 = modal3.querySelector(".close");

  clickBox3.addEventListener("click", (e) => {
    e.preventDefault();
    modal3.classList.toggle("hidden");
  });

  //X를 클릭하면 창이 닫히는 함수를 만듭니다.
  close3.addEventListener("click", () => {
    modal3.classList.toggle("hidden");
  });
});
