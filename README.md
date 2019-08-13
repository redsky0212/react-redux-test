## 설명

## Redux에 대한 기본설명

### React Redux (npm i redux react-redux) react-redux는 react에서 redux를 더 편하게 사용할 수 있게 해주는 것.
* store : 애플리케이션의 상태값을 내장
* action : 상태값의 변화를 일으킬때 참조하는 객체
* dispatch : action을 store에 전달하는 것
* reducer : 상태값을 변화시키는 로직이 있는 함수들
* subscribe : store가 필요한 컴포넌트는 store를 subscribe해야한다.

### Action 객체 만들기
* Action 은 Store의 상태변화를 일으킬때 사용하는 객체.
* type값을 반드시 가지고 있어야 한다.
* 나머지는 있어도 되고 없어도 되면 형식은 자유다.
* action객체를 새로 만들때마다 계속 생성해서 만들면 좀 불편하므로 action creator 함수를 이용한다.
  - const INC = 'INCREMENT';
    const incFnc = () => { return {type: INC}; }
* 파라미터를 넘겨줄때는 아래와 같이.
  - const INC = 'INCREMENT';
    const incFnc = (diff) => { return {type: INC, diff:diff}; }

### Reducer 만들기
* reducer는 상태변화를 일으키는 함수.
* reducer함수는 두개의 인자를 받는다 ( state, action )



## 예제 App만들어보기, 참고 사이트 (https://redux.vlpt.us/1-1-workspace-setup.html)

### 작업환경 셋팅
* create-react-app 프로젝트 생성
* redux, react-redux설치
  - react-redux는 redux를 좀 더 편리하게 사용하는 라이브러리 이다. 이걸 사용하면, 컴포넌트에서 store를 props로 받아오거나, subscribe을 직접 할 필요가 없다.
* App.css, App.js, App.test.js, logo.svg 삭제
* 디렉토리 생성
  - actions : 액션타입, 액션생성자 파일 저장
  - components: 뷰만을 담당하는 presentational 컴포넌트 저장
  - containers: store 에 접근이 닿는 container컴포넌트 저장
  - reducers: store의 기본 상태와, 상태의 업데이트를 담당하는 리듀서 파일 저장
  - utils: 일부 컴포넌트들에서 공용으로 사용되는 파일 저장