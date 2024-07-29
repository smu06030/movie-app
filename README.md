# 🎥 영화 검색 사이트

## 개인 과제 소개

TMDB API를 이용한 영화 소개 페이지입니다.

배포 링크 : [https://smu06030.github.io/movie-app/](https://smu06030.github.io/movie-app/)

<br>

# 📌 요구 사항

## 필수 구현 사항
- ✅ 순수 바닐라 자바스크립트 사용
- ✅ TMDB API 인기 영화 데이터 가져오기
- ✅ 영화 정보 카드 리스트 UI 구현
- ✅ 영화 검색 UI 구현
- ✅ javascript 문법 요소를 이용해 구현
  ```js
  document.getElementById()
  document.querySelector()
  document.createElement()
  setAttribute()
  addEventListener()
  appendChild()
  preventDefault()
  ```

<br>

## 선택 구현 사항 
- ✅ CSS flex 사용
- ✅ 웹사이트 새로고침 시 커서 자동 위치
- ✅ 대소문자 관계없이 검색 가능
- ✅ 키보드 Enter입력 시 클릭과 동일하게 검색

<br>

# 🛠️ 사용 기술

<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="html"></img>
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="css"></img>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="javascript"></img>

<br>

# ❓ 이슈

## 1. 클릭, 엔터 이벤트

### 이슈
- 클릭, 엔터를 눌렀을 때 영화를 검색해야 하는데 각각 이벤트 리스너를 만들면 똑같은 콜백 함수를 2번 사용해야 하는 문제.<br>

### 해결 방법
- input, button에 각각 줬던 이벤트를 form 태그 하나에 이벤트를 줘 클릭과 엔터 동시에 할 수 있게 수정.<br>
```js
// 버튼 클릭 or 엔터 입력 시 영화 검색
const form = document.getElementById('searchForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const input = document.getElementById('search').value.trim()
  
  input.length 
    ? createMovieCards(filterNames(input)) 
    : createMovieCards(movieLists)
})
```

## 2. GitHub 배포 후 에러 발생

### 이슈
- Github Pages에 배포 후 배포 링크에 접속하니 **Failed to load resource: the server responded with a status of 404 ()  <u>movie-app/js/config.js:1</u>** 에러 발생.<br>

### 해결 과정
- config.js에 api key를 넣고 .gitignore에 config.js를 작성해 github에 push 되지 않게 했었는데 배포하는 과정에서 config.js를 (누락) 찾지 못해서 발생하는 에러였습니다.<br>

### 해결 방법
- Github Pages와 같은 정적 호스팅을 사용하는 경우 배포 과정에서 동적으로 생성된 파일이 포함되도록 해야 하는데 아직 클라이언트만 하고 서버가 없기 때문에 어쩔 수 없이 .gitignore파일에서 config.js를 지웠습니다!<br>

<br>

# ❗ 느낀점
- 프로젝트나 과제를 하면서 느낀 점은 쓸데없는데 빠져서 시간을 많이 잡는다는 생각을 했습니다. <br>
javscript 기능 구현을 완벽하게 하는 게 중요하지만, css에 쓸데없이 시간을 많이 쓴 시간이었습니다. ~~(물론 안 중요한 건 아니지만)~~