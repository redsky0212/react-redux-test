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

### 컨테이너 컴포넌트, 프리젠테이셔널 컴포넌트
* 컨테이너 컴포넌트
  - 프리젠테이셔널,컨테이너컴포넌트 들 관리, 
    DOM element직접사용하지 않음, 
    감싸는 용도일때만 사용, 
    스타일을 가지고 있지 않아야함, 
    상태를 가지고 있을 경우가 많음, 
    리덕스에 직접 접근 할 수 있음.
* 프리젠테이셔널 컴포넌트
  - 오직 뷰만을 담당하는 컴포넌트,
    DOM element, 스타일을 가지고 있음,
    리덕스 스토어에는 직접 접근 권한이 없음 오직 props로만,
    대부분 state를 가지고 있지 않으며 있더라도 data관련 보다는 UI관련 state를 가지고 있음,
    주로 함수형 컴포넌트, state가 있거나 LifeCycle이 필요할때는 class형 컴포넌트로 작성.
* 컨테이너로 만들어야할 컴포넌트 종류
  - 페이지, 리스트, 헤더, 사이드바, 내부component때문에 props가 여러 component를 거쳐야 할 경우.
  - 컨테이터 하나에 프리젠테애셔널 하나만 으로 구성되어도 상관없음.

### 기본 틀 만들기
* App.js만들기 (App.js는 container에 속하므로 containers폴더에서 만든다.)
* App.js컴포넌트를 index.js에 반영한다.

### Counter 컴포넌트 만들기 (각 프로젝트에 맞는 컴포넌트 생성)
* 프리젠테이셔널 컴포넌트인 Counter.js 생성.
  - 함수형 컴포넌트로 생성하여 PropTypes를 설정함.
* 스타일을 적용하기 위해 Counter.css파일 생성.
* 동그란 스타일이 잘 적용 되는지 App.js 컴포넌트에서 임시로 Counter컴포넌트를 가져와 테스트 해보기.

### Actions 만들기
* 액션은 객체이며 type이 설정 되어야 한다. type은 액션의 이름과 같다.
* 액션 객체는 따로 파일로 만들어 관리하면 편리함. actions/ActionTypes.js 생성.
* 액션 선언은 대문자로 한다.
* 액션 생성자 만들기 (actions/index.js)
  - 액션을 만드는 함수를 만든다.

### Reducer 만들기
* 액션의 type에 따라 변화를 일으키는 함수.
* 리듀서는 actions에 의해 변화를 일으키기전 초기값을 셋팅해야한다. reducers/index.js
* 리듀서 함수는 state, action을 파라미터를 가지고 있다.
* 우선 하나의 리듀서만 만든다.

### Store 만들기
* store의 역할 : 현재 상태를 내장, subscribe중인 함수들을 state가 업데이트 될때마다 다시 실행되게 한다.
* createStore를 이용하여 파라미터로 만든 리듀서를 넣어준다. (src/index.js에 코딩)
  - const store = createStore(reducers);

### Provider 를 이용하여 리액트 앱에 store연동
* Provider는 react-redux 라이브러리에 내장되어있고, 리액트 앱에 store를 쉽게 연동 시켜주는 컴포넌트 이다.
* 연동할 컴포넌트를 Provider로 감싸주고 Provider의 props로 store값을 설정한다.
  - &lt;Provider store={store}&gt;&lt;App /&gt;&lt;/Provider&gt;

### Counter 컨테이너 컴포넌트 만들기
* Counter컴포넌트는 이미 만들었지만 store에 연결할 Counter의 컨테이너를 아직 만들지 않았으므로 생성한다.(containers/CounterContainer.js)
* connect()를 이용하여 store와 Counter컴포넌트를 연결시켜주는 로직을 작성한다.
* 내부 소스에는 랜덤컬러를 생성하는 함수가 필요한데 이것은 공통적인 함수이므로 Utils에 함수를 생성해서 가져와 사용한다.

### 리듀서를 각 기능별로 쪼개서 combineReducers를 통해 합치기
* 각 기능별로 리듀서를 쪼갠다 (reducers/color.js, reducers/number.js)
* reducers/index.js에서 redux의 combineReducers를 통해 합친다.

### 액션, 리듀서를 Container, component에 연결시키는 순서.
* 먼저 일어날 수 있는 액션type을 만든다.
* 액션 type에 맞는 액션생성자(Action creators)를 만든다.
* 각 기능에 맞는 리듀서를 만든다. color.js, number.js등 과 같이...
* 분리되어있는 리듀서 파일들을 합치는 작업을 reducers/index.js에서 만든다.
  - import { combineReducers } from 'redux'; 를 이용한다.
* store를 생성한다.
  - import { createStore } from 'redux' 를 이용하여 store를 생성하고 가져온 reducer를 연결한다.
* Provider를 이용하여 store를 App에 연동한다.
  - import { Provider } from 'react-redux'; 를 이용한다.
* Container컴포넌트에서 connect를 이용하여 여러가지 컴포넌트들을 연결하고 props로 가져올 수 있게 mapStateToProps, mapDispatchToProps 를 사용하여 connect한다.