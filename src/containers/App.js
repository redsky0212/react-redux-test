import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CounterContainer from './CounterContainer';

const propTypes = {
    
};

const defaultProps = {
    
};

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CounterContainer />
            </div>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;