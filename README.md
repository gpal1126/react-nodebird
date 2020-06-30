# react-nodebird
리액트 스터디  

### 프론트 서버
- React  
- Next  
- Redux  
- Redux-saga  
- Styled Components  

### 백엔드 서버
- Express  
- MySQL  
- Sequelize(ORM)  
- passport  
- multer(S3)  
- Socket.IO  

### 프론트 서버와 백엔드 서버 분리
- 화면을 그려주는 처리를 하는 프론트와 데이터를 처리하는 백엔드로 서버를 분리하여 스케일링 효율적으로 처리  
- but, 복잡도가 증가된다.  

### React 
- 싱글 페이지(SPA)에서 데이터를 처리하고 컴포넌트로 모듈화하여 유지보수가 쉽다.

### next 
- 코드 스플릿팅(여러개의 파일로 분리시켜 필요한 페이지만 불러온다.)  
- 서버사이드렌더링(SSR:서버에서 미리 화면을 그려줌, 검색 최적화(SEO))을 도와줌  

### eslint
- ECMAScript 코드에서 문제점을 검사하고 더 나은 코드로 정정해주는 도구  
- 코딩할 때 규칙을 하나로 정의하여 협업 할 때 좋다.  

### jsx(JS+XML)
- 

### package.json 생성
$ npm init  

### react react-dom next 특정 버전 설치
$ npm i react@16.9.0 react-dom@16.9.0 next@8.1.0   

### nodemon webpack 특정 버전 설치
$ npm i -D nodemon@1.19.2 webpack@4.39.3  

### eslint 특정 버전 설치
$ npm i -D eslint@5.16.0  

### eslint 관련 플러그인 특정 버전 설치
$ npm i -D eslint-plugin-import@2.18.2 eslint-plugin-react@7.14.3 eslint-plugin-react-hooks@1.7.0  

### Ant Design 특정 버전 설치
$ npm i antd@3.23.1

### prop-types 특정 버전 설치 : props에서 타입 체크(좀 더 견고하게 만듬)
$ npm i prop-types@15.7.2  


### * pages : 실제 컴포넌트  
### * _document.js : html, head, body 담당  
### * _app.js : root  
### * _error.js : 에러 담당  

### Redux : 흩어져 있는 state 값들을 모아서 관리, 안정성, state 통제 용이  
```
{
    isLoggedIn : false, //로그인 여부(state) => A, C
    user: {}, //로그인한 사용자(state) => B, C
    mainPosts: [], //메인 게시글들(state) => C
    ...
} => store
```
### - store : state, action, reducer가 합쳐진 개념
### - Action -> state를 변경하는 행동   ex) 로그인 액션
### - Dispatch -> Action을 실행     ex) 로그인 액션 dispatch
### - Reducer -> Action의 결과로 state를 어떻게 변경할지 정의   ex) 로그인 액션 dispatch시 -> isLoggedIn state를 true로