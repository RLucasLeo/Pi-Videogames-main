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
            
            case GET_NAMES: //este se usa en el serachbar
                return{
                    ...state,
                    allVideogames: action.payload
                }
                break;

            case GET_VIDEOGAME: //este es para la ruta detail
                return{
                    ...state,
                    videogame: action.payload,
                } 
                break;
            
                case GET_BY_GENRES:
                    return{
                        ...state,
                        genres: action.payload,
                    }
                break;

            case CREATE_VIDEOGAME:
                    return{
                        ...state
                    }
                    break;

            case ORDER_BY:
                let copia = [...state.allVideogames]; //copia del estado 
                let ordenamiento;
                switch(action.payload){
                    case "Todos":
                        ordenamiento = [...state.allVideogames];
                        break;
                    case "A-Z":
                        ordenamiento = vopia.sort(function(a, b){
                            if (a.name.toloweCase()>b.name.toloweCase()){return 1}
                            if (a.name.toloweCase()<b.name.toloweCase()){return -1}
                            return 0;
                        })
                        break;
                    case "Z-A":
                        ordenamiento = vopia.sort(function(a, b){
                            if (a.name.toloweCase()<b.name.toloweCase()){return 1}
                            if (a.name.toloweCase()>b.name.toloweCase()){return -1}
                            return 0;
                        })
                        break;
                    case "Rating Asc":
                        ordenamiento= copia.sort(function(a, b){
                            return a.rating - b.rating
                        })
                        break;
                    case "Rating Des":
                        ordenamiento= copia.sort(function(a, b){
                            return b.rating - a.rating
                        })
                        break;

                    default:
                        ordenamiento = copia;
                        break;
                }
                return {
                    ...state,
                    allVideogames: ordenamiento,
                    videogame: ordenamiento,
                }
            break;

             case  FILTER_BY_GENRES:
                let auxi=[];
                if(action.payload){
                    aux = state.videogames.filter(e=>{
                        if(e.genres.length === 0){
                            return e.genres;
                        }
                        else if (e.genres.some(e=> e.name === action.payload)){
                            return e.genres.map(el => el.name)
                        }
                        else {
                            return e.genres.includes(action.payload)
                        }
                    })
                }
                else{
                    aux=state.videogames
                }
                return {
                    ...state,
                    allVideogames: aux,
                }
            break;  

                case FILTER_BY_SOURCE:
                let getV= state.videogames;
                let filtrados = [];

                switch(action.payload){
                    case "API":
                        filtrados=getV.filter(el=>typeof(el.id)=== 'number');
                    break;
                    case "CREADO":
                        filtrados= getV.filter(el=> isNaN(el.id)); 
                    break;
                    default: 
                    filtrados=getV;
                    break;
                }
                return {
                    ...state, 
                    allVideogames: filtrados,
                }
            break;  
            
             case GET_PLATFORMS:
                return{
                    ...state,
                    platforms: [...action.payload]
                }
             default:
                return{
                    ...state,
                }
                break;
        }
    }


export default rootReducer;