/**
 *   action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
 *   여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
 *   scope 이슈와 관계 없이 편의상 사용되었습니다.
*/

import * as types from './ActionTypes';

export const increment = () => ({type: types.INCREMENT});
export const decrement = () => ({ type: types.DECREMENT });
// 다른 생성자와 다르게 파라미터를 갖고 있는 생성자
// 순수 함수로 이루어 져야 하므로 color값을 randomizeColor 로 적용하면 안됨.
export const setColor = (color) => ({
        type: types.SET_COLOR,
        color
    });