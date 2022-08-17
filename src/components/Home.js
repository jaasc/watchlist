import { faFilm, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import MovieList from "./MovieList";

const Home = ({ watch, setWatch }) => {
    const [click, setClick] = useState(false)
    const [search, setSearch] = useState()
    const [searchResult, setSearchResult] = useState([])

    const searchMovie = async (e) => {
        e.preventDefault()
        setSearchResult([])
        const res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=aa61f03a&type=movie`)
        const data = await res.json()
        data.Search && data.Search.map(movie => setSearchResult(list => [...list, movie.imdbID]))
        setClick(true)
    }   

    return(
        <div className="container">
            <form className="search-div" onSubmit={searchMovie}>
                <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                <input type="text" 
                        placeholder="Search for a movie"
                        onChange={(e) => setSearch(e.target.value)}/>
                <button aria-label="search movie" 
                        className="search-btn"
                        type="submit">
                            Search</button>
            </form>
            <div className="movie-list-result">  
                {
                    searchResult.length === 0 ? 
                    <div className="search-empty">
                        {click ? 
                            <h2>Unable to find what you're looking for. Please try another search</h2> :
                            <>
                            <FontAwesomeIcon icon={faFilm} className="movie-icon"/>
                            <h2>Start exploring</h2>
                            </>}
                    </div> :
                    <MovieList add={true} list={searchResult} watch={watch} setWatch={setWatch}/>
                }
            </div>
        </div>
    )
}

export default Home;