import * as types from './ActionTypes';

// action 생성자 함수
export function increment(){
    return {
        type: types.INCREMENT
    };
}
export function decrement() {
    return {
        type: types.DECREMENT
    };
}
export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}