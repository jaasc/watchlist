import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

const Watchlist = ({ watch, setWatch }) => {    
    return(
        <div className="container">
            <div className="movie-list-result">  
                {
                    watch.length === 0 ? 
                    <div className="search-empty">
                        <h2>Your watchlist is looking a little empty.</h2>
                        <h3><Link to="/" className="link"><FontAwesomeIcon icon={faCirclePlus} className="update-icon"/>Let's add some movies</Link></h3>
                    </div> :
                    <MovieList add={false} watch={watch} setWatch={setWatch}/>
                }
            </div>
        </div>
    )
}

export default Watchlist;