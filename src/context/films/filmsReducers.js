import {
    SEARCH_FILMS,
    SET_LOADING,
    SET_SINGLE_FILM,
    CLEAR_SINGLE_FILM, SET_COMEDY_FILMS, SET_DRAMA_FILMS, SET_FICTION_FILMS, SEARCHING
} from '../types'

const filmsReducers = (state, action) => {
    switch(action.type) {
        case SET_LOADING:
            return  {
                ...state,
                loading: true
            }
        case SEARCHING:
            return  {
                ...state,
                searching: true
            }

        case SEARCH_FILMS:
            return {
                ...state,
                films: action.payload,
                loading: false,
                searching: true
            }

        case SET_SINGLE_FILM:
            return {
                ...state,
                singleFilm: action.payload,
                loading: false
            }

        case SET_COMEDY_FILMS:
            return {
                ...state,
                comedyFilms: action.payload,
                loading: false
            }

        case SET_DRAMA_FILMS:
            return {
                ...state,
                dramaFilms: action.payload,
                loading: false
            }

        case SET_FICTION_FILMS:
            return {
                ...state,
                fictionFilms: action.payload,
                loading: false
            }

        case CLEAR_SINGLE_FILM:
            return {
                ...state,
                singleFilm: {},
                loading: false
            }

        default:
            return state;
    }
}

export default filmsReducers;