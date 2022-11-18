import {useReducer} from 'react';
import FilmsContext from "./filmsContext";
import FilmsReducer from "./filmsReducers";
import {
    SEARCH_FILMS,
    SET_LOADING,
    SET_SINGLE_FILM,
    CLEAR_SINGLE_FILM,
    SET_COMEDY_FILMS,
    SET_DRAMA_FILMS, SET_FICTION_FILMS, SEARCHING
} from "../types";

import React from "react";
import axios from "axios";

const FilmsState = (props) => {
    const initialState = {
        films: [],
        singleFilm: {},
        comedyFilms: [],
        dramaFilms: [],
        fictionFilms: [],
        loading: false,
        searching: false,
    }

    const [state, dispatch] = useReducer(FilmsReducer, initialState)

    const searchFilms = async (searchTerm) => {
        dispatch({type: SET_LOADING})
        dispatch({type: SEARCHING})

        const {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

        dispatch({
            type: SEARCH_FILMS,
            payload: data,
        })
    }

    const getSingleFilm = async (id) => {
        dispatch({type: SET_LOADING})
        const {data} = await axios.get(`https://api.tvmaze.com/shows/${id}`)

        dispatch({
            type: SET_SINGLE_FILM,
            payload: data
        })
    }

    const getAllFilms = async () => {
        dispatch({type: SET_LOADING})
        const {data} = await axios.get(`https://api.tvmaze.com/shows`)
        const comedies = data.filter(item => {
                if (item.genres.find(it => it === 'Comedy')) {
                    return item
                } else {
                    return false
                }

            }
        )
        const dramas = data.filter(item => {
                if (item.genres.find(it => it === 'Drama')) {
                    return item
                } else {
                    return false
                }
            }
        )
        const fictions = data.filter(item => {
                if (item.genres.find(it => it === "Science-Fiction")) {
                    return item
                } else {
                    return false
                }
            }
        )

        dispatch({
            type: SET_COMEDY_FILMS,
            payload: comedies
        })

        dispatch({
            type: SET_DRAMA_FILMS,
            payload: dramas
        })

        dispatch({
            type: SET_FICTION_FILMS,
            payload: fictions
        })
    }

    const clearSingleShow = () => {
        dispatch({
            type: CLEAR_SINGLE_FILM
        })
    }

    return (
        <FilmsContext.Provider value={{
            films: state.films,
            singleFilm: state.singleFilm,
            comedyFilms: state.comedyFilms,
            dramaFilms: state.dramaFilms,
            fictionFilms: state.fictionFilms,
            loading: state.loading,
            searching: state.searching,
            searchFilms,
            getSingleFilm,
            clearSingleShow,
            getAllFilms,
        }}>
            {props.children}
        </FilmsContext.Provider>
    )
}

export default FilmsState;