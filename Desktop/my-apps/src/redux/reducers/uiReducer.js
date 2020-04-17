import {SET_ERRORS,CLEAR_ERRORS,LOADING_UI} from '../reducers/types'

const intitialState = {
    loading:false,
    errors:null
}

export default function(state = intitialState,action){
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
            case CLEAR_ERRORS:
                return {
                    loading:false,
                    errors: null
                }
                case LOADING_UI:
                    return {
                        ...state,
                        loading:true
                    }
        default:
            return state

    }
}