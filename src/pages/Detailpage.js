import {useContext, useEffect} from "react";
import FilmsContext from "../context/films/filmsContext";
import {Link, useParams} from "react-router-dom";


const DetailPage = () => {
    const { id } = useParams();
    const filmContext = useContext(FilmsContext)
    const {getSingleFilm, singleFilm, loading} = filmContext

    const convertSummery = (summ) => {
        if(summ?.includes("<p>")) {
            return summ?.replace(/(?!(<br>|<br\s\/>))<\/?[^>]+>/g, '')
        }
    }

    useEffect(() => {
        getSingleFilm(id)
        //eslint-disable-nex-line
    }, [])

    return (
        <div className="single-film__container">
            <div className="single-film__content">
                <div className="img-block">
                    <img src={singleFilm.image ? singleFilm.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
                         alt={singleFilm.name}/>
                </div>

                <div className="film-info">
                    <div className='film-info__item'>
                        <h2>{singleFilm.name}</h2>
                    </div>
                    {singleFilm.genres?.length > 0 ?
                        <div className='film-info__item'>
                            {singleFilm?.genres?.map((item) =>  <div className="genre">{item}</div>)}
                        </div>
                        : null}
                    <div className='film-info__item'>
                        <div>Language:</div>
                        <div>{singleFilm.language}</div>
                    </div>
                    <div className='film-info__item'>
                        <div>Average Runtime:</div>
                        <div>{singleFilm?.averageRuntime} min.</div>
                    </div>
                    <div className='film-info__item'>
                        <div>Premiered:</div>
                        <div>{singleFilm.premiered}</div>
                    </div>
                    <div className='film-info__item'>
                        <div>Official Website:</div>
                        <Link to={singleFilm.officialSite}>https://www.netflix.com/title/</Link>
                    </div>
                    <div className='film-info__item'>
                        <div>
                            {convertSummery(singleFilm?.summary)}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DetailPage;