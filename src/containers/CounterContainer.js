import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

import { getRandomColor } from '../utils';

// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// 핵심 (카운터 컴포넌트이 컨테이너 컴포넌트)
// connect를 이용하여 각 데이터와 Counter컴포넌트를 연결시켜줌
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;