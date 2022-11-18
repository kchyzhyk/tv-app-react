import {Link} from "react-router-dom";

const ListItem = ({image, id, rating, name}) => {
    return (
            <Link to={`/details/${id}`} className="list-item">
                <div className="img-block">
                    <img src={image} alt={name} />
                </div>
                <div className="list-item__info">
                    <h4 className="info__name">{name}</h4>
                    <h4 className="info__rating">{rating}</h4>
                </div>
            </Link>
    )
}

export default ListItem;