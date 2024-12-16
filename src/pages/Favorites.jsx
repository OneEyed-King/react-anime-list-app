import React from 'react'
import "../css/Favorites.css"
import { useAnimeContext } from "../contexts/AnimeContext"
import MovieCard from '../components/MovieCard'

const Favorites = () => {

  const { favorites } = useAnimeContext();

  if (favorites.length > 0) {
    return (
      <div className="favorite">
        <div className='movies-grid'>
          {favorites.map((movies) => <MovieCard movie={movies} key={movies.mal_id} />)}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>Welcome to Favorites page</h2>
      <p>Add your favorite animes here</p>
    </div>
  )
}

export default Favorites