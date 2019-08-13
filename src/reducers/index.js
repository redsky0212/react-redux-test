
const initialState = {
    num : 0,
    foo : 'bar',
    bar : 'foo'
};

function counter( state = initialState, action ){
    switch( action.type ){
        case 'INCREMENT' : 
            return {  
                ...state,
                num: state.num + action.diff 
            };
        case 'DECREMENT' :
            return { 
                ...state,
                num: state.num - action.diff 
            };
        default :
            return state;
    }
}

export default counter;