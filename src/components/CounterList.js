import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import {List} from 'immutable';

import './CounterList.css';

const propTypes = {
    counters: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

const defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined!'),
    onDecrement: () => console.warn('onDecrement not defined!'),
    onSetColor: () => console.warn('onSetColor not defined!')
};

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    const counterList = counters.map(
        ( counter, i ) => {
            return (
                <Counter 
                key={i}
                index={i}
                {...counter.toJS()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor} 
                />
            );
        }
    );

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = propTypes;
CounterList.defaultProps = defaultProps;

export default CounterList;