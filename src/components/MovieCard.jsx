import "../css/MovieCard.css"
import { useAnimeContext } from "../contexts/AnimeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

function MovieCard({ movie }) {

    const { isFavorite, addToFavorites, removeFromFavorites } = useAnimeContext();
    const favorite = isFavorite(movie.mal_id)
    function onFavouriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.mal_id)
        else addToFavorites(movie)
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.images?.jpg?.large_image_url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavouriteClick}>
                        <FontAwesomeIcon icon={favorite ? faHeart : faHeartBroken} />
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
            </div>
        </div>
    )

}

export default MovieCard