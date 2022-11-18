import React, {useState, useContext, useCallback} from "react";

import FilmsContext from "../context/films/filmsContext";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const filmContext = useContext(FilmsContext)
    const {searchFilms, getAllFilms} = filmContext;
    const navigation = useNavigate();

    const handleClick = (e) => {
        if(!!searchTerm.trim()) {
            e.preventDefault()
            searchFilms(searchTerm)
        } else {
            navigation('/')
            getAllFilms()
        }
    }

    const preventSearching = useCallback((e) => {
        setSearchTerm(e.target.value)
    }, [searchTerm])

    return (
        <div className="searchbar">
            <form className="searchbar__form">
                <input type="text" placeholder="Search..."
                       value={searchTerm}
                       onChange={(e) => preventSearching(e) }
                />
                <button className="btn-block" onClick={(e) => handleClick(e)}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;