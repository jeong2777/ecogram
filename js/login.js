document.addEventListener("DOMContentLoaded", () => {
  const clickHere = document.getElementById("login-click");
  const greeting = document.getElementById("greeting");
  const join = document.querySelector(".menu_right li:nth-child(2)");
  const loginForm = document.getElementById("login-form");
  const loginID = loginForm.querySelector("#loginID");
  const loginPW = loginForm.querySelector("#loginPW");
  const loginBtn = loginForm.querySelector("button");

  const CLASSNAME_HIDDEN = "hidden";
  const USERID_KEY = "userID";
  const PASSWORD_KEY = "userPW";

  clickHere.addEventListener("click", () => {
    loginForm.classList.toggle(CLASSNAME_HIDDEN);
  });

  const showAndHidden = () => {
    greeting.classList.toggle(CLASSNAME_HIDDEN);
    clickHere.classList.toggle(CLASSNAME_HIDDEN);
    join.classList.toggle(CLASSNAME_HIDDEN);
  };

  const enterAccount = (event) => {
    event.preventDefault();
    const userID = loginID.value;
    const password = loginPW.value;
    if (userID == "jeong" && password == "12345") {
      showAndHidden();
      loginForm.classList.toggle(CLASSNAME_HIDDEN);
      greeting.innerText = `${userID}님, 안녕하세요!`;
      localStorage.setItem(USERID_KEY, userID);
      localStorage.setItem(PASSWORD_KEY, password);
    } else {
      alert("아이디와 비밀번호를 다시 확인해주세요");
    }
  };

  loginForm.addEventListener("submit", enterAccount);

  const savedID = localStorage.getItem(USERID_KEY);
  const savedPW = localStorage.getItem(PASSWORD_KEY);
  if (savedID == null || savedPW == null) {
    enterAccount();
  } else {
    showAndHidden();
    greeting.innerText = `${savedID}님, 안녕하세요!`;
  }
});
