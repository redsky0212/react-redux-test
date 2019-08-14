import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

const defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => {console.warn('onIncrement not defined!');},
    onDecrement: () => { console.warn('onDecrement not defined!'); },
    onSetColor: () => { console.warn('onSetColor not defined!'); }
};

// 함수형 컴포넌트로 설정
const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
        className="Counter"
        onClick={() => onIncrement(index)}
        onContextMenu={(e) => {
            e.preventDefault();
            onDecrement(index);
        }}
        onDoubleClick={() => onSetColor(index)}
        style={{backgroundColor: color}}>
            {number}
        </div>
    );
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;