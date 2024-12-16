import { createContext, useState, useContext, useEffect } from "react"

const AnimeContext = createContext()

export const useAnimeContext = () => useContext(AnimeContext)

export const AnimeProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.mal_id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.mal_id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <AnimeContext.Provider value={value}>
        {children}
    </AnimeContext.Provider>
}