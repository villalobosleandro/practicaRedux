import {createStore} from 'redux';

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: 'Nombre1',
            foto: 'https://cdn.pixabay.com/photo/2019/11/26/04/06/alpaca-4653525__340.jpg'
        },
        {
            id: 2,
            nombre: 'Nombre2',
            foto: 'https://cdn.pixabay.com/photo/2019/11/19/14/11/landscape-4637538__340.jpg'
        },
        {
            id: 3,
            nombre: 'Nombre3',
            foto: 'https://cdn.pixabay.com/photo/2019/11/26/11/16/imp-4654321__340.jpg'
        },
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    console.log(action);
    
    switch(action.type) {
        case "AGREGAR_TITULAR":
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }

        case "AGREGAR_SUPLENTE":
            return {
                ...state,
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }

        case "QUITAR_TITULAR":
                return {
                    ...state,
                    titulares: state.titulares.filter(j => j.id !== action.jugador.id),
                    jugadores: state.jugadores.concat(action.jugador),
                }

        case "QUITAR_SUPLENTE":
                return {
                    ...state,
                    suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
                    jugadores: state.jugadores.concat(action.jugador),
                }
                
    }
    
    return state;
}

export default createStore(reducerEntrenador);