import { createAction, handleActions } from 'redux-actions';
import {Map, List} from 'immutable';

// 액션타입지정
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

// 액션 생성자 만들기 (createAction) 파라미터가 뭐가 있는지 모르므로 주석에 달아주자.
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT);   // index
export const decrement = createAction(DECREMENT);   // index
export const setColor = createAction(SET_COLOR);    // index, color

// 초기 store객체
const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
});

// handleActions를 이용하여 리듀서를 등록한다.
export default handleActions({
    [CREATE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.push(
            Map({
                color: action.payload,
                number: 0
            })
        ));
    },
    [REMOVE]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.pop());
    },
    [INCREMENT]: (state, action) => {
        const counters = state.get('counters');
        const index = action.payload;
        return state.set('counters', counters.update(index, ( counter ) => {
            return counter.set('number', counter.get('number') + 1);
        }));
    },
    [DECREMENT]: (state, action) => {
        const counters = state.get('counters');
        const index = action.payload;
        return state.set('counters', counters.update(index, ( counter ) => {
            return counter.set('number', counter.get('number') - 1);
        }));
    },
    [SET_COLOR]: (state, action) => {
        const counters = state.get('counters');
        const index = action.payload.index;
        const color = action.payload.color;

        return state.set('counters', counters.update(index, ( counter ) => {
            return counter.set('color', color);
        }));
    }
}, initialState);