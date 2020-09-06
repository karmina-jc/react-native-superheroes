import axios from 'axios';

//constantes
const dataInicial = {
    supers : []
}

const GET_DATA_SUPERS = 'GET_DATA_SUPERS'

//reducers 

export default function supersReducer (state = dataInicial, action) {
    switch (action.type) {
        case GET_DATA_SUPERS:
            return {...state, supers: action.payload}
    
        default:
            return state
    }
}

//acciones

export const getDataHeroes = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://157.245.138.232:9091/api/v1/test/superheroes/')
        dispatch({
            type: GET_DATA_SUPERS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}