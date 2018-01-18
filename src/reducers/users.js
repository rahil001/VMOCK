import {FETCH_USER} from '../actions/index';

export default function(state = [], action){

    switch(action.type){

        case  FETCH_USER:
            return [action.payload.data, ...state]; //state.concat([action.payload.data])
        default:
            state;
    }
    return state;
}