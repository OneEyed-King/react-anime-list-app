import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'
import "../css/Home.css"
import { fetchRandomAnime, fetchSearchedAnime } from "../services/Api"

const Home = () => {

  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopAnime = async () => {
      try {
        const topAnime = await fetchRandomAnime()
        setMovies(topAnime)
      } catch (err) {
        console.log(err);
        setError('unable to load animes...')
      } finally {
        setLoading(false)
      }
    }

    loadTopAnime()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!searchValue.trim()) return
    if (loading) return
    setLoading(true)
    try {
      const searchedAnime = await fetchSearchedAnime(searchValue);
      setMovies(searchedAnime);
      setError(null)
    } catch (err) {
      console.log(err);
      setError('unable to load animes...')
    } finally {
      setLoading(false)
    }



  }

  return (
    <div className='Home'>
      <form onSubmit={handleSubmit} className='search-bar'>
        <input type='text' placeholder='Search For Anime...' className='search-input' value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}></input>
        <button className='search-button' type='submit'>Search</button>
      </form>
      {error && <div className='error-=messsage'>{error}</div>}
      {loading ? (<div>Loading...</div>) : <div className='movies-grid'>
        {movies.map((movies) => <MovieCard movie={movies} key={movies.mal_id} />)}
      </div>}

    </div>

  )
}

export default Home