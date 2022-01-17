// 네이버아이디로로그인 초기화 Script
var naver_id_login = new naver_id_login(
  "1_jMkqGuRAG9mi1ALRNj",
  "https://jeong2777.github.io/ecogram/images/main/login-callback.html"
); // YOUR_CLIENT_ID, YOUR_CALLBACK_URL
var state = naver_id_login.getUniqState();
naver_id_login.setButton("white", 2, 26); // 로그인 버튼의 스타일(색, 타입, 높이)
naver_id_login.setDomain("https://jeong2777.github.io/ecogram/"); // YOUR_SERVICE_URL
naver_id_login.setState(state);
naver_id_login.setPopup();
naver_id_login.init_naver_id_login();

//https://ugong2san.tistory.com/3625
console.log(naver_id_login);
