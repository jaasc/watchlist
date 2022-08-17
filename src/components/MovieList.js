import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const MovieList = ({ add, list, watch, setWatch }) => {    
    const [movieDetail, setMovieDetail] = useState([])
    const myWatchlist = add ? list : watch

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watch))
    }, [watch])

    const saveToWatch = (id) => {
        add ? !watch.find(ids => ids === id) && setWatch(movie => [id, ...movie]) :
            setWatch(movie => movie.filter(mId => mId !== id))
    }

    useEffect(() => {
        setMovieDetail([])
        myWatchlist.map(movie => getMovieDetail(movie))

        async function getMovieDetail(movieId){
            const res = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=aa61f03a&type=movie`)
            const data = await res.json()
            setMovieDetail(movie => [...movie, {data}])
        } 
        
    }, [myWatchlist])

    return (
        movieDetail.map(movie => 
            <div className="search-movie flex" key={movie.data.imdbID}>
                <img src={movie.data.Poster} alt="poster"/>
                <div className="movie-details">
                    <div className="flex">
                        <h2>{movie.data.Title}</h2>
                        <FontAwesomeIcon icon={faStar} className="star-icon"/><p className="small-text">{movie.data.Ratings[0].Value.replace("/10", "")}</p>
                    </div>
                    <div className="movie-spec flex">
                        <p className="small-text">{movie.data.Runtime}</p>
                        <p className="small-text">{movie.data.Genre}</p>
                        <p className="small-text"
                            onClick={() => saveToWatch(movie.data.imdbID)}>
                            <FontAwesomeIcon icon={add ? faCirclePlus : faCircleMinus} className="update-icon"/>Watchlist</p>
                    </div>
                    <p className="movie-desc">{movie.data.Plot}</p>
                </div>
            </div>)
    )
}

export default MovieList;