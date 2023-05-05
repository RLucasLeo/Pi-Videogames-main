import {
    GET_ALL_VIDEOGAMES,
    GET_NAMES,
    GET_VIDEOGAME,
    GET_BY_GENRES,
    CREATE_VIDEOGAME,
    ORDER_BY,
    FILTER_BY_SOURCE,
    FILTER_BY_GENRES,
    GET_PLATFORMS
} from '../actions/index'

const initialState = {
    allVideogames: [],
    videogames: [],
    videogame: [],
    genres: [],
    platforms: []
}
function rootReducer(state=initialState, action){
        switch (action.type) {
            case GET_ALL_VIDEOGAMES:
                return{
                    ...state,
                    allVideogames: action.payload,
                    videogames: action.payload
                }
                break;
            
            case GET_NAMES:
                return{
                    ...state,
                    allVideogames: action.payload
                }
                break;

            case GET_VIDEOGAME:
            default:
                break;
        }
    }


export default rootReducer;