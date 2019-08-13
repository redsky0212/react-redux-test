## 설명

### React Redux 
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