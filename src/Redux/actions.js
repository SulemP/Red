const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE = 'REMOVE'

export const sumarNumero = (numero) => {
    return {
        type: ADD_NUMBER,
        payload: numero + 1,
    }
}

export const restarNumero = (numero) => {
    return {
        type: REMOVE,
        payload: numero - 1,
    }
}