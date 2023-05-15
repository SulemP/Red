const initialState = {
    numero: 0
}

const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE = 'REMOVE'

export default function reducer(state = initialState, action) {
    switch (action.type) { 
        case ADD_NUMBER:
            return {
                ...state,
                numero: action.payload
            }    
        case REMOVE:
            return {
                ...state,
                numero: action.payload
            }    
        default:
            return {
                ...state
            }
    }
}