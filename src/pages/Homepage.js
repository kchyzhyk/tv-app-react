import React, {useEffect, useState} from "react";
import SearchBar from "../components/SearchBar";
import {useContext} from "react";
import FilmsContext from "../context/films/filmsContext";
import ListItem from "../components/ListItem";
import {Link} from "react-router-dom";


const Homepage = () => {
    const filmContext = useContext(FilmsContext)
    const {loading, films, getAllFilms, comedyFilms, dramaFilms, fictionFilms, searching} = filmContext
    // const [searching, setSearching] = useState(true)

    useEffect(() => {
        getAllFilms()
    }, [])

    return (
        <div className="homepage-container">
            <SearchBar/>
            {loading ?
                <div className="loading-container">
                    <h2>Loading...</h2>
                </div>
                : (
                    <>
                        {
                            searching ?

                            <div className="lists-block">
                                {films?.map(item => (
                                    <ListItem key={item.show.id}
                                              id={item.show.id}
                                              image={item.show.image? item.show.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
                                              name={item.show.name}
                                              rating={
                                                  item.show.rating.average
                                                      ? item.show.rating.average
                                                      : "No rating"
                                              }
                                    />))}
                            </div>

                            :

                            (
                                <>
                                    <div>
                                        <h3>Comedies</h3>
                                        <div className="lists-block">
                                            {comedyFilms?.map(item => (
                                                <Link to={`/details/${item.id}`} className="list-item">
                                                    <div className="img-block">
                                                        <img src={item.image?.medium} alt={item.name}/>
                                                    </div>
                                                    <div className="list-item__info">
                                                        <h4 className="info__name">{item.name}</h4>
                                                        <h4 className="info__rating">{item.rating?.average}</h4>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3>Dramas</h3>
                                        <div className="lists-block">
                                            {dramaFilms?.map((item, i) => (
                                                <Link key={item.id + i} to={`/details/${item.id}`} className="list-item">
                                                    <div className="img-block">
                                                        <img src={item.image?.medium} alt={item.name} />
                                                    </div>
                                                    <div className="list-item__info">
                                                        <h4 className="info__name">{item.name}</h4>
                                                        <h4 className="info__rating">{item.rating?.average}</h4>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3>Science-Fiction</h3>
                                        <div className="lists-block">
                                            {fictionFilms?.map((item, i) => (
                                                <Link key={item.id + i} to={`/details/${item.id}`} className="list-item">
                                                    <div className="img-block">
                                                        <img src={item.image?.medium} alt={item.name} />
                                                    </div>
                                                    <div className="list-item__info">
                                                        <h4 className="info__name">{item.name}</h4>
                                                        <h4 className="info__rating">{item.rating?.average}</h4>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )

                        }
                    </>
                )
            }
        </div>
    )
}

export default Homepage;