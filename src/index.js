import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// Redux 관련 불러오기
import {createStore} from 'redux';
//import reducers from './reducers';
import reducers from './modules';
import { Provider } from 'react-redux';
// 스토어 생성
//const store  = createStore(reducers);
// redux 개발자 도구를 사용하기 위한 코딩
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
